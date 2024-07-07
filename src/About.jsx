import React from "react";
import './About.css'; 

const AboutUs = () => {
  return (
    <div className="about-section" id="about-section">
      <div className="about-text">
         <p className="about-title">🍕 <strong>BRIEFLY ABOUT US</strong> 🍕</p>
         <p className="about-paragraph">We could share a heartwarming tale about the sweat and tears that went into building our dream, but let's keep it simple and tell you a bit about us. We're a squad of gastronomic enthusiasts, head over heels for Italian pizza — maybe even more than the Italians themselves! 🍝❤️</p>
         <p className="about-paragraph">Our passion for crafting the perfect pizza, pasta, and fresh salads became too delicious to keep to ourselves. So, we dreamt big, penned a business plan, gathered an amazing team, and voilà — our Italian eatery was born! 🍕✨</p>
         <p className="about-paragraph">Now, we're on a mission to make you fall in love with these mouthwatering delights just as much as we have. Come along on this delicious journey! 🌟🍝🥗</p>
      </div>
      <div className="crew">
        <img src="./assets/crew-photo.jpg" className="crew-photo" alt="Crew Photo"></img>
      </div>
    </div>
  );
};

export default AboutUs;
