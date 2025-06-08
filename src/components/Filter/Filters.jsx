import { FilterOption } from './FilterOption';
import { FilterCategory } from './FilterCategory';
import { useSearchParams } from 'react-router';
import { filterCategories } from '../../config';

export const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const changeHandler = (e) => {
    const formData = new FormData(e.currentTarget);
    const newSearchParams = {};
    for (const [key, value] of formData.entries()) {
      newSearchParams[key] ??= [];
      newSearchParams[key].push(value);
    }
    const stringifiedSearchParams = new URLSearchParams();
    for (const key in newSearchParams) {
      stringifiedSearchParams.set(key, newSearchParams[key].join(' '));
    }
    setSearchParams(stringifiedSearchParams);
  };

  return (
    <form onChange={changeHandler}>
      {filterCategories.map((category) => (
        <FilterCategory key={category.name} label={category.label}>
          {Object.entries(category.options).map(([value, label]) => (
            <FilterOption
              key={value}
              label={label}
              name={category.name}
              value={value}
            />
          ))}
        </FilterCategory>
      ))}
    </form>
  );
};
