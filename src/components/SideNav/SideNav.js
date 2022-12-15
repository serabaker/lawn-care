import React from "react";
import "./SideNav.css";

const SideNav = () => {
  return (
    <nav className="side-container">
      <div className="side-wrapper">
        <div className="img-container">{/* <img/> */}Image</div>
        <div className="sidenav-items">
          <ul className="sidenav-ul">
            <li className="sidenav-li">
              <a className="sidenav-a" href="/">
                Home
              </a>
            </li>
            <li className="sidenav-li">
              <a className="sidenav-a" href="#services">
                Services
              </a>
            </li>
            <li className="sidenav-li">
              <a className="sidenav-a" href="#resources">
                Resources
              </a>
            </li>
          </ul>
        </div>
        <div className="sidenav-btn">
          <button className="side-btn">
            <a className="sidenav-btn-a" href="/">
              Back to Home
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
