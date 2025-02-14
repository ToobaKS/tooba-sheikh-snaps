import "./Header.scss";
import img from "../../assets/images/Filter.svg";

function Header({ toggleFilterContainer, isOpen }) {
  return (
    <header className="header">
      <h1 className="header__wordmark">Snaps</h1>
      <button
        onClick={toggleFilterContainer}
        className={`header__filter ${isOpen ? " header__filter--active" : ""}`}
      >
        Filter
        <img
          className={`header__filter__image ${
            isOpen ? " header__filter-image--active" : ""
          }`}
          src={img}
          alt="filter"
        />
      </button>
    </header>
  );
}

export default Header;
