import { PageWrapper } from '../../components/shared/PageWrapper';
import { BlogBanner } from '../../components/Blog/BlogBanner';
import { useEffect, useState } from 'react';

export const BlogList = () => {
  const [blogArticles, setBlogArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        const response = await fetch(
          'https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLh0DFeiI51cKInvHBWb6RdoldWQuO2LlgitEzBDrnwA_hfU5bJuMHij4Uz3gtGjizs_wsZh1EYoKsvUiisDslaH6MkH-tWbQppon27cZVzOTvsrpRAipC-Oyh3qY_8Uyq3jUBLAv52n03dO_pBkMf4Z5rP1kClM6UykkUxAG4i-KFOjneBmzwwVkfyHDigebBZuOmd-F3q0DM2PTA8qnbx54kv-WGwkr6adrIZsxBzNe2F8HAyfJ6Wn7CngypXQ5PO5cz9Eo-0JT4N4apLuHBSSD14_pA&lib=MwVVDETOERQjm5dyOgMXSsBzsdLCiQrJA'
        );
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

  console.log('loading', loading);
  console.log('blogArticles', blogArticles);

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
          />
        ))}
    </PageWrapper>
  );
};
