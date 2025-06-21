import { Link } from 'react-router';
import './Navigation.css';

export const Navigation = () => {
  return (
    <nav>
      <ul className="nav-bar">
        <span className="header__menu menu">
          <li>
            <Link to={'/tvurci'} className="navigation-item">
              Tvůrci
            </Link>
          </li>
          <li>
            {' '}
            <Link to={'/pruvodce'} className="navigation-item">
              Průvodce
            </Link>
          </li>
          <li>
            <Link to={'/blog'} className="navigation-item">
              Blog
            </Link>
          </li>
          <li>
            <Link to={'/info'} className="navigation-item">
              Info
            </Link>
          </li>
        </span>
      </ul>
    </nav>
  );
};
