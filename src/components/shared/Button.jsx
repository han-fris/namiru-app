import { useNavigate } from 'react-router';
import './Button.css';

export const Button = ({ text, url, ...props }) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    if (url) navigate(url);
  };
  return (
    <button onClick={handleClick} className="btn" {...props}>
      {text}
    </button>
  );
};
