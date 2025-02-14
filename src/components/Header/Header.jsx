import "./Header.scss";
import img from "../../assets/images/Filter.svg";

function Header({ toggleFilterContainer }) {
  return (
    <header className="header">
      <h1 className="header__wordmark">Snaps</h1>
      <button onClick={toggleFilterContainer} className="header__filter">Filter
        <img className="header__filter-image" src={img} alt="filter" />
      </button>
    </header>
  );
}

export default Header;
