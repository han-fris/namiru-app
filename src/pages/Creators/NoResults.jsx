import './CreatorsList.css';

export const NoResults = () => {
  return (
    <div className="noResults__container">
      <h1>Nikdo tu není</h1>
      <p>
        Bohužel jsme ještě nenašli nikoho, kdo by odpovídal Vašim preferencím.
        <br />
        Pilně pracujeme na rozšíření databáze, prozatím můžete zkusit upravit
        filtrování.
      </p>
      <p></p>
    </div>
  );
};
