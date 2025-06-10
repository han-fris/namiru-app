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
                <h1 className="guide__header">Průvodce</h1>
                <p className="guide__text">
                  Hledáte někoho, kdo by vám opravil zip na oblíbených
                  kalhotech, nebo máte vysněné šaty, které si chcete nechat ušít
                  na míru? Poradíme vám, jaké filtry by vám mohly pomoci najít
                  nejvhodnějšího tvůrce pro váš projekt.
                </p>
                <h2 className="guide__title">Jak na to?</h2>
                <p className="guide__text">
                  Jednotlivé otázky můžete přeskočit, nebo vybrat naopak více
                  možností. Průvodce má 7 otázek, kdykoli si můžete zobrazit
                  vybrané tvůrce a ještě doupravit filtry podle potřeby. Hodně
                  štěstí s hledáním!
                </p>
              </div>
              <div className="guide__panel">
                <div className="guide__filters-inner">
                  <GuidePanel id="creator-types" />
                </div>
              </div>
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
                <div className="guide__filters-inner">
                  <FilterOptionsList name="creatorType" />
                </div>
              </div>
              <div className="guide__panel">
                <GuidePanel id="specializations" />
              </div>
            </section>
            <section id="specializations" className="guide__section">
              <div className="guide__section-inner">
                <h2 className="guide__category-title">2. Co potřebujete?</h2>
                <p className="guide__text">
                  Máte doma kalhoty, které potřebují zkrátit? Nebo jste si
                  koupili krásnou látku a máte vymyšleno co z ní. Někteří tvůrci
                  se specializují také na upcycling, takže vám mohou přešít to,
                  co už nenosíte. Kousek od designéra je investice, která si
                  může nést silný příběh, nebo se hodí pro speciální
                  příležitosti. Jaká bude tedy vaše cesta?
                </p>
              </div>
              <div className="guide__filters">
                <div className="guide__filters-inner">
                  <FilterOptionsList name="specialization" />
                </div>
              </div>
              <div className="guide__panel">
                <GuidePanel id="region" />
              </div>
            </section>
            <section id="region" className="guide__section">
              <div className="guide__section-inner">
                <h2 className="guide__category-title">3. Máte to daleko?</h2>
                <p className="guide__text">
                  Pro menší úpravy a zakázky, které spěchají se hodí někdo
                  blízko. Někteří tvůrci nemají prodejnu s výlohou nebo vstup z
                  ulice, ale třeba jsou zrovna nedaleko vás. Jindy si zas pro
                  něco speciálního rádi zajedete i dál. Návštěva takového tvůrce
                  může být spojená s dalším zážitkem, nebo třeba s výletem, na
                  který si vzpomenete při nošení takového kousku. Vyberte váš
                  kraj, kam jezdíte, nebo přeskočte na další.
                </p>
              </div>
              <div className="guide__filters">
                {' '}
                <div className="guide__filters-inner">
                  <FilterOptionsList name="region" />
                </div>
              </div>
              <div className="guide__panel">
                <GuidePanel id="clothing-type" />
              </div>
            </section>
            <section id="clothing-type" className="guide__section">
              <div className="guide__section-inner">
                <h2 className="guide__category-title">
                  4. Už víte, co chcete?
                </h2>
                <p className="guide__text">
                  Každý tvůrce se zaměřuje na něco jiného. Někdo rád tvoří
                  kabáty, jiný zase šaty. Pokud víte, co máte v plánu, tak by to
                  mohlo pomoci v hledání toho ideálního tvůrce pro váš projekt.
                  Pokud nevíte, nebo se vám nehodí žádná z odpovědí, tak můžete
                  přeskočit na další otázku.
                </p>
              </div>
              <div className="guide__filters">
                {' '}
                <div className="guide__filters-inner">
                  <FilterOptionsList name="clothingType" />
                </div>
              </div>
              <div className="guide__panel">
                <GuidePanel id="target-customers" />
              </div>
            </section>
            <section id="target-customers" className="guide__section">
              <div className="guide__section-inner">
                <h2 className="guide__category-title">5. Kdo vlastně jste?</h2>
                <p className="guide__text">
                  Řekněte nám, kdo jste, nebo čím jste jedineční. Narozdíl od
                  nakupování v obchodech, v zakázkové výrobě se s unifikovanými
                  velikostmi skoro nesetkáte. Dejte vyniknout vaší osobnosti a
                  ukažte světu kdo jste bez ohledu na velikost.
                </p>
              </div>
              <div className="guide__filters">
                {' '}
                <div className="guide__filters-inner">
                  <FilterOptionsList name="targetCustomers" />
                </div>
              </div>
              <div className="guide__panel">
                <GuidePanel id="materials" />
              </div>
            </section>
            <section id="materials" className="guide__section">
              <div className="guide__section-inner">
                <h2 className="guide__category-title">
                  6. V čem se cítíte nejlépe?
                </h2>
                <p className="guide__text">
                  Druhů materiálů je velké množství, mohou se dělit podle
                  nejrůznějších parametrů. Rozdělili jsme je alespoň podle
                  základních kategorií. Někteří tvůrci se specializují spíše na
                  úplety a pružné materiály, ze kterých vám vyrobí
                  nejpohodlnější mikinu, nebo šaty na každodenní nošení. Někdo
                  má vysněné hedvábné nebo krajkové svatební šaty, a tak zvolí
                  kategorii náročných materiálů. Zvolte to, co vám příjde
                  nejblíže vašemu přání, nebo přeskočte na další otázku.
                </p>
              </div>
              <div className="guide__filters">
                {' '}
                <div className="guide__filters-inner">
                  <FilterOptionsList name="materials" />
                </div>
              </div>
              <div className="guide__panel">
                <GuidePanel id="style" />
              </div>
            </section>
            <section id="style" className="guide__section">
              <div className="guide__section-inner">
                <h2 className="guide__category-title">7. Co se vám líbí?</h2>
                <p className="guide__text">
                  Jak chcete působit, co děláte, nebo kam vysněný kousek chcete
                  nosit? To může také definovat styl. Každá z nás se vyvíjí
                  podle životního období, místa kde žijete, ale i přátel a
                  rodiny. Zkuste se zamyslet, co vyzařujete a jak by vám
                  oblečení mohlo pomoci reflektovat váš charakter. Zvolte si ty
                  kategorie, které by vás mohly nejlépe definovat.
                </p>
              </div>
              <div className="guide__filters">
                {' '}
                <div className="guide__filters-inner">
                  <FilterOptionsList name="style" />
                </div>
              </div>
              <div className="guide__panel">
                <GuidePanel id="final" />
              </div>
            </section>
            <section id="final" className="guide__section">
              <div className="guide__section-inner">
                <h2 className="guide__category-title">A co dál?</h2>
                <p className="guide__text">
                  Teď už stačí zobrazit tvůrce, kteří nejvíce sedí pro váš
                  projekt a mohli by sedět i vám! Usilovně pracujeme na
                  rozšíření databáze, takže pokud zrovna nenajdeme toho
                  ideálního, možná se ještě nezaregistroval. Po zobrazení
                  vybraných tvůrců si můžete ještě filtrování upravit podle
                  potřeby, rozkliknout jednotlivé tvůrce, přečíst si o nich
                  informace, jak probíhá proces tvorby na míru, kontakty,
                  odkazy, a další užitečné informace. Šťastný lov!
                </p>
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
