import Navigation from "../Navigation/Navigation";
import './Header.scss';

const Header = () => {

  return (
    <header className="Header">
      <Navigation />
      <div className="container">
      <h1>Header</h1>
      </div>
    </header>
  );
};

export default Header;