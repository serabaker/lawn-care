import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div>
        <h1 className="nav-logo">Lawn Care</h1>
      </div>
      <div className="list-container">
        <ul className="ul-nav">
          <li className="li-nav">
            <a href="/home">Home</a>
          </li>
        </ul>
        <ul className="ul-nav">
          <a href="/about">
            <li className="li-nav">About</li>
          </a>
        </ul>
        <ul className="ul-nav">
          <a href="/services">
            <li className="li-nav">Services</li>
          </a>
        </ul>
      </div>
      <button className="nav-button">Schedule Today</button>
    </nav>
  );
};

export default Navbar;
