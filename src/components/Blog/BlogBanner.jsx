import { Button } from '../shared/Button';
import img1 from './../../../public/img/eco1.jpg';
import img2 from './../../../public/img/man2.jpg';
import img3 from './../../../public/img/pus2.jpg';
import img4 from './../../../public/img/trans2.jpg';
import img5 from './../../../public/img/dis1.jpg';
import './BlogBanner.css';

const images = [img1, img2, img3, img4, img5];

export const BlogBanner = ({
  buttonText,
  buttonUrl,
  imgSrc,
  alt,
  title,
  paragraph,
  imgPosition,
}) => {
  const randomIndex = Math.floor(Math.random * images.length);
  const randomImg = images[randomIndex];

  return (
    <div className="banner">
      <div>
        <img src={randomImg} alt={alt} />
      </div>
      <div className="banner-content">
        <h1>{title}</h1>
        <p>{paragraph}</p>
        <div className="banner-button">
          <Button text={buttonText} url={buttonUrl} />
        </div>
      </div>
    </div>
  );
};
