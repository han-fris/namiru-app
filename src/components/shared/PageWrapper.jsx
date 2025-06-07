import { Header } from './Header';

export const PageWrapper = ({ children }) => (
  <div className="container">
    <Header />
    <main className="maincontainer">{children}</main>
    <footer>{/** paticka - <Footer /> */}</footer>
  </div>
);
