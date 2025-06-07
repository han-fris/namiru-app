import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { PageWrapper } from '../../components/shared/PageWrapper';
import { blogpostSourceUrl } from '../../config';
import '../../global.css';

export const BlogDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const response = await fetch(`${blogpostSourceUrl}?row=${id}`);
        const responseData = await response.json();
        setArticle(responseData);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    void loadArticle();
  }, []);
  console.log('a', article);
  return (
    <PageWrapper>
      <h1>Blog detail</h1>
    </PageWrapper>
  );
};
