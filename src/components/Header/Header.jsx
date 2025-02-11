import "./Header.scss";

function Header(){
    return(
        <header className="header">
            <h1 className="header__heading">Snaps</h1>
            <button className="header__filter">Filter</button>
        </header>
    );
}

export default Header;