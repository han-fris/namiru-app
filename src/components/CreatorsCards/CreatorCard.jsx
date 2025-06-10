import { Link } from 'react-router';
import './CreatorCard.css';

export const CreatorCard = ({ name, creator }) => {
  return (
    <div className="creator__card">
      <div className="creator__container">
        <h2 className="creator__name">{name}</h2>
        <p className="creator__categories">
          {creator.type_text}
          <br />
          <strong>
            {creator.city}, {creator.region_text}
          </strong>
        </p>
        <p className="creator__about">{creator.about_text}</p>
      </div>
      <div className="creator__link">
        <Link to={`/tvurce/${creator.id}`}>Zobrazit profil tvůrce</Link>
      </div>
    </div>
  );
};
