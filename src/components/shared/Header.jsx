import { Link } from 'react-router';

export const Header = () => {
  return (
    <header>
      <Link to={'/'} className="brand">
        Namiru
      </Link>
      <p className="navigation-item">Blog</p>
    </header>
  );
};
