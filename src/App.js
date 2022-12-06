import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      {/* <Navbar />
      <HeroSection />
      <Services /> */}
      <Router>
        <Navbar />
        <HeroSection />
        <Services />
        <Footer />
        <Routes>
          <Route id="menu-items" path="/pricing" />
          <Route id="menu-items" path="/products" />
          <Route id="menu-items" path="/blog" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
