import React from "react";
import Footer from "../components/Footer/Footer";
import Resources from "../components/Resources/Resources";
import SideNav from "../components/SideNav/SideNav";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection id="why" />
      <Services id="services" />
      <Resources />
      <SideNav />
      <Footer />
    </div>
  );
};

export default Home;
