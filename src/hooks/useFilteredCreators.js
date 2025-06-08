import { useState, useEffect } from 'react';
import { creatorsSourceUrl } from '../config';
import { useFilters } from './useFilters';

const exclusiveFilters = {
  region: true,
  creatorType: true,
};

function filterAndSortCreators(allCreators, filters) {
  if (!filters || !filters.length) {
    return allCreators;
  }

  const scores = {};
  const filteredCreators = allCreators.filter((creator) => {
    // filters = [['region', [1, 2]], ['creatorType', [1]]]
    let creatorScore = 0;
    const allFiltersMatched = filters.every(([filterKey, filterValues]) => {
      if (exclusiveFilters[filterKey]) {
        // creator.region = {1: false, 2: true}
        // filters.region = [1, 2]
        let anyFilterMatched = false;
        for (const filterValue of filterValues) {
          if (creator[filterKey][filterValue]) {
            anyFilterMatched = true;
            break;
          }
        }
        if (!anyFilterMatched) {
          return false; // Tvrdy filtr - pokud nematchne, tvurce uplne vynechame
        }
        return true;
      }

      let currentFilterHits = 0;
      // return filterValues.some((value) => creator[filterKey][value]);
      for (const filterValue of filterValues) {
        if (creator[filterKey][filterValue]) {
          currentFilterHits++;
        }
      }
      if (currentFilterHits > 0) {
        creatorScore += currentFilterHits;
        return true;
      }
      return false;
    });
    scores[creator.id] = creatorScore;
    return allFiltersMatched;
  });
  filteredCreators.sort((a, b) => {
    return scores[b.id] - scores[a.id];
  });
  return filteredCreators;
}

export const useFilteredCreators = () => {
  const [allCreators, setAllCreators] = useState(null);
  const [filteredCreators, setFilteredCreators] = useState([]);

  const [filters] = useFilters(window.location.search);

  useEffect(() => {
    const uploadCreators = async () => {
      const response = await fetch(creatorsSourceUrl);
      const responseData = await response.json();
      console.log(responseData);
      setAllCreators(responseData);
    };
    uploadCreators();
  }, []);

  useEffect(() => {
    if (!allCreators) {
      return;
    }

    if (!filters.length) {
      setFilteredCreators(allCreators);
      return;
    }

    const result = filterAndSortCreators(allCreators, filters);
    setFilteredCreators(result);
  }, [allCreators, filters]);

  return filteredCreators;
};
