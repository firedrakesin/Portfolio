import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // You can use any icon library you prefer
import { faReact, faNode, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons'; // Example icons

const LogoSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1, // Number of logos to show at once
    slidesToScroll: 1,
    autoplay: true, // Auto-scrolling
    speed: 6000, // Slide transition speed in milliseconds
    autoplaySpeed: 0, // Delay between slides
    cssEase: 'linear', // Linear autoplay
    centerMode: true, // Center the current logo
    centerPadding: '0', // Padding when centerMode is true
    arrows: false, // Hide navigation arrows
  };

  return (
    <>< h2 className='skil'>SKILLS</h2>
    <div className="logo-slider">
        
      <Slider {...settings}>
        <div className="skills">
          <div className="skill-icon">
            <FontAwesomeIcon icon={faReact} />
          </div>
        </div>
        <div className="skills">
          <div className="skill-icon">
            <FontAwesomeIcon icon={faNode} />
          </div>
        </div>
        <div className="skills">
          <div className="skill-icon">
            <FontAwesomeIcon icon={faHtml5} />
          </div>
        </div>
        <div className="skills">
          <div className="skill-icon">
            <FontAwesomeIcon icon={faCss3} />
          </div>
        </div>
      </Slider>
    </div></>
  );
};

export default LogoSlider;
