import { Button } from '../shared/Button';
import './HeroSection.css';

export const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <h1 className="hero-title">Od úpravy oděvů po šití na zakázku</h1>
        <p className="hero-text">
Každý oděv může být výjimečný, stačí správný tvůrce. Namiru vám pomůže najít zkušenou švadlenu, precizního krejčího nebo kreativního oděvního designéra, který promění váš nápad ve skutečnost. Opravy, úpravy i šití na míru, vše snadno a na jednom místě.
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
