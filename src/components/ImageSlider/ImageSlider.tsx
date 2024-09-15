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
    <div className='p-4 flex items-center justify-center'>
      {/* Left arrow button */}
      <div onClick={loadPrevImage} className='cursor-pointer'>
        <RiArrowLeftWideLine size={50} strokeWidth={1} />
      </div>

      {/* Image */}
      <img src={imageLinks[active]} alt="slide" className='w-[500px] h-[500px] mx-4' />

      {/* Right arrow button */}
      <div onClick={loadNextImage} className='cursor-pointer'>
        <RiArrowRightWideLine size={50} strokeWidth={1} />
      </div>
    </div>
  );
};
