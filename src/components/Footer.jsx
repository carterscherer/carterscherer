import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Optional, if you are using React Router
import CS2logo from '../assets/Branding/Beige_Signature.png'; // Replace with your actual logo file path
import '../scss/components/_footer.scss'; // Add your styles

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
        <Link to="/">
          <img src={ CS2logo } alt="Carter Scherer is a Product Designer based out of San Francisco, California" />
        </Link>
        </div>

        {/* Social Media Links */}
        <div className="footer-links">
          <a href="https://x.com/usura_cartier" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter size={30} />
          </a>
          <a href="https://www.instagram.com/usura.xyz/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.linkedin.com/in/cjs111/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/carterscherer" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={30} />
          </a>
          <a href="tel:+6502799135" aria-label="Call me">
            <FaPhone size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}
