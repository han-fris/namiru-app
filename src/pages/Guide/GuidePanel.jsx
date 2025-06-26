export const GuidePanel = ({ id, button }) => {
  return (
    <div className="guide-panel">
      <a className="guide-link" href={`#${id}`}>
        {button}
      </a>
    </div>
  );
};
