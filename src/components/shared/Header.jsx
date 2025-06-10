import { Link } from 'react-router';
import './Header.css';

export const Header = () => {
  return (
    <header>
      <Link to={'/'} className="brand">
        Namiru
      </Link>
      <Link to={'/blog'} className="navigation-item"></Link>
    </header>
  );
};
