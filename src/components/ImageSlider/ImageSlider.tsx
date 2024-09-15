import React, { useEffect, useState } from 'react';
import { RiArrowLeftWideLine, RiArrowRightWideLine } from 'react-icons/ri';

import { imageLinks } from '../../data/imageLinks';

export const ImageSlider = () => {
  const [active, setActive] = useState(0);

  const loadPrevImage = () => {
    setActive((prev) => (prev - 1 + imageLinks.length) % imageLinks.length);
  };

  const loadNextImage = () => {
    setActive((prev) => (prev + 1) % imageLinks.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      loadNextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className='relative w-full md:w-[500px] h-[500px] flex items-center justify-center mx-4'>
      {/* Left arrow button */}
      <div 
        onClick={loadPrevImage} 
        className='absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer bg-gray-800 p-2 rounded-full'
      >
        <RiArrowLeftWideLine size={40} color="white" />
      </div>

      {/* Image */}
      <img src={imageLinks[active]} alt="slide" className='w-full h-full object-cover' />

      {/* Right arrow button */}
      <div 
        onClick={loadNextImage} 
        className='absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer bg-gray-800 p-2 rounded-full'
      >
        <RiArrowRightWideLine size={40} color="white" />
      </div>
    </div>
  );
};
