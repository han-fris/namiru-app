import { SkeletonBanner } from '../../components/Blog/SkeletonBanner';
import { CreatorCard } from '../../components/CreatorsCards/CreatorCard';
import { CreatorsCardsList } from '../../components/CreatorsCards/CreatorsCardsList';
import { Filters } from '../../components/Filter/Filters';
import { PageWrapper } from '../../components/shared/PageWrapper';
import { useFilteredCreators } from '../../hooks/useFilteredCreators';
import { useState } from 'react';
import './CreatorsList.css';

export const CreatorList = () => {
  const [loading, setLoading] = useState(true);
  const creators = useFilteredCreators({ setLoading });

  return (
    <div className="creators-list">
      <PageWrapper>
        <h1>Seznam tvůrců a filtrování</h1>
        <Filters />
        {loading && <h3>Načítám tvůrce... </h3>}
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
    </div>
  );
};
