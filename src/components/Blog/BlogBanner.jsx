import { Button } from '../shared/Button';
import './BlogBanner.css';
import { imgsMap } from '../../pages/Blog/imgConfig';

export const BlogBanner = ({ alt, title, paragraph, imgPosition, index }) => {
  return (
    <div className="banner">
      <img
        className={`banner-img ${imgPosition === 'left' ? 'order-left' : 'order-right'} `}
        src={imgsMap[index]}
        alt={alt}
      />
      <div className="banner-content">
        <h1 className="banner-title">{title}</h1>
        <p className="paragraph">{paragraph}</p>
        <div className="banner-button">
          <Button text="Číst více" url={`/blog/${index + 1}`} />
        </div>
      </div>
    </div>
  );
};
