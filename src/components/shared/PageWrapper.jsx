export const PageWrapper = ({ children }) => (
  <div className="container">
    <header>{/**hlavni menu nahore s logem a menu - <Header /> */}</header>
    <main className="maincontainer">{children}</main>
    <footer>{/** paticka - <Footer /> */}</footer>
  </div>
);
