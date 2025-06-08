import { PageWrapper } from '../../components/shared/PageWrapper';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { creatorsSourceUrl } from '../../config';
import './CreatorDetail.css';

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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {creator?.error ? (
            <p>Takovy tvůrce tady zatim neni...</p>
          ) : (
            <div className="creator">
              <div className="profile-header">
                <div className="profile-photo">
                  <div
                    style={{
                      width: '240px',
                      height: '240px',
                      background: `red`,
                    }}
                  />
                  {/*<img src={creator.profile_photo || '/placeholder.jpg'} alt={`Foto ${creator.name}`}/>*/}
                </div>
                <div className="profile-info">
                  <p className="label">Představuje se</p>
                  <h1>{creator.name}</h1>
                  <p className="creator-type">{creator.type_text}</p>
                  <p className="region">
                    {creator.city}, {creator.region_text}
                  </p>

                  <div className="contact-icons">
                    <a href={`mailto:${creator.email}`}>Email</a>
                    <a href={`tel:${creator.phone}`}>Telefon</a>
                    {creator.website && (
                      <a
                        href={creator.website}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Web
                      </a>
                    )}
                    {creator.social_links && (
                      <a
                        href={creator.social_links}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Sociální sítě
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <section className="about">
                <h2>O mě</h2>
                <p>{creator.about_text}</p>
                <p>
                  <strong>Dostupnost:</strong>{' '}
                  {creator.meeting_arrangement_text}
                </p>
                <p>
                  <strong>Doba zpracování:</strong>{' '}
                  {creator.order_processing_time_text}
                </p>
                <p>
                  <strong>Dostupnost pro lidi s hendikepem:</strong>{' '}
                  {creator.accessibility}
                </p>
                <p>
                  <strong>Komunikace:</strong> {creator.communication}
                </p>
                <p>
                  <strong>Jazyky:</strong> {creator.languages_text}
                </p>
              </section>

              {/* {<section className="tags">
                <h2>Služby & specializace</h2>
                <div className="tag-list">{}</div>
              </section>} */}

              <section className="pricing">
                <h2>Cenové rozmezí</h2>
                <p>{creator.price_range_text}</p>
              </section>
            </div>
          )}
        </>
      )}
    </PageWrapper>
  );
};
