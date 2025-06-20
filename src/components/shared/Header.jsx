import { Link } from 'react-router';
import './Header.css';

export const Header = () => {
  return (
    <header>
      <Link to={'/'} className="brand">
        Namiru
      </Link>
      <div className="header__menu">
        <Link to={'/tvurci'} className="navigation-item">
          Tvůrci
        </Link>
        <Link to={'/pruvodce'} className="navigation-item">
          Průvodce
        </Link>
        <Link to={'/blog'} className="navigation-item">
          Blog
        </Link>
        <Link to={'/info'} className="navigation-item">
          Info
        </Link>
      </div>
    </header>
  );
};
