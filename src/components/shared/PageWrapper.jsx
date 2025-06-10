import { Header } from './Header';
import { Footer } from './Footer';

export const PageWrapper = ({ children }) => (
  <div className="container">
    <Header />
    <main className="maincontainer creators__maincontainer">{children}</main>
    <Footer />
  </div>
);
