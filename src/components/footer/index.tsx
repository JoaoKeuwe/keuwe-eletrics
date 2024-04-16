import "./style.css";
import youtube from "../../assets/icons/youtube.svg";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import logo from "../../assets/images/logo-white.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer-container">
      <img src={logo} alt="" />
      <div className="navigation-footer">
        <Link to="/">HOME</Link>
        <Link to="/aboutUs">SOBRE</Link>
        <Link to="/contato">CONTATO</Link>
      </div>
      <div>
        <ul className="social-icons">
          <li>
            <img src={youtube} alt="" />
          </li>
          <li>
            <img src={facebook} alt="" />
          </li>
          <li>
            <img src={twitter} alt="" />
          </li>
          <li>
            <img src={instagram} alt="" />
          </li>
          <li>
            <img src={linkedin} alt="" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
