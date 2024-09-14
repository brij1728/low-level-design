import React, { useState } from 'react';

import { AccordionItem } from '../AccordionItem';
import { accordionData } from '../../data/accordion';

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(null); // Close the currently active section if clicked again
    } else {
      setActiveIndex(index); // Open the clicked section
    }
  };

  return (
    <div className='m-auto mt-5 p-4 gap-4'>
		<h1 className='text-2xl font-bold'>Israel-Palestine conflict</h1>
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          content={item.content}
          isActive={activeIndex === index}
          toggleAccordion={toggleAccordion}
        />
      ))}
    </div>
  );
};
