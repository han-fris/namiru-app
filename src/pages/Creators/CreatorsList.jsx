import '../../global.css';
import { Filters } from '../../components/Filter/Filters';
import { PageWrapper } from '../../components/shared/PageWrapper';
import { useState, useEffect } from 'react';

export const CreatorList = () => {
  const [creators, setCreators] = useState(null);

  useEffect(() => {
    const uploadCreators = async () => {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbwBGdtUwFGU6J5vLdhYXB3NCkP9-Uod2TJ3rBRRD5shlWZE5-a96fcWJWvGw432_vYH/exec'
      );
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
    </PageWrapper>
  );
};
