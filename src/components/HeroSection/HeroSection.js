import React from "react";
import "./HeroSection.css";
import lawnCare from "../../images/lawn-care.jpg";
const HeroSection = () => {
  const heroText = "Trusted Lawn Care Service";
  return (
    <div className="hero-container">
      <img className="hero-img" src={lawnCare} alt="groomed lawn care" />
      <div className="hero-content">
        <p className="hero-text">{heroText}</p>
      </div>
    </div>
  );
};

export default HeroSection;
