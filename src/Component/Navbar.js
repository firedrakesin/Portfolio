import React from 'react';
import logo from '../Images/logo.png';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram, faStackOverflow } from '@fortawesome/free-brands-svg-icons';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/portfolio">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="https://github.com/firedrakesin"><FontAwesomeIcon icon={faGithub} /></a></li>
        <li><a href="https://www.linkedin.com/in/garima-1yadav/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        <li><a href="https://twitter.com/firedrakesin"><FontAwesomeIcon icon={faTwitter} /></a></li>
        <li><a href="https://www.instagram.com/firedrakesin/"><FontAwesomeIcon icon={faInstagram} /></a></li>
        <li><a href="https://stackoverflow.com/users/13735359/garima-yadav"> <FontAwesomeIcon icon={faStackOverflow}/></a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
