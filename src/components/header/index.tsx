import logo from "../../assets/images/logo.png";
import cart from "../../assets/icons/shopping-cart.png";
import './style.css'

const Header = () => {
  return (
    <header className="header-content">
      <nav className="navbar">
        <img src={logo} alt="" />
        <ul>
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">SOBRE</a>{" "}
          </li>
          <li>
            <a href="">CONTATO</a>{" "}
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
