import React, { useState } from "react";
import "./Navbar.css";  

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleResize = () => {
    setMenuOpen(false);
  };

  const handleMenuToggle = () => {
    if (!menuOpen) {
      window.addEventListener("resize", handleResize);
    } else {
      window.removeEventListener("resize", handleResize);
    }
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="Navbar">
      <div className="nav">
        <button className="hamburger" onClick={handleMenuToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <nav className={`main-nav ${menuOpen ? 'active' : ''}`}>
          <ul className="links">
            <li className="nav-item"><a href="#about-section">Our Story</a></li>
            <li className="nav-item"><a href="#bites-section">Our Bites</a></li>
            <li className="nav-item"><a href="#contact-section">Our Contacts</a></li>
          </ul>
        </nav>
      </div>
      <nav className={`mobile-nav ${menuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-items">
          <li className="mobile-nav-item"><a href="#about-section">Our Story</a></li>
          <li className="mobile-nav-item"><a href="#bites-section">Our Bites</a></li>
          <li className="mobile-nav-item"><a href="#contact-section">Our Contacts</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
