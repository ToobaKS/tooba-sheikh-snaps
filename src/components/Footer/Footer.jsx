import facebook from "../../assets/images/facebook.svg";
import x from "../../assets/images/X_twitter.svg";
import instagram from "../../assets/images/instagram.svg";
import pinterest from "../../assets/images/pinterest.svg";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__main">
        <div className="footer__links-sections">
          <Link className="footer__wordmark-link" to="/">
            <h1 className="footer__wordmark">Snaps</h1>
          </Link>
          <div className="footer__links-section">
            <a className="footer__link" href="">
              For photographers
            </a>
            <a className="footer__link" href="">
              Hire talent
            </a>
            <a className="footer__link" href="">
              Inspirations
            </a>
          </div>
          <div className="footer__links-section">
            <a className="footer__link" href="">
              About
            </a>
            <a className="footer__link" href="">
              Careers
            </a>
            <a className="footer__link" href="">
              Support
            </a>
          </div>
        </div>
        <div className="footer__social">
          <a className="footer__social-link" href="https://www.facebook.com/">
            <img
              className="footer__social-icon"
              src={facebook}
              alt="facebook"
            />
          </a>
          <a className="footer__social-link" href="https://x.com/?lang=en&mx=2">
            <img className="footer__social-icon" src={x} alt="x" />
          </a>
          <a className="footer__social-link" href="https://www.instagram.com/">
            <img
              className="footer__social-icon"
              src={instagram}
              alt="instagram"
            />
          </a>
          <a className="footer__social-link" href="https://www.pinterest.com/">
            <img
              className="footer__social-icon"
              src={pinterest}
              alt="pinterest"
            />
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__info">&copy; 2024 Snaps</p>
        <p className="footer__info">. Terms</p>
        <p className="footer__info">Privacy</p>
        <p className="footer__info">Cookies</p>
      </div>
    </section>
  );
}

export default Footer;
