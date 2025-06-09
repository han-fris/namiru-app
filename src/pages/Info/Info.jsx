import './Info.css';
import { PageWrapper } from '../../components/shared/PageWrapper';

export const Info = () => {
  return (
    <PageWrapper>
      <div className="info">
        <div className="info-container">
          <h1 className="info-title">
            O projektu, o nás, kontakt, dotazník pro tvůrce
          </h1>
          <p>
            Buď všechno na jedné stránce nebo rozdělit na více. Asi by nám ted
            stacilo nechat vše tu .)
          </p>
        </div>
      </div>
    </PageWrapper>
  );
};
