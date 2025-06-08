import { Link } from 'react-router';
import './Button.css';

export const Button = ({ text, url, ...props }) => {
  return (
    <Link to={url} className="btn" {...props}>
      {text}
    </Link>
  );
};
