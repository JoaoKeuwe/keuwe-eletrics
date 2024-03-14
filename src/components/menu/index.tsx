import { useState } from "react";
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
          <a href="/" className="option">HOME</a>
          <a href="/aboutUs" className="option">SOBRE</a>
          <a href="/contato" className="option">CONTATO</a>
        </div>
      )}
    </div>
  );
};

export default Menu;
