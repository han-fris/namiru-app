import { Link } from 'react-router';

export const CreatorCard = ({ name, creator }) => {
  return (
    <>
      <h2>{name}</h2>
      <p>
        {creator.region_text}, {JSON.stringify(creator.specialization)},{' '}
        {JSON.stringify(creator.creatorType)}
      </p>
      <Link to={`/tvurce/${creator.id}`}>Zobrazit profil tvůrce</Link>
    </>
  );
};
