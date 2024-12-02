// src/components/Navigation.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // For routing
import { TiThMenu } from "react-icons/ti";
import { TiThMenuOutline } from "react-icons/ti";
import cslogo from '../assets/Beige_Signature.png'
import '../scss/components/_navigation.scss';  // You can create a CSS file for styling

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // For mobile menu toggle

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navigation">
      <div className="signature">
        <img src={ cslogo } alt="Carter Scherer Signature" />
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/apply">Apply</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      {/* Mobile Menu Toggle Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <TiThMenu /> : <TiThMenuOutline />}
      </div>
    </nav>
  );
};

export default Navigation;
