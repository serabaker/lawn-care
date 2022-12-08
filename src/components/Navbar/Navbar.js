import "./Navbar.css";
import React from "react";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div>{/* <img className="nav-logo"/> */}</div>
      <div className="list-container">
        <ul className="ul-nav">
          <li className="li-nav">Home</li>
          <li className="li-nav">About</li>
          <li className="li-nav">Services</li>
        </ul>
      </div>
      <button>Schedule Today</button>
    </nav>
  );
};

export default Navbar;
