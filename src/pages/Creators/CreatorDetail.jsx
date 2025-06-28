import { PageWrapper } from '../../components/shared/PageWrapper';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import {
  creatorsSourceUrl,
  specializations,
  materials,
  targetCustomers,
  clothingTypes,
} from '../../config';
import './CreatorDetail.css';
import { SkeletonCreatorDetail } from './SkeletonCreatorDetail';

export const CreatorDetail = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState({});

  const [loading, setLoading] = useState(true);

  const selectedSpecializations = Object.keys(creator?.specialization || {})
    .filter((key) => creator?.specialization[key])
    .map((key) => specializations[key]);

  const selectedMaterials = Object.keys(creator?.materials || {})
    .filter((key) => creator?.materials[key])
    .map((key) => materials[key]);

  const selectedTargetCustomers = Object.keys(creator?.targetCustomers || {})
    .filter((key) => creator?.targetCustomers[key])
    .map((key) => targetCustomers[key]);

  const selectedCloghingTypes = Object.keys(creator?.clothingTypes || {})
    .filter((key) => creator?.clothingTypes[key])
    .map((key) => clothingTypes[key]);

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
        <SkeletonCreatorDetail />
      ) : (
        <>
          {creator?.error ? (
            <p>
              Takovy tvůrce tady zatím není, zkus se vrátit zpátky na všechny
              tvůrce...
            </p>
          ) : (
            <div className="creator">
              <div className="profile-header">
                <div className="profile-photo">
                  <img
                    src={`https://namiru.vercel.app/creators/${creator?.imgUrl1 ? creator.imgUrl1 : 'fallback.png'}`}
                    alt={`Foto ${creator.name}`}
                  />
                </div>
                <div className="profile-info">
                  <p className="label">Představuje se</p>
                  <h1>{creator.name}</h1>
                  <p className="creator-type">{creator.type_text}</p>
                  <p className="region">
                    {creator.city}, {creator.region_text}
                  </p>

                  <div className="contact-links">
                    <p>
                      <a href={`mailto:${creator.email}`}>{creator.email}</a>
                      <a href={`tel:${creator.phone}`}>{creator.phone}</a>
                    </p>
                    <p>
                      {creator.website && (
                        <a
                          href={creator.website}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Web
                        </a>
                      )}
                      {creator.facebook && (
                        <a
                          href={creator.facebook}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Facebook
                        </a>
                      )}
                      {creator.instagram && (
                        <a
                          href={creator.instagram}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Instagram
                        </a>
                      )}
                    </p>
                  </div>
                  {selectedMaterials.length > 0 && (
                    <section>
                      <h3>Materiály</h3>
                      <ul className="tag-list">
                        {selectedMaterials.map((s) => (
                          <li className="tag" key={s}>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}
                  {selectedTargetCustomers.length > 0 && (
                    <section>
                      <h3>Zaměření</h3>
                      <ul className="tag-list">
                        {selectedTargetCustomers.map((s) => (
                          <li className="tag" key={s}>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {selectedSpecializations.length > 0 && (
                    <section>
                      <h3>Služby & specializace</h3>
                      <ul className="tag-list">
                        {selectedSpecializations.map((s) => (
                          <li className="tag" key={s}>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}
                  {selectedCloghingTypes.length > 0 && (
                    <section>
                      <h3>Druhy oděvů</h3>
                      <ul className="tag-list">
                        {selectedCloghingTypes.map((s) => (
                          <li className="tag" key={s}>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}
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
                  <strong>Bezbariérový přístup:</strong> {creator.accessibility}
                </p>
                <p>
                  <strong>Jazyky:</strong> {creator.languages_text}
                </p>
              </section>

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
