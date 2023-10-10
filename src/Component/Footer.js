import React from 'react'
import logo from "../Images/logo.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo"><img src={logo} alt='logo' style={{width:'50px'}}                                                     /></div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="footer-social">
        <a href="#" className="social-icon">Facebook</a>
        <a href="#" className="social-icon">Twitter</a>
        <a href="#" className="social-icon">LinkedIn</a>
        <a href="#" className="social-icon">GitHub</a>
      </div>
      <div className="footer-text">
        &copy; {new Date().getFullYear()} Firedrakesin. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
