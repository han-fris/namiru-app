export const GuidePanel = ({ id }) => {
  return (
    <div className="guide-panel">
      <a className="guide-link" href={`#${id}`}>
        Další nebo přeskočit
      </a>
    </div>
  );
};
