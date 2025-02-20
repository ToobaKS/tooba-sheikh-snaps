import "./Header.scss";
import { useEffect, useState } from "react";
import filter from "../../assets/images/Filter.svg";
import arrow from "../../assets/images/Arrow.svg";
import { useLocation, Link } from "react-router-dom";

function Header({ setIsOpen, isOpen }) {
  const location = useLocation(); // React Router's location
  const [page, setPage] = useState(location.pathname);

  const toggleFilterContainer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setPage(location.pathname);
  }, [location.pathname]);

  function headerButton() {
    if (page == "/") {
      return (
        <button
          onClick={toggleFilterContainer}
          className={`header__filter ${
            isOpen ? " header__filter--active" : ""
          }`}
        >
          Filter
          <img
            className={`header__icon ${
              isOpen ? " header__filter-image--active" : ""
            }`}
            src={filter}
            alt="filter"
          />
        </button>
      );
    } else {
      return (
        <Link to="/">
          <button className="header__back-button">
            <img className="header__back-icon" src={arrow} alt="back arrow" />
            Home
          </button>
        </Link>
      );
    }
  }

  return (
    <header className="header">
      <Link className="header__wordmark-link" to="/">
        <h1 className="header__wordmark">Snaps</h1>
      </Link>
      {headerButton()}
    </header>
  );
}

export default Header;
