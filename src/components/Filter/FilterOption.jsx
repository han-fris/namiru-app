export const FilterOption = ({ label, name, value }) => {
  return (
    <label>
      <input type="checkbox" name={name} value={value} />
      {label}
    </label>
  );
};
