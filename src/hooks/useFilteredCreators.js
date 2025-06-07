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
    if (!allCreators) return;

    const result = [];
    const filtersByKey = Object.entries(filters);
    for (const creator of allCreators) {
      let hits = 0;
      for (const [filterKey, filterValues] of filtersByKey) {
        for (const filterValue of filterValues) {
          if (creator[filterKey][filterValue]) {
            hits++;
          }
        }
      }
      if (hits) {
        result.push(creator);
      }
    }
    setFilteredCreators(result);
  }, [allCreators, filters]);

  return filteredCreators;
};
