import React from "react";
import "./HeroSection.css";
import lawnImg from "../../images/lawn-care.jpg";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <img className="hero-img" src={lawnImg} alt="groomed lawn" />
    </div>
  );
};

export default HeroSection;
