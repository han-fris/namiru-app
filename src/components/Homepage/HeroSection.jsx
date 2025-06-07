import { Button } from '../shared/Button';
import './HeroSection.css';

export const HeroSection = () => {
  return (
    <div className="hero">
      <h1>Oblečení, které sedí</h1>
      <p className="hero-text">
        Vítejte na nové platformě, která vám pomůže najít ideálního tvůrce pro
        váš vysněný šatník, který vám bude sedět a vydrží roky.
      </p>
      <Button text="Najít tvůrce" url="/tvurci" />
    </div>
  );
};
