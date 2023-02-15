import React from "react";
import "./Navbar.css";
import { PopupButton } from "react-calendly";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-wrapper">
        <h1 className="nav-logo">Business Logo</h1>

        <div className="list-container">
          <ul className="ul-nav">
            <a className="nav-a" href="/">
              <li className="li-nav">Home</li>
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
        {/* <div className="nav-button">
          <button className="nav-button-container">
            <a className="button-a" href="/scheduletoday">
              Schedule Today
            </a>
          </button>
        </div> */}
        <div>
          <a className="nav-a" href="/">
            {
              <PopupButton
                className="popup"
                url="https://calendly.com/britny-j-lain"
                rootElement={document.getElementById("root")}
                text="Schedule today"
              />
            }
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
