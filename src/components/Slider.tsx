import React from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useDeviceDetect from '../hooks/useDeviceDetect';

const Slider: React.FC = () => {
  const { isMobile } = useDeviceDetect();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <SlickSlider {...settings} className="mb-6">
      <div>
        <img src="https://source.unsplash.com/random/800x400/?soccer" alt="Soccer 1" className={`w-full ${isMobile ? 'h-48' : 'h-96'} object-cover`} />
      </div>
      <div>
        <img src="https://source.unsplash.com/random/800x400/?football" alt="Soccer 2" className={`w-full ${isMobile ? 'h-48' : 'h-96'} object-cover`} />
      </div>
      <div>
        <img src="https://source.unsplash.com/random/800x400/?soccer-field" alt="Soccer 3" className={`w-full ${isMobile ? 'h-48' : 'h-96'} object-cover`} />
      </div>
    </SlickSlider>
  );
};

export default Slider;