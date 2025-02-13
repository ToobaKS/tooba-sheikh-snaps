import "./Header.scss";

function Header({ toggleFilterContainer }) {
  return (
    <header className="header">
      <h1 className="header__heading">Snaps</h1>
      <button onClick={toggleFilterContainer} className="header__filter">Filter</button>
    </header>
  );
}

export default Header;
