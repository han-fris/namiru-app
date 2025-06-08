import { Link } from 'react-router';
import './Footer.css';

export const Footer = () => {
  return (
    <footer>
      <Link to="/" className="navigation-main">
        Namiru
      </Link>
      <div className="navigation-lower">
        <Link to="/blog" className="navigation-item">
          Blog
        </Link>
        <Link to="/tvurci" className="navigation-item">
          Najdi tvůrce
        </Link>
        <Link to="/o-nas" className="navigation-item">
          O nás
        </Link>
      </div>
    </footer>
  );
};
