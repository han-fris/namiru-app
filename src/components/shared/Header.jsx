import { Link } from 'react-router';

export const Header = () => {
  return (
    <header>
      <Link to={'/'} className="brand">
        Namiru
      </Link>
      <Link to={'/blog'} className="navigation-item">
        Blog
      </Link>
    </header>
  );
};
