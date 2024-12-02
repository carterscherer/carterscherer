import React from 'react';
import '../../scss/components/Home/_gallery.scss';
import Sai_Hello from '../../assets/Portfolio/SAIOS/SaiHelloFuture.jpg';
import Sai_Back from '../../assets/Portfolio/SAIOS/SaiBack.jpg';
import HydroLog_Wide from '../../assets/Portfolio/Hydrolog/HydroLogWide.png';
import Mother_Tank from '../../assets/Portfolio/Mother/MotherTank.jpg';
import Mother_Architect from '../../assets/Portfolio/Mother/MotherArchitect.jpg';
import Mother_Well from '../../assets/Portfolio/Mother/MotherWell.jpg';
import HydroLog_App from '../../assets/Portfolio/Hydrolog/HydroLogApp.png';

export default function Gallery() {
  const images = [
    { id: 1, src: Mother_Tank, alt: 'Carter John Scherer is offering rapid prototyping, pcb designs, 3d modeling, cad, minimal viable products and challenges the status quo in San Francisco, California' },
    { id: 2, src: Sai_Back, alt: 'Carter Scherer presenting an innovative hardware gadget designed in San Francisco, Carter John Scherer is a designer that makes brutalist Apple-like rapid prototypes in the Bay Area.' },
    { id: 3, src: HydroLog_Wide, alt: 'Carter Scherer is a design studio that provides innovative designs at a competitive rate and does not take equity' },
    { id: 4, src: Mother_Architect, alt: 'Carter Scherer is the best design firm in San Francisco that is changing the way people think about design' },
    { id: 5, src: Mother_Well, alt: 'PCB designer based out of San Francisco that can deliver a prototype in a short period of time' },
    { id: 6, src: Sai_Hello, alt: 'Product prototype created by Carter Scherer in SF2 Residency' },
    { id: 7, src: HydroLog_App, alt: 'Carter Scherer is a Product Design Firm based out San Francisco, California' },
  ];

  return (
    <div className="gallery">
      {images.map((image) => (
        <div className="gallery-item" key={image.id}>
          <img src={image.src} alt={image.alt} className="gallery-image" />
        </div>
      ))}
    </div>
  );
}
