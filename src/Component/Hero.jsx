import React, { useEffect, useState } from "react";
import "../styles/Hero.css"
import Image1 from "../assets/Hero1.png"
import Image2 from "../assets/Hero3.png";
import Image3 from "../assets/Hero2.png"
import Image4 from "../assets/Hero4.png";
import Image5 from "../assets/Hero5.png"

const slides = [
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    image: Image1,
  },
  {
    title: "Branding",
    description:
      "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
    image: Image2,
  },
  {
    title: "Paid Media",
    description:
      "No sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    image: Image3,
  },
  {
    title: "Strategy",
    description:
      "No sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    image: Image4,
  },
  {
    title: "Campaign",
    description:
      "No sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    image: Image5,
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
      const nextIndex = prev === slides.length - 1 ? 0 : prev + 1;
      return nextIndex; 
    });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="custom-slider">
      <div className="slider-left">
        <h2>{slides[currentIndex].title}</h2>
        <p>{slides[currentIndex].description}</p>
        <button>Know More ►</button>
      </div>
      <div className="slider-right">
        <img src={slides[currentIndex].image} alt="slider" />
        <div className="dots-container">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${currentIndex === idx ? "active" : ""}`}
              onClick={() => setCurrentIndex(idx)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
