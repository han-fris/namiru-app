import { FilterOption } from './FilterOption';
import { FilterCategory } from './FilterCategory';
import { useSearchParams } from 'react-router';

export const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const changeHandler = (e) => {
    const formData = new FormData(e.currentTarget);
    const newSearchParams = {};
    for (const [key, value] of formData.entries()) {
      newSearchParams[key] ??= [];
      newSearchParams[key].push(value);
    }
    const stringifiedSearchParams = new URLSearchParams();
    for (const key in newSearchParams) {
      stringifiedSearchParams.set(key, newSearchParams[key].join(' '));
    }
    setSearchParams(stringifiedSearchParams);
  };

  return (
    <form onChange={changeHandler}>
      <FilterCategory label="Typ tvůrce">
        <FilterOption label="Švadelena, krejčí" name="creatorType" value="1" />
        <FilterOption label="Krejčovská dílna" name="creatorType" value="2" />
        <FilterOption label="Oděvní designér" name="creatorType" value="3" />
      </FilterCategory>
      <FilterCategory label="Region">
        <FilterOption label="Praha" name="region" value="1" />
        <FilterOption label="Středočeský kraj" name="region" value="2" />
        <FilterOption label="Jihočeský kraj" name="region" value="3" />
        <FilterOption label="Plzeňský kraj" name="region" value="4" />
        <FilterOption label="Karlovarský kraj" name="region" value="5" />
        <FilterOption label="Ústecký kraj" name="region" value="6" />
        <FilterOption label="Liberecký kraj" name="region" value="7" />
        <FilterOption label="Královéhradecký kraj" name="region" value="8" />
        <FilterOption label="Pardubický kraj" name="region" value="9" />
        <FilterOption label="Vysočina" name="region" value="10" />
        <FilterOption label="Jihomoravský kraj" name="region" value="11" />
        <FilterOption label="Olomoucký kraj" name="region" value="12" />
        <FilterOption label="Zlínský kraj" name="region" value="13" />
        <FilterOption label="Moravskoslezský kraj" name="region" value="14" />
      </FilterCategory>
      <FilterCategory label="Zaměření">
        <FilterOption label="Úpravy oděvů" name="specialization" value="1" />
        <FilterOption label="Opravy oděvů" name="specialization" value="2" />
        <FilterOption
          label="Redesign / Upcycling"
          name="specialization"
          value="3"
        />
        <FilterOption
          label="Zakázková výroba oděvů"
          name="specialization"
          value="4"
        />
        <FilterOption
          label="Oděv od designéra na míru"
          name="specialization"
          value="5"
        />
      </FilterCategory>
    </form>
  );
};
