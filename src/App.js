import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Resources from "./components/Resources/Resources";

function App() {
  return (
    <>
      {/* <Navbar />
      <HeroSection />
      <Services /> */}
      <Router>
        <Navbar />
        <HeroSection id="why" />
        <Services id="services" />
        <Resources />
        <Footer />
        <Routes>
          <Route path="/home" />
          <Route path="/services" />
          <Route id="resources" path="/resources" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
