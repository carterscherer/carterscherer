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
    { id: 1, src: Mother_Tank, alt: 'Image 1' },
    { id: 2, src: Sai_Back, alt: 'Image 2' },
    { id: 3, src: HydroLog_Wide, alt: 'Image 3' },
    { id: 4, src: Mother_Architect, alt: 'Image 4' },
    { id: 5, src: Mother_Well, alt: 'Image 5' },
    { id: 6, src: Sai_Hello, alt: 'Image 6' },
    { id: 7, src: HydroLog_App, alt: 'Image 7' },
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
