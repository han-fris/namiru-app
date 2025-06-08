import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router';
import { filterCategories } from '../config';

function parseSearchParams(searchParams) {
  const newFilters = [];
  for (const filterCategory of filterCategories) {
    const filterValue = searchParams.get(filterCategory.name);
    if (filterValue) {
      newFilters.push([filterCategory.name, filterValue.split(' ')]);
    }
  }
  return newFilters;
}

export function useFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

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
