import { SkeletonBanner } from '../../components/Blog/SkeletonBanner';
import { CreatorCard } from '../../components/CreatorsCards/CreatorCard';
import { CreatorsCardsList } from '../../components/CreatorsCards/CreatorsCardsList';
import { Filters } from '../../components/Filter/Filters';
import { PageWrapper } from '../../components/shared/PageWrapper';
import { NoResults } from './NoResults';
import { useFilteredCreators } from '../../hooks/useFilteredCreators';
import { useState } from 'react';
import './CreatorsList.css';

export const CreatorList = () => {
  const [loading, setLoading] = useState(true);

  const creators = useFilteredCreators({ setLoading });

  return (
    <div className="creators-list">
      <PageWrapper>
        {' '}
        <h1 className="creators-list__header">Seznam tvůrců a filtrování</h1>
        <div className="creators__container">
          <div className="filters__container no-result__container">
            <Filters />
          </div>
          <div className="creators-list__container">
            {loading && (
              <h3 className="creators-list__loading">Načítám tvůrce... </h3>
            )}
            {!loading && creators.length > 0 ? (
              <CreatorsCardsList>
                {creators.map((creator) => (
                  <CreatorCard
                    creator={creator}
                    key={creator.id}
                    name={creator.name}
                  />
                ))}
              </CreatorsCardsList>
            ) : (
              !loading && creators.length === 0 && <NoResults />
            )}
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};
