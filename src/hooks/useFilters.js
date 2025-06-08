import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router';
import { filters } from '../config';

function parseSearchParams(searchParams) {
  const newFilters = [];
  for (const filter of filters) {
    const filterValue = searchParams.get(filter.name);
    if (filterValue) {
      newFilters.push([filter.name, filterValue.split(' ')]);
    }
  }
  return newFilters;
}

export function useFilters() {
  const [searchParams, setSearchParams] = useSearchParams(
    window.location.search
  );

  const [resultFilters, setResultFilters] = useState(
    parseSearchParams(searchParams)
  );

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
    setResultFilters(parseSearchParams(searchParams));
  }, [searchParams]);

  return [resultFilters, setFilters];
}
