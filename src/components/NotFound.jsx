// src/components/NotFound.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/components/_notfound.scss';
import cs2logo from '../assets/Branding/Lavender_Signature.png'
import { GoHomeFill } from "react-icons/go";


const NotFound = () => {
  return (
    <div className="not-found-container">
      <img className="signature" src={cs2logo} alt="Carter Scherer Signature" />
      <h1>404 - Ahh Shucks...</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/home"><GoHomeFill className='home-icon' /></Link>
    </div>
  );
};

export default NotFound;
