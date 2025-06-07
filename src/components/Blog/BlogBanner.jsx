import { Button } from '../shared/Button';
import img1 from './../../../public/img/trans2.jpg';
import './BlogBanner.css';

export const BlogBanner = ({
  buttonText,
  buttonUrl,
  imgSrc,
  alt,
  title,
  paragraph,
  imgPosition,
  index,
}) => {
  return (
    <div className="banner">
      <div className="banner-img">
        <img src={img1} alt={alt} />
      </div>
      <div className="banner-content">
        <h1 className="banner-title">{title}</h1>
        <p className="paragraph">{paragraph}</p>
        <div className="banner-button">
          <Button text={buttonText} url={`/blog/${index + 1}`} />
        </div>
      </div>
    </div>
  );
};
