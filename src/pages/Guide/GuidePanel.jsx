import { Button } from '../../components/shared/Button';

export const GuidePanel = ({ id }) => {
  return (
    <div className="guide-panel">
      <Button text="Přeskočit" url={`#${id}`}></Button>
    </div>
  );
};
