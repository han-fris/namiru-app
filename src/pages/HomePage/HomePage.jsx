import { HeroSection } from '../../components/Homepage/HeroSection';
import './HomePage.css';
import { PageWrapper } from '../../components/shared/PageWrapper';
import { useEffect, useState } from 'react';
import { BlogBanner } from '../../components/Blog/BlogBanner';
import { blogpostSourceUrl } from '../../config';
import { SkeletonBanner } from '../../components/Blog/SkeletonBanner';

export const HomePage = () => {
  const [blogArticles, setBlogArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const firstArticle = blogArticles[0];
  const lastArticle = blogArticles[blogArticles.length - 1];

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
      <HeroSection />
      <div className="banner-section">
        {loading && <SkeletonBanner bannerCount={2} />}
        {firstArticle && (
          <BlogBanner
            title={firstArticle.nadpis}
            paragraph={firstArticle.paragraf1}
            buttonText={firstArticle.buttonText1}
            buttonUrl={'/'}
            index={0}
            imgPosition={'left'}
          />
        )}
        {lastArticle && (
          <BlogBanner
            title={lastArticle.nadpis}
            paragraph={lastArticle.paragraf1}
            buttonText={lastArticle.buttonText1}
            buttonUrl={'/'}
            index={blogArticles.length - 1}
            imgPosition={'right'}
          />
        )}
      </div>
    </PageWrapper>
  );
};
