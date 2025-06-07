import { useSearchParams } from 'react-router';
import { filters } from '../config';

export function useFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const resultFilters = {};
  for (const filter of filters) {
    const filterValue = searchParams.get(filter.name);
    if (filterValue) {
      resultFilters[filter.name] = filterValue.split(' ');
    }
  }
  // const resultFilters = filters.map((filter) => {
  //   const filterValue = searchParams.get(filter.name);
  //   if (filterValue) {
  //     return filterValue.split(' ');
  //   }
  // });
  console.log(resultFilters);
  return resultFilters
}
