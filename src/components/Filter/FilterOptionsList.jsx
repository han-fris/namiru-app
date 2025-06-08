import './FilterOption.css';
import { filtersByCategoryName } from '../../config';
import { FilterOption } from './FilterOption';

export const FilterOptionsList = ({ name }) => {
  const filterOption = filtersByCategoryName[name];

  console.log(filterOption);

  return (
    <div className="filter-category__details">
      {Object.entries(filterOption.options).map(([value, label]) => (
        <FilterOption key={value} label={label} value={value} />
      ))}
    </div>
  );
};
