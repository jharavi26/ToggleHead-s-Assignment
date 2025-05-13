import React, { useEffect, useState } from "react";
import "../styles/Hero.css"
import Image1 from "../assets/Hero1.png"

const slides = [
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: Image1,
  },
  {
    title: "Branding",
    description:
      "Branding is the process of creating a unique identity for a product, service, or company. It involves elements like name, logo, design, tone, and messaging to shape how people perceive the brand. Effective branding builds recognition, trust, and emotional connection with the audience.",
    image: Image1,
  },
  {
    title: "Design",
    description:
      "Design is the process of planning and creating visual or functional solutions to meet specific needs. It combines creativity, problem-solving, and aesthetics to make products, experiences, or systems both effective and appealing. Good design focuses on usability, clarity, and user satisfaction.",
    image: Image1,
  },
  {
    title: "Strategy",
    description:
      "Strategy is a well-thought-out plan designed to achieve a specific goal or solve a problem. It involves analyzing the current situation, setting clear objectives, and deciding on the best actions to reach them. A good strategy helps prioritize efforts, manage resources effectively, and stay focused on the desired outcome.",
    image: Image1,
  },
  {
    title: "Campaign",
    description:
      "Campaign refers to a planned series of actions or activities aimed at achieving a specific goal, often related to marketing, politics, or awareness. It usually targets a specific audience over a set period of time. A successful campaign is strategic, goal-driven, and designed to create impact or change.",
    image: Image1,
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);


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
