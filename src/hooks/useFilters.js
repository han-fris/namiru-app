import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router';
import { filterCategories } from '../config';

export const createFilterSearchParams = (filters) => {
  const stringifiedSearchParams = new URLSearchParams();
  for (const key in filters) {
    stringifiedSearchParams.set(key, filters[key].join(' '));
  }
  return stringifiedSearchParams;
};

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
      setSearchParams(createFilterSearchParams(newFilters));
    },
    [setSearchParams]
  );

  useEffect(() => {
    setResultFilters(parseSearchParams(searchParams));
  }, [searchParams]);

  return [resultFilters, setFilters];
}
