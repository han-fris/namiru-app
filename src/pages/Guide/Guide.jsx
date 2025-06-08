import './Guide.css';
import { PageWrapper } from '../../components/shared/PageWrapper';
import { FilterOptionsList } from '../../components/Filter/FilterOptionsList';

export const Guide = () => {
  return (
    <PageWrapper>
      <div className="guide">
        <div className="guide-container">
          <h1 className="guide-title">Průvodce</h1>
          <form>
            <section id="creator-types" className="guide-section">
              <div className="guide-section-inner">
                <h2 className="guide-category-title">Typ tvůrce</h2>
                <p className="guide-text">
                  Někdy stačí jen malá úprava a váš oblíbený kousek hned vypadá
                  na vás lépe a bude sloužit dál. Ať už potřebujete zkrátit
                  rukávy, upravit siluetu, nebo přišít nové knoflíky, šikovné
                  švadleny vám pomohou doladit co máte tak rádi tak, aby vám to
                  vydrželo co nejdéle a cítili jste se lépe.
                </p>
              </div>
              <div className="guide-filters">
                <FilterOptionsList name="creatorType"></FilterOptionsList>
              </div>
            </section>

            <div id="specializations" className="guide-specializations">
              <h2 className="guide-category-title">Zaměření</h2>
              <p className="guide-text">
                Někdy stačí jen malá úprava a váš oblíbený kousek hned vypadá na
                vás lépe a bude sloužit dál. Ať už potřebujete zkrátit rukávy,
                upravit siluetu, nebo přišít nové knoflíky, šikovné švadleny vám
                pomohou doladit co máte tak rádi tak, aby vám to vydrželo co
                nejdéle a cítili jste se lépe.
              </p>
            </div>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
};
