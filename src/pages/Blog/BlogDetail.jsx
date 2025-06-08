import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { PageWrapper } from '../../components/shared/PageWrapper';
import { blogpostSourceUrl } from '../../config';
import { imgsMap } from '../../pages/Blog/imgConfig';
import './BlogDetail.css';
import { Button } from '../../components/shared/Button';

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

  return (
    <PageWrapper>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {article?.error ? (
            <p>Takovy clanek tady zatim neni...</p>
          ) : (
            <div className="blog">
              <img className="blog-img" src={imgsMap[id - 1]} alt="image" />
              <h1>{article.nadpis}</h1>
              <p className="paragraph">{article.paragraf1}</p>
              <h2 className="subtitle">{article.podnadpis1}</h2>
              <p className="paragraph">{article.paragraf2}</p>
              <h2 className="subtitle">{article.podnadpis2}</h2>
              <p className="paragraph">{article.paragraf3}</p>
              <h2 className="subtitle">{article.podnadpis3}</h2>
              <p className="paragraph">{article.paragraf4}</p>
              <Button url={article.buttonUrl1} text={article.buttonText1} />
            </div>
          )}
        </>
      )}
    </PageWrapper>
  );
};
