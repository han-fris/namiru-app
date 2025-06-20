import './FilterCategory.css';
export const FilterCategory = ({ children, label, open }) => {
  return (
    <details open={open} className="filter-category__details">
      <summary className="filter-category__summary">{label}</summary>
      {children}
    </details>
  );
};
