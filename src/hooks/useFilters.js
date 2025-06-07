import { useSearchParams } from 'react-router';
import { filters } from '../config';

export function useFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const resultFilters = [];
  for (const filter of filters) {
    const filterValue = searchParams.get(filter.name);
    if (filterValue) {
      resultFilters.push(filter.name, filterValue.split(' '));
    }
  }
  console.log(resultFilters);
  return resultFilters;
}
