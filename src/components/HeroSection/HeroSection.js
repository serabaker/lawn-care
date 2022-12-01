import React from "react";
import "./HeroSection.css";
import lawnCare from "../../images/lawn-care.jpg";
const HeroSection = () => {
  return (
    <div className="hero-container">
      <img className="hero-img" src={lawnCare} alt="groomed lawn care" />
    </div>
  );
};

export default HeroSection;
