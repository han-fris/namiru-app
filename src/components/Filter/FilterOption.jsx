export const FilterOption = ({ label, name, value, isChecked, onChange }) => {
  return (
    <label>
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={isChecked ?? false}
        onChange={onChange}
      />
      {label}
    </label>
  );
};
