import './SkeletonCreatorDetail.css';

export const SkeletonCreatorDetail = () => {
  return (
    <div className="skeleton-container">
      <div className="creator-banner-skeleton">
        <div className="skeleton skeleton-img" />
        <div className="skeleton-content">
          <div className="skeleton skeleton-text" />
          <div className="skeleton skeleton-text" />
          <div className="skeleton skeleton-text" />
        </div>
      </div>
    </div>
  );
};
