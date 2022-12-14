import React from "react";

const SideNav = () => {
  return (
    <div className="side-container">
      <div className="side-wrapper">
        <div className="img-container">{/* <img/> */}</div>
        <div className="sidenav-items">
          <ul className="sidenav-ul">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#resources">Resources</a>
            </li>
          </ul>
          <div className="sidenav-btn">
            <button className="side-btn">
              <a href="/">Back to Home</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
