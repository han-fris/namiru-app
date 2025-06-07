import { Button } from '../shared/Button';
import img1 from './../../../public/img/trans2.jpg';
import './BlogBanner.css';

/* const images = [img1, img2, img3, img4, img5]; */

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
  /* const randomIndex = Math.floor(Math.random() * images.length);
  const randomImg = images[randomIndex]; */

  return (
    <div className="banner">
      <div className="banner-img">
        <img src={img1} alt={alt} />
      </div>
      <div className="banner-content">
        <h1 className="banner-title">{title}</h1>
        <p className="paragraph">{paragraph}</p>
        <div className="banner-button">
          <Button text={buttonText} url={buttonUrl} />
        </div>
      </div>
    </div>
  );
};
