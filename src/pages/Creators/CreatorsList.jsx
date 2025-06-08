import { CreatorCard } from '../../components/CreatorsCards/CreatorCard';
import { CreatorsCardsList } from '../../components/CreatorsCards/CreatorsCardsList';
import { Filters } from '../../components/Filter/Filters';
import { PageWrapper } from '../../components/shared/PageWrapper';
import { useFilteredCreators } from '../../hooks/useFilteredCreators';

export const CreatorList = () => {
  const creators = useFilteredCreators();

  return (
    <PageWrapper>
      <h1>Seznam tvůrců a filtrování</h1>
      <Filters />
      <CreatorsCardsList>
        {creators.map((creator) => (
          <CreatorCard
            creator={creator}
            key={creator.id}
            name={creator.name}
          />
        ))}
      </CreatorsCardsList>
    </PageWrapper>
  );
};
