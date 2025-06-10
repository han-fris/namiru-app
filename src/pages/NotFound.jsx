import { PageWrapper } from '../components/shared/PageWrapper';
import { Button } from '../components/shared/Button';
import './NotFound.css';

export const NotFound = () => {
  return (
    <PageWrapper>
      <div className="not-found__container">
        <h1>Nitka se přetrhla</h1>
        <p>
          Bohužel tady nic není, ale můžete se vrátit o krok zpět, nebo jít na
          hlavní stranu
        </p>
        <p className='not-found__button'>
          <Button text="Zpátky na začátek" url="/" />
        </p>
      </div>
    </PageWrapper>
  );
};
