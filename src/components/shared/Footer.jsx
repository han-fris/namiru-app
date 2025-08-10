import { Link } from 'react-router';
import './Footer.css';

export const Footer = () => {
  return (
    <footer>
      <Link to="/" className="navigation-main">
        Namiru
      </Link>
      <div className="navigation-lower">
        <Link to="/tvurci" className="navigation-item">
          Najdi tvůrce
        </Link>
        <Link to="/info" className="navigation-item">
          Info
        </Link>
      </div>
    </footer>
  );
};
