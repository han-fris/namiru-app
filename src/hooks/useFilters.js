import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router';
import { filters } from '../config';

export function useFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [resultFilters, setResultFilters] = useState([]);

  const setFilters = useCallback(
    (newFilters) => {
      const stringifiedSearchParams = new URLSearchParams();
      for (const key in newFilters) {
        stringifiedSearchParams.set(key, newFilters[key].join(' '));
      }
      setSearchParams(stringifiedSearchParams);
    },
    [setSearchParams]
  );

  useEffect(() => {
    const newFilters = [];
    for (const filter of filters) {
      const filterValue = searchParams.get(filter.name);
      if (filterValue) {
        newFilters.push([filter.name, filterValue.split(' ')]);
      }
    }
    setResultFilters(newFilters);
  }, [searchParams]);

  return [resultFilters, setFilters];
}
