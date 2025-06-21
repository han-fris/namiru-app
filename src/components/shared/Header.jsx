import { Link } from 'react-router';
import './Header.css';
import HamburgerMenu from './HamburgerMenu';
import { Navigation } from './Navigation';

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to={'/'} className="brand">
          Namiru
        </Link>
      </div>
      <div className="header__navigation">
        <Navigation />
      </div>
      <div className="header__hamburgermenu">
        <HamburgerMenu />
      </div>
    </header>
  );
};
