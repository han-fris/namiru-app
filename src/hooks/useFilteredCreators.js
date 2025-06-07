import { useState, useEffect } from 'react';
import { creatorsSourceUrl } from '../config';
import { useFilters } from './useFilters';

export const useFilteredCreators = () => {
  const [allCreators, setAllCreators] = useState(null);
  const [filteredCreators, setFilteredCreators] = useState([]);

  const filters = useFilters();

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

    const result = [];
    const ranking = {};
    for (const creator of allCreators) {
      let hits = 0;
      for (const [filterKey, filterValues] of filters) {
        console.log(filterKey, filterValues);
        for (const filterValue of filterValues) {
          console.log({ creator, filterKey, filterValue });
          if (creator[filterKey][filterValue]) {
            hits++;
          }
        }
      }
      if (hits) {
        result.push(creator);
        ranking[creator.id] = hits;
      } else {
        ranking[creator.id] = 0;
      }
    }
    result.sort((a, b) => {
      return ranking[b.id] - ranking[a.id];
    });
    setFilteredCreators(result);
  }, [allCreators, filters]);

  return filteredCreators;
};
