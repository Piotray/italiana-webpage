import React from "react";
import "./Places.css";  

const Places = () => {
  return (
    <div className="places-container">
      <div className="places-box">
        <h1 className="places-header">A FEW MORE WORDS</h1>
        <p className="places-paragraph"> We're not grown up enough to serve you in our own restaurant 🍴🍹, but at least you can enjoy our food in places you like ⛺⛲🏠 with people you love 👨‍👩‍👧‍👦. Just like we do!</p>
      </div>
      <div className="photo-container">
        <img src="./assets/places.jpeg" className="place-photo"></img>
      </div>
    </div>
  );
};

export default Places;
