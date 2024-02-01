// components/Slider.tsx

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

interface SliderProps {
  images: string[];
}

const ImageSlider: React.FC<SliderProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,          // Enable autoplay
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
            <img   src={image} alt={`Slider Image ${index + 1}`} className="w-full h-auto"  width={400}
    height={32}
      />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
