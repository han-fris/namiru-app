export const FilterCategory = ({ children, label }) => {
  return (
    <fieldset>
      <legend>{label}</legend>
      {children}
    </fieldset>
  );
};
