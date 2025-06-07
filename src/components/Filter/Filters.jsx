import { FilterOption } from './FilterOption';
import { FilterCategory } from './FilterCategory';

export const Filters = () => {
  return (
    <form>
      <FilterCategory name="Typ tvůrce">
        <FilterOption name="Švadelena, krejčí" />
        <FilterOption name="Krejčovská dílna" />
        <FilterOption name="Oděvní designér" />
      </FilterCategory>
      <FilterCategory name="Region">
        <FilterOption name="Praha" />
        <FilterOption name="Středočeský kraj" />
        <FilterOption name="Jihočeský kraj" />
        <FilterOption name="Plzeňský kraj" />
        <FilterOption name="Karlovarský kraj" />
        <FilterOption name="Ústecký kraj" />
        <FilterOption name="Liberecký kraj" />
        <FilterOption name="Královéhradecký kraj" />
        <FilterOption name="Pardubický kraj" />
        <FilterOption name="Vysočina" />
        <FilterOption name="Jihomoravský kraj" />
        <FilterOption name="Olomoucký kraj" />
        <FilterOption name="Zlínský kraj" />
        <FilterOption name="Moravskoslezský kraj" />
      </FilterCategory>
      <FilterCategory name="Zaměření">
        <FilterOption name="Úpravy oděvů" />
        <FilterOption name="Opravy oděvů" />
        <FilterOption name="Redesign / Upcycling" />
        <FilterOption name="Zakázková výroba oděvů" />
        <FilterOption name="Oděv od designéra na míru" />
      </FilterCategory>
  
    </form>
  );
};
