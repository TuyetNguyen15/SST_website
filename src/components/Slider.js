import React, { useEffect, useRef, useState } from 'react';

const ServiceImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current image
  const serviceImages = [
    require('../assets/images/service/DWM.jpg'),
    require('../assets/images/service/BigData.jpg'),
    require('../assets/images/service/DApps.png'),
    require('../assets/images/service/AI.png'),
    require('../assets/images/service/DEApp.png'),
    require('../assets/images/service/HumanSupply.png'),
    require('../assets/images/service/Game.jpg'),
  ];
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('animationiteration', () => {
        const firstItem = container.firstElementChild;
        container.appendChild(firstItem);
      });
    }
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % serviceImages.length); // Go to next image
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + serviceImages.length) % serviceImages.length); // Go to previous image
  };

  return (
    <div className="max-w-8xl mx-auto py-12 px-4 relative">
      <div className="overflow-hidden">
        <div ref={containerRef} className="animate-marquee">
          <div className="flex gap-20">
            {serviceImages.concat(serviceImages, serviceImages, serviceImages).map((image, index) => (
              <div
                key={index}
                className={`w-[200px] h-[350px] rounded-[20px] overflow-hidden relative`}
                style={{
                  transform: `translateX(-${currentIndex * 200}px)`, 
                }}
              >
                <img
                  src={image}
                  alt={`Service ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/services/placeholder.jpg';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Button Navigation positioned at bottom-right */}
        <div className="absolute bottom-0 right-10 flex gap-4 p-4">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className="bg-white text-gray-400 w-11 h-11 border-2 border-gray flex items-center justify-center rounded-full hover:text-gray-600"
          >
             <i className="fas fa-chevron-left"></i>
          </button>
          
          {/* Next Button */}
          <button
            onClick={handleNext}
             className="bg-white text-gray-400 w-11 h-11 border-2 border-gray flex items-center justify-center rounded-full hover:text-gray-600"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceImages;
