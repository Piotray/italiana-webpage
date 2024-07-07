import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <nav className="footer-nav">
          <ul>
            <li className="nav-item"><a href="#about-section">Our Story</a></li>
            <li className="nav-item"><a href="#bites-section">Our Bites</a></li>
            <li className="nav-item"><a href="#contact-section">Our Contacts</a></li>
          </ul>
        </nav>
        <p>&copy; 2024 ITALIANA LTD</p>
      </div>
    </footer>
  );
};

export default Footer;
