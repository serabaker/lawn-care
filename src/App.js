import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Router>
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
