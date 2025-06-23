import { Button } from '../shared/Button';
import './HeroSection.css';

export const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <h1 className="hero-title">Hledáme oděvní tvůrce</h1>
        <p className="hero-text">
          Vítejte na nové platformě, která pomůže najít zákazníkům ideálního
          tvůrce pro jejich šatních vytvořený na míru. Pokud jsi krejčí,
          švadlena, oděvní dílna nebo designér, tak se můžeš zaregistrovat a
          zapojit do naší databáze. Čím více tvůrců v databázi bude, tím více
          lidem pomůže.
        </p>
        <div className="hero-button">
          <Button
            text="Zaregistrovat se"
            url="https://forms.gle/16LUPVpTVBQXB5VL8"
          />
        </div>

        <p className="hero-text">
          Pokud chcete hledat tvůrce, pro váš projekt, tak můžete hledat tvůrce
          pomocí našeho průvodce, nebo zobrazit všechny tvůrce a vybrat si
          pomocí filtrů.
        </p>
        <div className="hero-button">
          <Button text="Otevřít průvodce" url="/pruvodce" />
          <Button text="Ukázat všechny" url="/tvurci" />
        </div>
      </div>
      <div className="hero-img"></div>
    </div>
  );

  /*
  return (
    <div className="hero">
      <div className="hero-container">
        <h1 className="hero-title">Oblečení, které sedí</h1>
        <p className="hero-text">
          Vítejte na nové platformě, která vám pomůže najít ideálního tvůrce pro
          váš vysněný šatník, který vám bude sedět a vydrží roky.
        </p>
        <p className="hero-text">
          Můžete hledat tvůrce pomocí našeho průvodce, nebo zobrazit
          všechny tvůrce a vybrat si pomocí filtrů.
        </p>
        <div className="hero-button">
          <Button text="Otevřít průvodce" url="/pruvodce" />
          <Button text="Ukázat všechny" url="/tvurci" />
        </div>
      </div>
      <div className="hero-img"></div>
    </div>
  );
  */
};
