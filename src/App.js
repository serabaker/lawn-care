import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ backgroundColor: "#FFF" }}>
      <Home />
      <Router>
        {/* <Navbar />
        <HeroSection id="why" />
        <Services id="services" />
        <Resources />
        <SideNav />
        <Footer /> */}
        <Routes>
          <Route path="/home" />
          <Route path="/services" />
          <Route id="resources" path="/resources" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
