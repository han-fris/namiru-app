import './FilterOptionsList.css';
import { filtersByCategoryName } from '../../config';
import { FilterOption } from './FilterOption';

export const FilterOptionsList = ({ name }) => {
  const filterOption = filtersByCategoryName[name];

  return (
    <div className="filter-option-list">
      {Object.entries(filterOption.options).map(([value, label]) => (
        <FilterOption key={value} label={label} value={value} name={name} />
      ))}
    </div>
  );
};
