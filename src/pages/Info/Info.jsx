import './Info.css';
import { PageWrapper } from '../../components/shared/PageWrapper';
import { Button } from '../../components/shared/Button';

export const Info = () => {
  return (
    <PageWrapper>
      <div className="info">
        <div className="info-container">
          <h1 className="info-title">Ahoj a Vítejte!❤️</h1>
          <div className="info-section">
            <h2>O nás</h2>
            <p>
              Jsme Han a Katka, studentky Digitální akademie Web v Czechitas, a
              rády bychom vám představili náš závěrečný projekt – webovou
              aplikaci NAMIRU.
            </p>
          </div>
          <div className="info-section">
            <h2>O Projektu</h2>
            <p>
              Pomáháme lidem najít ty správné šikovné ruce na úpravy oblečení
              nebo šití na míru. Chcete něco padnoucího? U nás to najdete.
            </p>
            <p>
              Konfekční velikosti nejsou pro každého, každý jsme jedinečný a
              někdy stačí i malá úprava, abychom se cítili lépe ve své kůži.
              Chceme pomoci propojit šikovné tvůrce s klienty, kteří potřebují
              něco upravit nebo ušít na míru. Tvoříme databázi tvůrců -
              designérů, švadlenek, krejčích a dílen, ze kterých vám aplikace
              pomůže vybrat ty nejvhodnější pro váš projekt. Nevite si rady jak
              najít toho zprávneho tvůrce? Vyzkoušejte našeho průvodce.
            </p>
            <Button text="Vyzkoušet průvodce" url="/pruvodce" />
          </div>
          <div className="info-section">
            <h2>Pro tvůrce</h2>
            <h3>
              Jste krejčí, švadlena, krejčovská dílna, oděvní ateliér nebo
              designér a chcete se stát součástí nově vznikající databáze tvůrců
              odevů na míru?{' '}
            </h3>
            <p>
              Vyplňte tento dotaznik, který nám pomůže propojit vás s
              potenciálními klienty, kteří si pomoci chytrých filtrů snadno
              zobrazí profily tvůrců, přesně podle toho co hledají a potřebují
              ušít nebo upravit.
            </p>
            <p className="questionnarie">
              Odkaz na dotazník:{' '}
              <a href="https://forms.gle/cK9T1f7Jxjx2YBU56">Link</a>
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
