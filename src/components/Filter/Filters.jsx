import { FilterOption } from './FilterOption';
import { FilterCategory } from './FilterCategory';
import { filterCategories } from '../../config';
import { useFilters } from '../../hooks/useFilters';
import './FilterOption.css'

export const Filters = () => {
  const [filters, setFilters] = useFilters();

  const changeHandler = (e) => {
    const formData = new FormData(e.currentTarget);
    const newSearchParams = {};
    for (const [key, value] of formData.entries()) {
      newSearchParams[key] ??= [];
      newSearchParams[key].push(value);
    }
    setFilters(newSearchParams);
  };
  const filtersObj = Object.fromEntries(filters);

  return (
    <form onChange={changeHandler} className='filters__form'>
      {filterCategories.map((category) => (
        <FilterCategory key={category.name} label={category.label}>
          {Object.entries(category.options).map(([value, label]) => (
            <FilterOption
              key={value}
              label={label}
              name={category.name}
              value={value}
              isChecked={filtersObj[category.name]?.includes(value)}
            />
          ))}
        </FilterCategory>
      ))}
    </form>
  );
};
