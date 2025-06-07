import '../../global.css';
import { PageWrapper } from '../../components/shared/PageWrapper';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { creatorsSourceUrl } from '../../config';

export const CreatorDetail = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCreator = async () => {
      try {
        const response = await fetch(`${creatorsSourceUrl}?id=${id}`);
        const responseData = await response.json();
        setCreator(responseData);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    };
    loadCreator();
  }, []);

  console.log('a', creator);
  console.log(id);

  return (
    <PageWrapper>
      <h1>detail tvůrce:</h1>
    </PageWrapper>
  );
};
