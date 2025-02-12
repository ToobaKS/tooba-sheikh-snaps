import facebook from "../../assets/images/facebook.svg";
import x from "../../assets/images/X_twitter.svg";
import instagram from "../../assets/images/instagram.svg";
import pinterest from "../../assets/images/pinterest.svg";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__main">
        <h1 className="footer__heading">Snaps</h1>
        <div className="footer__links-section">
          <p>For photographers</p>
          <p>Hire Talents</p>
          <p>Inspirations</p>
        </div>
        <div className="footer__links-section">
          <p>About</p>
          <p>Careers</p>
          <p>Support</p>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__social">
          <img src={facebook} alt="facebook" />
          <img src={x} alt="x"/>
          <img src={instagram} alt="instagram" />
          <img src={pinterest} alt="pinterest" />
        </div>
        <div className="footer__copyright">
            <p className="footer__info">&copy; 2024 Snaps</p>
            <p className="footer__info">Terms</p>
            <p className="footer__info">Privacy</p>
            <p className="footer__info">Cookies</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
