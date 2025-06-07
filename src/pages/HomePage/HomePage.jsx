import { HeroSection } from '../../components/Homepage/HeroSection';
import './HomePage.css';
import { PageWrapper } from '../../components/shared/PageWrapper';

export const HomePage = () => {
  return (
    <PageWrapper>
      <div>
        <HeroSection />
      </div>
    </PageWrapper>
  );
};
