export const FilterCategory = ({ children, name }) => {
  return (
    <fieldset>
      <legend>{name}</legend>
      {children}
    </fieldset>
  );
};
