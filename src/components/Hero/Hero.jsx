import "./Hero.scss";

function Hero(){
    return(
        <header className="header">
            <h1 className="header__heading">Snaps</h1>
            <button className="header__filter">Filter</button>
        </header>
    );
}

export default Hero;