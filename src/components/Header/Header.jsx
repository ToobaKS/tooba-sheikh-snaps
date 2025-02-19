import "./Header.scss";
import img from "../../assets/images/Filter.svg";
import { Link } from "react-router-dom";

function Header({ setIsOpen, isOpen }) {
  const toggleFilterContainer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <Link className="header__wordmark-link" to="/">
        <h1 className="header__wordmark">Snaps</h1>
      </Link>
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
