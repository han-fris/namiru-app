import './Guide.css';
import { PageWrapper } from '../../components/shared/PageWrapper';
import { FilterOptionsList } from '../../components/Filter/FilterOptionsList';
import { GuidePanel } from './GuidePanel';
import { FilterForm } from '../../components/Filter/FilterForm';

export const Guide = () => {
  return (
    <PageWrapper>
      <div className="guide">
        <div className="guide__container">
          <FilterForm action="/tvurci">
            <section id="creator-types" className="guide__section">
              <div className="guide__section-inner">
                <h2 className="guide__category-title">Typ tvůrce</h2>
                <p className="guide__text">
                  Někdy stačí jen malá úprava a váš oblíbený kousek hned vypadá
                  na vás lépe a bude sloužit dál. Ať už potřebujete zkrátit
                  rukávy, upravit siluetu, nebo přišít nové knoflíky, šikovné
                  švadleny vám pomohou doladit co máte tak rádi tak, aby vám to
                  vydrželo co nejdéle a cítili jste se lépe.
                </p>
              </div>
              <div className="guide__filters">
                <FilterOptionsList name="creatorType"></FilterOptionsList>
              </div>
              <GuidePanel id="specializations"></GuidePanel>
            </section>
            <section id="specializations" className="guide__section">
              <div className="guide__section-inner">
                <h2 className="guide__category-title">Zaměření</h2>
                <p className="guide__text">
                  Někdy stačí jen malá úprava a váš oblíbený kousek hned vypadá
                  na vás lépe a bude sloužit dál. Ať už potřebujete zkrátit
                  rukávy, upravit siluetu, nebo přišít nové knoflíky, šikovné
                  švadleny vám pomohou doladit co máte tak rádi tak, aby vám to
                  vydrželo co nejdéle a cítili jste se lépe.
                </p>
              </div>
              <div className="guide__filters">
                <FilterOptionsList name="specialization"></FilterOptionsList>
              </div>
              <GuidePanel id="region"></GuidePanel>
            </section>
            <section id="region" className="guide__section">
              <div className="guide__section-inner">
                <h2 className="guide__category-title">Region</h2>
                <p className="guide__text">
                  Někdy stačí jen malá úprava a váš oblíbený kousek hned vypadá
                  na vás lépe a bude sloužit dál. Ať už potřebujete zkrátit
                  rukávy, upravit siluetu, nebo přišít nové knoflíky, šikovné
                  švadleny vám pomohou doladit co máte tak rádi tak, aby vám to
                  vydrželo co nejdéle a cítili jste se lépe.
                </p>
              </div>
              <div className="guide__filters">
                <FilterOptionsList name="region"></FilterOptionsList>
              </div>
              <GuidePanel id="clothing-type"></GuidePanel>
            </section>
            <section id="clothing-type" className="guide__section">
              <div className="guide__section-inner">
                <h2 className="guide__category-title">Druh oděvu</h2>
                <p className="guide__text">
                  Někdy stačí jen malá úprava a váš oblíbený kousek hned vypadá
                  na vás lépe a bude sloužit dál. Ať už potřebujete zkrátit
                  rukávy, upravit siluetu, nebo přišít nové knoflíky, šikovné
                  švadleny vám pomohou doladit co máte tak rádi tak, aby vám to
                  vydrželo co nejdéle a cítili jste se lépe.
                </p>
              </div>
              <div className="guide__filters">
                <FilterOptionsList name="clothingType"></FilterOptionsList>
              </div>
              <GuidePanel id="target-customers"></GuidePanel>
            </section>
            <section id="target-customers" className="guide__section">
              <div className="guide__section-inner">
                <h2 className="guide__category-title">Typ zákazníka</h2>
                <p className="guide__text">
                  Někdy stačí jen malá úprava a váš oblíbený kousek hned vypadá
                  na vás lépe a bude sloužit dál. Ať už potřebujete zkrátit
                  rukávy, upravit siluetu, nebo přišít nové knoflíky, šikovné
                  švadleny vám pomohou doladit co máte tak rádi tak, aby vám to
                  vydrželo co nejdéle a cítili jste se lépe.
                </p>
              </div>
              <div className="guide__filters">
                <FilterOptionsList name="targetCustomers"></FilterOptionsList>
              </div>
              <GuidePanel id="materials"></GuidePanel>
            </section>
            <section id="materials" className="guide__section">
              <div className="guide__section-inner">
                <h2 className="guide__category-title">Materiály</h2>
                <p className="guide__text">
                  Někdy stačí jen malá úprava a váš oblíbený kousek hned vypadá
                  na vás lépe a bude sloužit dál. Ať už potřebujete zkrátit
                  rukávy, upravit siluetu, nebo přišít nové knoflíky, šikovné
                  švadleny vám pomohou doladit co máte tak rádi tak, aby vám to
                  vydrželo co nejdéle a cítili jste se lépe.
                </p>
              </div>
              <div className="guide__filters">
                <FilterOptionsList name="materials"></FilterOptionsList>
              </div>
              <GuidePanel id="style"></GuidePanel>
            </section>
            <section id="style" className="guide__section">
              <div className="guide__section-inner">
                <h2 className="guide__category-title">Styl</h2>
                <p className="guide__text">
                  Někdy stačí jen malá úprava a váš oblíbený kousek hned vypadá
                  na vás lépe a bude sloužit dál. Ať už potřebujete zkrátit
                  rukávy, upravit siluetu, nebo přišít nové knoflíky, šikovné
                  švadleny vám pomohou doladit co máte tak rádi tak, aby vám to
                  vydrželo co nejdéle a cítili jste se lépe.
                </p>
              </div>
              <div className="guide__filters">
                <FilterOptionsList name="style"></FilterOptionsList>
              </div>
            </section>
            <div className="guide__submit">
              <button className="guide__button" type="submit">
                Ukázat tvůrce
              </button>
            </div>
          </FilterForm>
        </div>
      </div>
    </PageWrapper>
  );
};
