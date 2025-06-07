import { FilterOption } from './FilterOption';
import { FilterCategory } from './FilterCategory';

export const Filters = () => {
  return (
    <form>
      <FilterCategory>
        <FilterOption />
        <FilterOption />
        <FilterOption />
        <FilterOption />
      </FilterCategory>
      <FilterCategory>
        <FilterOption />
        <FilterOption />
        <FilterOption />
        <FilterOption />
        <FilterOption />
      </FilterCategory>
      <FilterCategory>
        <FilterOption />
        <FilterOption />
        <FilterOption />
        <FilterOption />
      </FilterCategory>
    </form>
  );
};
