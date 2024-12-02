import React from 'react';
import '../scss/components/_portal.scss';

const Portal = () => {
  return (
    <div className="portal">
      <div className="background"></div>
      <div className="description-container">
        <div className="description">
          <p>
           I am now a <span className="bold">product design</span> FIRM. <span className="emphasis">Targeting Visionaries. </span> 
            Our innovations are <span className="highlight">luxurious, </span>Functional, <span className="highlight">Invisiblist, </span> 
            BASIC, <span className="dynamic">BRUTALIST, </span> & Minimal.
          </p>
        </div>
      </div> 
    </div>
  );
};

export default Portal;
