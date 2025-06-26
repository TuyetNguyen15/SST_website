import React, { useState, useEffect } from 'react';
import "../assets/index.css";

const CircularCarousel = () => {
  const slides = [
    { id: 1, title: "WispSwap DEX", image: require('../assets/images/carousel/DEX.png') },
    { id: 2, title: "Stickman Battle", image: require('../assets/images/carousel/Stickman.jpg') },
    { id: 3, title: "Payment Gateway ", image: require('../assets/images/carousel/crypto.jpg') },
    { id: 4, title: "Pawcific Rim", image: require('../assets/images/carousel/pacifier.jpg') },
    { id: 5, title: "Multi Level Marketing DEX", image: require('../assets/images/carousel/MarketingDEX.jpg') },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;
  const radius = 200;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const calculatePosition = (index) => {
    const angle = ((index - currentIndex) * 360) / totalSlides;
    const radian = (angle * Math.PI) / 180;

    const x = Math.sin(radian) * radius;
    const z = Math.cos(radian) * radius;

    const distance = Math.abs(index - currentIndex);
    const scale = 1 - 0.2 * Math.min(distance, totalSlides - distance);
    const opacity = 1 - 0.3 * Math.min(distance, totalSlides - distance);

    return {
      transform: `translateX(${x}px) translateZ(${z}px) scale(${scale})`,
      opacity: opacity,
      zIndex: distance === 0 ? 10 : 1,
    };
  };

  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden flex justify-center items-center z-10">
      <div className="perspective-1000 mb-8 w-full h-full">
        <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-1000 mx-auto drop-shadow-[0px_20px_20px_rgba(0,0,0,0.8)]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="absolute w-[600px] h-[400px] rounded-3xl  shadow-4xl overflow-hidden transition-all duration-1000 group"
              style={{
                ...calculatePosition(index),
                left: '50%',
                top: '50%',
                marginLeft: '-300px',
                marginTop: '-200px',
              }}
            >
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover  group-hover:scale-105 transition-all duration-300 group-hover:drop-shadow-[0px_15px_30px_rgba(0,0,0,1)]"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-customer-4 opacity-5 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute inset-0 flex justify-center items-center text-white  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h2 className="text-3xl text- font-bold transform scale-110 group-hover:scale-125 transition-all duration-300 text-shadow-lg group-hover:text-shadow-[0px_5px_15px_rgba(0,0,0,0.5)]">
                        {slide.title}
                      </h2>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-between w-full max-w-[200px] z-20 hidden sm:flex">
        <button onClick={prevSlide} className="carousel-button">
          <i className="fas fa-chevron-left"></i>
        </button>

        <div className="indicator-container flex gap-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`indicator w-3 h-3 rounded-full transition ${index === currentIndex ? 'bg-blue-500 scale-125' : 'bg-gray-400'}`}
            />
          ))}
        </div>

        <button onClick={nextSlide} className="carousel-button">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default CircularCarousel;
