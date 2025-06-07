import '../../global.css';
import { CreatorProfileItem } from '../../components/CreatorsProfiles/CreatorProfileItem';
import { CreatorsProfiles } from '../../components/CreatorsProfiles/CreatorsProfiles';
import { Filters } from '../../components/Filter/Filters';
import { PageWrapper } from '../../components/shared/PageWrapper';
import { creatorsSourceUrl } from '../../config';
import { useState, useEffect } from 'react';
import { useFilters } from '../../hooks/useFilters';
import { useFilteredCreators } from '../../hooks/useFilteredCreators';

export const CreatorList = () => {
  const creators = useFilteredCreators();

  return (
    <PageWrapper>
      <h1>Seznam tvůrců a filtrování</h1>
      <Filters />
      <CreatorsProfiles>
        {creators.map((creator) => (
          <CreatorProfileItem
            key={creator.id}
            name={creator.name}
            region={creator.region_text}
          />
        ))}
      </CreatorsProfiles>
    </PageWrapper>
  );
};
