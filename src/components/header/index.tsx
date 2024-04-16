import logo from "../../assets/images/logo.png";
import cart from "../../assets/icons/shopping-cart.png";
import { Link } from "react-router-dom";
import './style.css'

const Header = () => {
  return (
    <header className="header-content">
      <nav className="navbar">
        <img src={logo} alt="" />
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/aboutUs">SOBRE</Link>
          </li>
          <li>
            <Link to="/contato">CONTATO</Link>
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <img style={{ marginRight: "20px" }} src={cart} alt="cart" />
            CART
          </li>
          <button className="button-login">LOGIN</button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
