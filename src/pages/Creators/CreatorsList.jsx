import '../../global.css';
import { ProfileItem } from '../../components/Profiles/ProfileItem';
import { Profiles } from '../../components/Profiles/Profiles';
import { Filters } from '../../components/Filter/Filters';
import { PageWrapper } from '../../components/shared/PageWrapper';
import { creatorsSourceUrl } from '../../config';
import { useState, useEffect } from 'react';

export const CreatorList = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const uploadCreators = async () => {
      const response = await fetch(creatorsSourceUrl);
      const responseData = await response.json();
      console.log(responseData);
      setCreators(responseData);
    };
    uploadCreators();
  }, []);

  return (
    <PageWrapper>
      <h1>Seznam tvůrců a filtrování</h1>
      <Filters />
      <Profiles>
        {creators.map((creator) => (
          <ProfileItem
            key={creator.id}
            name={creator.name}
            region={creator.region_text}
          />
        ))}
      </Profiles>
    </PageWrapper>
  );
};
