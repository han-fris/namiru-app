import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { PageWrapper } from '../../components/shared/PageWrapper';
import { blogpostSourceUrl } from '../../config';
import '../../global.css';

export const BlogDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState();
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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {article?.error ? (
            <p>Takovy clanek tady zatim neni...</p>
          ) : (
            <>
              <div className="blog-img">
                <img className="blog-img" src={img1} alt="image" />
              </div>
              <h1>{article.nadpis}</h1>
              <p className="paragraph1">{article.paragraf1}</p>
              <h2 className="subtitle1">{article.podnadpis1}</h2>
              <p className="paragraph2">{article.paragraf2}</p>
              <h2 className="subtitle2">{article.podnadpis2}</h2>
              <p className="paragraph3">{article.paragraf3}</p>
              <h2 className="subtitle3">{article.podnadpis3}</h2>
              <p className="paragraph4">{article.paragraf4}</p>
            </>
          )}
        </>
      )}
    </PageWrapper>
  );
};
