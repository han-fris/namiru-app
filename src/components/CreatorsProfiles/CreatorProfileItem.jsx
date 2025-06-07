export const CreatorProfileItem = ({ name, region }) => {
  return (
    <>
      <h2>{name}</h2>
      <pre>{region}</pre>
      <button>Zobrazit profil tvůrce</button>
    </>
  );
};
