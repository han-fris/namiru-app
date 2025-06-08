import './FilterOption.css';
export const FilterCategory = ({ children, label }) => {
  return (
    <details className="filter-category__details">
      <summary className="filter-category__summary">{label}</summary>
      {children}
    </details>
  );
};
