import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { filters } from '../config';

export function useFilters() {
  const [searchParams] = useSearchParams();
  const [resultFilters, setResultFilters] = useState([]);

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

  return resultFilters;
}
