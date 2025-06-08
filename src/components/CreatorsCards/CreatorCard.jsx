import { Link } from 'react-router';
import './CreatorCard.css';

export const CreatorCard = ({ name, creator }) => {
  return (
    <div className="creator__card">
      <h2>{name}</h2>
      <p>
        {creator.region_text}
        <br />
        {creator.type_text}
        <br />
        {creator.about_text}
      </p>
      <Link to={`/tvurce/${creator.id}`}>Zobrazit profil tvůrce</Link>
    </div>
  );
};
