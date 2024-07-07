import React, { useState, useEffect } from "react";
import './CarouselStyle.css';

function Carousel() {
  const words = ["PIZZA", "PASTA", "SALAD"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="generaly">
      <div className="slider">
        <img src="./assets/carousel/image-url-1.jpg" alt="Image 1" />
        <img src="./assets/carousel/image-url-2.jpg" alt="Image 2" />
        <img src="./assets/carousel/image-url-3.jpg" alt="Image 3" />
        <img src="./assets/carousel/image-url-4.jpg" alt="Image 4" />
        <img src="./assets/carousel/image-url-5.jpg" alt="Image 5" />
        <img src="./assets/carousel/image-url-6.jpg" alt="Image 6" />
        <img src="./assets/carousel/image-url-7.jpg" alt="Image 7" />
        <img src="./assets/carousel/image-url-8.jpg" alt="Image 8" />
      </div>
      <div className="word">{words[currentWordIndex]}</div>
    </div>
  );
}

export default Carousel;
