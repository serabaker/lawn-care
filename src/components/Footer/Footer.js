import React from "react";
import { FaFacebook } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const yearOfOurLord = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        {/* <img className="footer-logo"/> */}
        <div className="footer-link-container">
          <div className="footer-link-wrapper">
            <div className="footer-link-item">
              <div className="footer-link">
                <a className="footer-a" href="/contactus">
                  Contact Us
                </a>
                <a className="footer-a" href="#about">
                  About
                </a>
                <a className="footer-a" href="/blog">
                  Blog
                </a>
                <a className="footer-a" href="/faqs">
                  FAQs
                </a>
                <div className="social-wrapper">
                  <div className="social-icons">
                    <a
                      href="//www.facebook.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                    >
                      <FaFacebook />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="web-rights">
          {" "}
          Lawn care serivce LLC © {yearOfOurLord} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
