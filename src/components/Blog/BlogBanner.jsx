import { Button } from '../shared/Button';

export const BlogBanner = ({
  buttonText,
  buttonUrl,
  imgSrc,
  alt,
  title,
  paragraph,
  imgPosition,
}) => {
  return (
    <>
      <img src={imgSrc} alt={alt} />
      <h1>{title}</h1>
      <p>{paragraph}</p>
      <Button text={buttonText} url={buttonUrl} />
    </>
  );
};
