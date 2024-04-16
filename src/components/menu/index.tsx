import { useState } from "react";
import { Link } from "react-router-dom";

import './style.css'
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {isOpen && (
        <div className="menu-options">
          <Link to="/" className="option">HOME</Link>
          <Link to="/aboutUs" className="option">SOBRE</Link>
          <Link to="/contato" className="option">CONTATO</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
