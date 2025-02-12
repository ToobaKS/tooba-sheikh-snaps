import "./Header.scss";

function Header({ openDrawer }) {
  return (
    <header className="header">
      <h1 className="header__heading">Snaps</h1>
      <button onClick={openDrawer} className="header__filter">Filter</button>
    </header>
  );
}

export default Header;
