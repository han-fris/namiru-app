import './FilterOption.css';

export const FilterOption = ({ label, name, value, isChecked }) => {
  return (
    <label className="filter-option__label">
      <input className="filter-option__input"
        type="checkbox"
        name={name}
        value={value}
        defaultChecked={isChecked ?? false}
      />
      {label}
    </label>
  );
};
