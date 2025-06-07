import '../../global.css';
import { Filters } from '../../components/Filter/Filters';

export const CreatorList = () => {
  return (
    <div className="container">
      <header>
        <h1>Seznam tvůrců a filtrování</h1>
      </header>
      <main>
        <Filters />
      </main>
      <footer></footer>
    </div>
  );
};
