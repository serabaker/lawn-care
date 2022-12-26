import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import Resources from "../components/Resources/Resources";
import SideNav from "../components/Footer/SideNav/SideNav";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar />
      <HeroSection id="why" />
      <Services id="services" />
      <Resources />
      <SideNav isOpen={isOpen} toggle={toggle} />
      <Footer />
    </div>
  );
};

export default Home;
