import { Link } from 'react-router';
import './Navigation.css';

export const Navigation = ({ onClose }) => {
  return (
    <nav>
      <ul className="nav-bar">
        <span className="header__menu menu">
          <li>
            <Link to={'/tvurci'} className="navigation-item" onClick={onClose}>
              Tvůrci
            </Link>
          </li>
          <li>
            {' '}
            <Link
              to={'/pruvodce'}
              className="navigation-item"
              onClick={onClose}
            >
              Průvodce
            </Link>
          </li>
          <li>
            <Link to={'/blog'} className="navigation-item" onClick={onClose}>
              Blog
            </Link>
          </li>
          <li>
            <Link to={'/info'} className="navigation-item" onClick={onClose}>
              Info
            </Link>
          </li>
        </span>
      </ul>
    </nav>
  );
};
