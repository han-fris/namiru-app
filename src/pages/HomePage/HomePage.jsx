import { HeroSection } from '../../components/Homepage/HeroSection';
import './HomePage.css';
import { PageWrapper } from '../../components/shared/PageWrapper';

export const HomePage = () => {
  return (
    <PageWrapper>
      <div>
        <h1>Namiru</h1>
      </div>
      <div>
        <HeroSection />
      </div>
      <div></div>
    </PageWrapper>
  );
};
