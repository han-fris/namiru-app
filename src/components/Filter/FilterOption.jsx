import './FilterOption.css';
/*
const dummyCallback = () => {};

export const FilterOption = ({ label, name, value, isChecked }) => {
  return (
    <label className="filter-option__label">
      <input
        className="filter-option__input"
        type="checkbox"
        name={name}
        value={value}
        checked={isChecked !== undefined ? isChecked : false}
        onChange={dummyCallback}
      />
      {label}
    </label>
  );
};
*/

export const FilterOption = ({ label, name, value, isChecked }) => {
  return (
    <label className="filter-option__label">
      <input
        className="filter-option__input"
        type="checkbox"
        name={name}
        value={value}
        defaultChecked={isChecked !== undefined ? isChecked : false}
      />
      {label}
    </label>
  );
};
