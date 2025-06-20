import { FilterForm } from './FilterForm';
import { FilterOption } from './FilterOption';
import { FilterCategory } from './FilterCategory';
import { filterCategories } from '../../config';
import { useFilters } from '../../hooks/useFilters';
import './Filters.css';

export const Filters = () => {
  const [filters, setFilters] = useFilters();
  const filtersObj = Object.fromEntries(filters);

  return (
    <FilterForm
      submitOnChange={true}
      onSubmit={setFilters}
      className="filter__form"
    >
      {filterCategories.map((category) => (
        <FilterCategory
          open={category.name in filtersObj}
          key={category.name}
          label={category.label}
        >
          <div className="filters__options">
            {Object.entries(category.options).map(([value, label]) => (
              <FilterOption
                key={value}
                label={label}
                name={category.name}
                value={value}
                isChecked={filtersObj[category.name]?.includes(value)}
              />
            ))}
          </div>
        </FilterCategory>
      ))}
    </FilterForm>
  );
};
