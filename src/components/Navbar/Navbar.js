import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-wrapper">
        <div>
          <h1 className="nav-logo">Lain Lawn Care</h1>
        </div>
        <div className="list-container">
          <ul className="ul-nav">
            <a className="nav-a" href="/">
              <li className="li-nav">Why Lain</li>
            </a>
          </ul>
          <ul className="ul-nav">
            <a className="nav-a" href="#services">
              <li className="li-nav">Services</li>
            </a>
          </ul>
          <ul className="ul-nav">
            <a className="nav-a" href="#resources">
              <li className="li-nav">Resources</li>
            </a>
          </ul>
        </div>
        <div className="nav-button">
          <button className="nav-button-container">
            <a className="button-a" href="/scheduletoday">
              Schedule Today
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
