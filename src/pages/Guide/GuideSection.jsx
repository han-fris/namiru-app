import { GuidePanel } from './GuidePanel';
import { FilterOptionsList } from '../../components/Filter/FilterOptionsList';
import './Guide.css';

export const GuideSection = ({
  id,
  header,
  intro,
  title,
  text,
  filter,
  nextId,
  button
}) => {
  return (
    <div>
      <section id={id} className="guide__section">
        <div className="guide__section-inner">
          {header && <h1 className="guide__header">{header}</h1>}
          {intro && <p className="guide__text">{intro}</p>}
          <h2 className="guide__category-title">{title}</h2>
          <p className="guide__text">{text}</p>
        </div>
        {filter && (
          <div className="guide__filters">
            <div className="guide__filters-inner">
              <FilterOptionsList name={filter} />
            </div>
          </div>
        )}
        {nextId && (
          <div className="guide__panel">
            <div className="guide__filters-inner">
              <GuidePanel id={nextId} button={button}/>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
