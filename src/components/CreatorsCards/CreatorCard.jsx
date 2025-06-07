import { Link } from 'react-router';

export const CreatorCard = ({ name, region, creator }) => {
  return (
    <>
      <h2>{name}</h2>
      <pre>{region}</pre>
      <Link to={`/tvurce/${creator.id}`}>Zobrazit profil tvůrce</Link>
    </>
  );
};
