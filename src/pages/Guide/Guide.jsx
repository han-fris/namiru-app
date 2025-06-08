import './Guide.css';
import { PageWrapper } from '../../components/shared/PageWrapper';
import { FilterOptionsList } from '../../components/Filter/FilterOptionsList';
import { GuidePanel } from './GuidePanel';

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
              <GuidePanel id="specializations"></GuidePanel>
            </section>
            <section id="specializations" className="guide-section">
              <div className="guide-section-inner">
                <h2 className="guide-category-title">Zaměření</h2>
                <p className="guide-text">
                  Někdy stačí jen malá úprava a váš oblíbený kousek hned vypadá
                  na vás lépe a bude sloužit dál. Ať už potřebujete zkrátit
                  rukávy, upravit siluetu, nebo přišít nové knoflíky, šikovné
                  švadleny vám pomohou doladit co máte tak rádi tak, aby vám to
                  vydrželo co nejdéle a cítili jste se lépe.
                </p>
              </div>
              <div className="guide-filters">
                <FilterOptionsList name="specialization"></FilterOptionsList>
              </div>
              <GuidePanel id="region"></GuidePanel>
            </section>
            <section id="region" className="guide-section">
              <div className="guide-section-inner">
                <h2 className="guide-category-title">Region</h2>
                <p className="guide-text">
                  Někdy stačí jen malá úprava a váš oblíbený kousek hned vypadá
                  na vás lépe a bude sloužit dál. Ať už potřebujete zkrátit
                  rukávy, upravit siluetu, nebo přišít nové knoflíky, šikovné
                  švadleny vám pomohou doladit co máte tak rádi tak, aby vám to
                  vydrželo co nejdéle a cítili jste se lépe.
                </p>
              </div>
              <div className="guide-filters">
                <FilterOptionsList name="region"></FilterOptionsList>
              </div>
            </section>
            <section id="clothing-type" className="guide-section">
              <div className="guide-section-inner">
                <h2 className="guide-category-title">Druh oděvu</h2>
                <p className="guide-text">
                  Někdy stačí jen malá úprava a váš oblíbený kousek hned vypadá
                  na vás lépe a bude sloužit dál. Ať už potřebujete zkrátit
                  rukávy, upravit siluetu, nebo přišít nové knoflíky, šikovné
                  švadleny vám pomohou doladit co máte tak rádi tak, aby vám to
                  vydrželo co nejdéle a cítili jste se lépe.
                </p>
              </div>
              <div className="guide-filters">
                <FilterOptionsList name="clothingType"></FilterOptionsList>
              </div>
            </section>
            <section id="target-customers" className="guide-section">
              <div className="guide-section-inner">
                <h2 className="guide-category-title">Typ zákazníka</h2>
                <p className="guide-text">
                  Někdy stačí jen malá úprava a váš oblíbený kousek hned vypadá
                  na vás lépe a bude sloužit dál. Ať už potřebujete zkrátit
                  rukávy, upravit siluetu, nebo přišít nové knoflíky, šikovné
                  švadleny vám pomohou doladit co máte tak rádi tak, aby vám to
                  vydrželo co nejdéle a cítili jste se lépe.
                </p>
              </div>
              <div className="guide-filters">
                <FilterOptionsList name="targetCustomers"></FilterOptionsList>
              </div>
            </section>
            <section id="materials" className="guide-section">
              <div className="guide-section-inner">
                <h2 className="guide-category-title">Materiály</h2>
                <p className="guide-text">
                  Někdy stačí jen malá úprava a váš oblíbený kousek hned vypadá
                  na vás lépe a bude sloužit dál. Ať už potřebujete zkrátit
                  rukávy, upravit siluetu, nebo přišít nové knoflíky, šikovné
                  švadleny vám pomohou doladit co máte tak rádi tak, aby vám to
                  vydrželo co nejdéle a cítili jste se lépe.
                </p>
              </div>
              <div className="guide-filters">
                <FilterOptionsList name="materials"></FilterOptionsList>
              </div>
            </section>
            <section id="style" className="guide-section">
              <div className="guide-section-inner">
                <h2 className="guide-category-title">Styl</h2>
                <p className="guide-text">
                  Někdy stačí jen malá úprava a váš oblíbený kousek hned vypadá
                  na vás lépe a bude sloužit dál. Ať už potřebujete zkrátit
                  rukávy, upravit siluetu, nebo přišít nové knoflíky, šikovné
                  švadleny vám pomohou doladit co máte tak rádi tak, aby vám to
                  vydrželo co nejdéle a cítili jste se lépe.
                </p>
              </div>
              <div className="guide-filters">
                <FilterOptionsList name="style"></FilterOptionsList>
              </div>
            </section>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
};
