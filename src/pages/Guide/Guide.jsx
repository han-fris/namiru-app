import { useNavigate } from 'react-router';
import './Guide.css';
import { PageWrapper } from '../../components/shared/PageWrapper';
import { FilterOptionsList } from '../../components/Filter/FilterOptionsList';
import { GuidePanel } from './GuidePanel';
import { FilterForm } from '../../components/Filter/FilterForm';
import { createFilterSearchParams } from '../../hooks/useFilters';
import { useCallback } from 'react';

export const Guide = () => {
  const navigate = useNavigate();
  const onSubmit = useCallback(
    (filterObj) => {
      const filterSearchParams = createFilterSearchParams(filterObj);
      navigate(`/tvurci?${filterSearchParams.toString()}`);
    },
    [navigate]
  );

  return (
    <PageWrapper>
      <div className="guide">
        <div className="guide__container">
          <FilterForm action="/tvurci" onSubmit={onSubmit}>
            <section id="intro" className="guide__section">
              <div className="guide__section-inner guide__intro">
                <h1>Průvodce</h1>
                <p>
                  Hledáte někoho, kdo by vám opravil zip na oblíbených
                  kalhotech, nebo máte vysněné šaty, které si chcete nechat ušít
                  na míru? Poradíme vám, jaké filtry by vám mohli pomoci najít
                  nejvhodnějšího tvůrce pro váš projekt.
                </p>
                <h2>Jak na to?</h2>
                <p>
                  Jednotlivé otázky můžete přeskočit, nebo vybrat naopak více
                  možností. Průvodce má 7 otázek, kdykoli si můžete zobrazit
                  vybrané tvůrce a ještě doupravit filtry podle potřeby. Hodně
                  štěstí s hledáním!
                </p>
              </div>
              <GuidePanel id="creator-types" />
            </section>
            <section id="creator-types" className="guide__section">
              <div className="guide__section-inner">
                <h2 className="guide__category-title">
                  1. Koho vlastně hledáte?
                </h2>
                <p className="guide__text">
                  Každý tvůrce se zaměřuje na něco jiného, tady si zvolte
                  základní kategorie tvůrců. Švadleny a krejčí mají nejrůznější
                  zaměření a pomůžou vám s opravami či realizací vašich
                  představ. Designéři vám pomůžou, když nevíte co by vám přesně
                  sedlo, ale líbí se vám jejich tvorba. Mohou vám také vytvořit
                  originál, který bude propojovat i váš příběh. Krejčovské dílny
                  se nejčastěji hodí designérům nebo firmám pro větší zakázky.
                </p>
              </div>
              <div className="guide__filters">
                <FilterOptionsList name="creatorType" />
              </div>
              <GuidePanel id="specializations" />
            </section>
            <section id="specializations" className="guide__section">
              <div className="guide__section-inner">
                <h2 className="guide__category-title">Zaměření</h2>
                <p className="guide__text">
                  Někdy stačí jen malá úprava a váš oblíbený kousek hned vypadá
                  na vás lépe a bude sloužit dál. Ať už potřebujete zkrátit
                  rukávy, upravit siluetu, nebo přišít nové knoflíky, šikovné
                  švadleny vám pomohou doladit co máte tagit ak rádi tak, aby
                  vám to vydrželo co nejdéle a cítili jste se lépe.
                </p>
              </div>
              <div className="guide__filters">
                <FilterOptionsList name="specialization" />
              </div>
              <GuidePanel id="region" />
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
                <FilterOptionsList name="region" />
              </div>
              <GuidePanel id="clothing-type" />
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
                <FilterOptionsList name="clothingType" />
              </div>
              <GuidePanel id="target-customers" />
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
                <FilterOptionsList name="targetCustomers" />
              </div>
              <GuidePanel id="materials" />
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
                <FilterOptionsList name="materials" />
              </div>
              <GuidePanel id="style" />
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
                <FilterOptionsList name="style" />
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
