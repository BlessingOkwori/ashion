import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import payment1 from "../../assets/payment1.jpg";
import payment2 from "../../assets/payment2.jpg";
import payment3 from "../../assets/payment3.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo and About Section */}
        <div className="footer-section">
          <div className="footer-logo">
            <img src={logo} alt="Logo" />
          </div>
          <p className="footer-description">
            Your company description goes here. Brief info about your brand or mission.
          </p>
        </div>
        
        {/* Navigation Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>
        
        {/* Social Media Icons / Images */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src={payment1} alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src={payment2} alt="Instagram" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src={payment3} alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


