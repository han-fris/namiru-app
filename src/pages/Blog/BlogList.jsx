import { PageWrapper } from '../../components/shared/PageWrapper';
import { BlogBanner } from '../../components/Blog/BlogBanner';
import { useEffect, useState } from 'react';
import { blogpostSourceUrl } from '../../config';

export const BlogList = () => {
  const [blogArticles, setBlogArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        const response = await fetch(blogpostSourceUrl);
        const responseData = await response.json();
        setBlogArticles(responseData);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    void loadBlogPosts();
  }, []);

  return (
    <PageWrapper>
      {loading && <p>Loading...</p>}
      {blogArticles?.length > 0 &&
        blogArticles.map((article, index) => (
          <BlogBanner
            key={index}
            title={article.nadpis}
            paragraph={article.paragraf1}
            buttonText={article.buttonText1}
            buttonUrl={'/'}
            index={index}
          />
        ))}
    </PageWrapper>
  );
};
