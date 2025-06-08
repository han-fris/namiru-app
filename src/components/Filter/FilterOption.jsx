export const FilterOption = ({ label, name, value, isChecked }) => {
  return (
    <label>
      <input
        type="checkbox"
        name={name}
        value={value}
        defaultChecked={isChecked ?? false}
      />
      {label}
    </label>
  );
};
