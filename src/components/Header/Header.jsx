import "./Header.scss";
import img from "../../assets/images/Filter.svg";

function Header({ toggleFilterContainer }) {
  return (
    <header className="header">
      <h1 className="header__heading">Snaps</h1>
      <button onClick={toggleFilterContainer} className="header__filter">Filter
        <img src={img} alt="filter" />
      </button>
    </header>
  );
}

export default Header;
