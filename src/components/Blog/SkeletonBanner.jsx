import './SkeletonBanner.css';

export const SkeletonBanner = ({ bannerCount }) => {
  return (
    <div className="blog-banner-skeleton-container">
      {Array.from({ length: bannerCount }).map((_, i) => (
        <div className="blog-banner-skeleton" key={i}>
          <div className="skeleton skeleton-img" />
          <div className="skeleton-content">
            <div className="skeleton skeleton-text" />
            <div className="skeleton skeleton-text" />
            <div className="skeleton skeleton-text" />
          </div>
        </div>
      ))}
    </div>
  );
};
