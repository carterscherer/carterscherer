import React from 'react';
import Me_Photo from '../../assets/About/Me.png'
import '../../scss/components/About/_about.scss'; 
import cs2logo from '../../assets/Branding/Lavender_Signature.png'

export default function About() {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={Me_Photo} alt="Me" />
      </div>
      <div className="about-text">
      <div className="signature-and-subtitle">
        <span className="subtitle">ABOUT</span>
        <img className="signature" src={cs2logo} alt="Carter Scherer Signature" />
      </div>

        <p className="intro">
          I have been  <span className="emphasis-text"> designing products for 8 years </span>
           formerly I <span className="emphasis-text"> Studied Architecture </span> at PSU.
        </p>
        <span className='subtitle'> ETHOS </span>
        <p className="story">
          
          About 2 months ago I finally made the move to San Francisco, CA and now I live at SF2 with the
          Residency. I've been an entrepreneur since day one and over the years I developed quite a bit of
          expierience with building new gadgets that solve real world problems. When I made the move to the Bay
          Area I of course needed to pull out all the stops and take on contracts to make rent. Well turns out that
          designers in hardware are not that easy to come by and I had people coming to me left and right.
          SF is a place where startups come to raise, build and thrive as passionate visionaries that change the world.
        </p>
        <span className='subtitle'> PARTE </span>
        <p className="closing">
          Design PARTÉs
        </p>
      </div>
    </div>
  );
}
