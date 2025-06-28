import { useNavigate } from 'react-router';
import './Guide.css';
import { PageWrapper } from '../../components/shared/PageWrapper';
import { FilterForm } from '../../components/Filter/FilterForm';
import { GuideSection } from './GuideSection';
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
            <GuideSection
              id="intro"
              header="Průvodce"
              intro=" Hledáte někoho, kdo by vám opravil zip na oblíbených
                  kalhotech, nebo máte vysněné šaty, které si chcete nechat ušít
                  na míru? Poradíme vám, jaké filtry by vám mohly pomoci najít
                  nejvhodnějšího tvůrce pro váš projekt."
              title="Jak na to?"
              text="Jednotlivé otázky můžete přeskočit, nebo vybrat naopak více
                  možností. Průvodce má 7 otázek, kdykoli si můžete zobrazit
                  vybrané tvůrce a ještě doupravit filtry podle potřeby. Hodně
                  štěstí s hledáním!"
              nextId="creator-types"
              button="Další"
            />
            <GuideSection
              id="creator-types"
              title="1. Koho vlastně hledáte?"
              text="Každý tvůrce se zaměřuje na něco jiného, tady si zvolte
                  základní kategorie tvůrců. Švadleny a krejčí mají nejrůznější
                  zaměření a pomůžou vám s opravami či realizací vašich
                  představ. Designéři vám pomůžou, když nevíte co by vám přesně
                  sedlo, ale líbí se vám jejich tvorba. Mohou vám také vytvořit
                  originál, který bude propojovat i váš příběh. Krejčovské dílny
                  se nejčastěji hodí designérům nebo firmám pro větší zakázky."
              filter="creatorType"
              nextId="specializations"
              button="Další nebo přeskočit"
            />
            <GuideSection
              id="specializations"
              title="2. Co potřebujete?"
              text="Máte doma kalhoty, které potřebují zkrátit? Nebo jste si
                  koupili krásnou látku a máte vymyšleno co z ní. Někteří tvůrci
                  se specializují také na upcycling, takže vám mohou přešít to,
                  co už nenosíte. Kousek od designéra je investice, která si
                  může nést silný příběh, nebo se hodí pro speciální
                  příležitosti. Jaká bude tedy vaše cesta?"
              filter="specialization"
              nextId="region"
              button="Další nebo přeskočit"
            />
            <GuideSection
              id="region"
              title="3. Máte to daleko?"
              text="Pro menší úpravy a zakázky, které spěchají se hodí někdo
                  blízko. Někteří tvůrci nemají prodejnu s výlohou nebo vstup z
                  ulice, ale třeba jsou zrovna nedaleko vás. Jindy si zas pro
                  něco speciálního rádi zajedete i dál. Návštěva takového tvůrce
                  může být spojená s dalším zážitkem, nebo třeba s výletem, na
                  který si vzpomenete při nošení takového kousku. Vyberte váš
                  kraj, kam jezdíte, nebo přeskočte na další."
              filter="region"
              nextId="clothing-type"
              button="Další nebo přeskočit"
            />
            <GuideSection
              id="clothing-type"
              title="4. Už víte, co chcete?"
              text=" Každý tvůrce se zaměřuje na něco jiného. Někdo rád tvoří
                  kabáty, jiný zase šaty. Pokud víte, co máte v plánu, tak by to
                  mohlo pomoci v hledání toho ideálního tvůrce pro váš projekt.
                  Pokud nevíte, nebo se vám nehodí žádná z odpovědí, tak můžete
                  přeskočit na další otázku."
              filter="clothingType"
              nextId="target-customers"
              button="Další nebo přeskočit"
            />
            <GuideSection
              id="target-customers"
              title="5. Kdo vlastně jste?"
              text="Řekněte nám, kdo jste, nebo čím jste jedineční. Narozdíl od
                  nakupování v obchodech, v zakázkové výrobě se s unifikovanými
                  velikostmi skoro nesetkáte. Dejte vyniknout vaší osobnosti a
                  ukažte světu kdo jste bez ohledu na velikost."
              filter="targetCustomers"
              nextId="materials"
              button="Další nebo přeskočit"
            />
            <GuideSection
              id="materials"
              title="6. V čem se cítíte nejlépe?"
              text="Druhů materiálů je velké množství, mohou se dělit podle
                  nejrůznějších parametrů. Rozdělili jsme je alespoň podle
                  základních kategorií. Někteří tvůrci se specializují spíše na
                  úplety a pružné materiály, ze kterých vám vyrobí
                  nejpohodlnější mikinu, nebo šaty na každodenní nošení. Někdo
                  má vysněné hedvábné nebo krajkové svatební šaty, a tak zvolí
                  kategorii náročných materiálů. Zvolte to, co vám příjde
                  nejblíže vašemu přání, nebo přeskočte na další otázku."
              filter="materials"
              nextId="style"
              button="Další nebo přeskočit"
            />
            <GuideSection
              id="style"
              title="7. Co se vám líbí?"
              text="Jak chcete působit, co děláte, nebo kam vysněný kousek chcete
                  nosit? To může také definovat styl. Každá z nás se vyvíjí
                  podle životního období, místa kde žijete, ale i přátel a
                  rodiny. Zkuste se zamyslet, co vyzařujete a jak by vám
                  oblečení mohlo pomoci reflektovat váš charakter. Zvolte si ty
                  kategorie, které by vás mohly nejlépe definovat."
              filter="style"
              nextId="final"
              button="Další nebo přeskočit"
            />
            <GuideSection
              id="final"
              title="A co dál?"
              text="Teď už stačí zobrazit tvůrce, kteří nejvíce sedí pro váš
                  projekt a mohli by sedět i vám! Usilovně pracujeme na
                  rozšíření databáze, takže pokud zrovna nenajdeme toho
                  ideálního, možná se ještě nezaregistroval. Po zobrazení
                  vybraných tvůrců si můžete ještě filtrování upravit podle
                  potřeby, rozkliknout jednotlivé tvůrce, přečíst si o nich
                  informace, jak probíhá proces tvorby na míru, kontakty,
                  odkazy, a další užitečné informace. Šťastný lov!"
            />
            <div className="guide__submit">
              <button className="guide__button" type="submit">
                Ukázat vybrané tvůrce
              </button>
            </div>
          </FilterForm>
        </div>
      </div>
    </PageWrapper>
  );
};

/*
<GuideSection id="" title="" text="" filter="" nextId="" button="" />
*/
