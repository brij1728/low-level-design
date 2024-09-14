import { ISingleAccordion } from '../../types/accordionType';
import React from 'react';

interface IProps extends ISingleAccordion {
  isActive: boolean;
  index: number;
  toggleAccordion: (index: number) => void;
}

export const AccordionItem: React.FC<IProps> = ({ title, content, isActive, index, toggleAccordion }) => {
  return (
    <div className="border-b-2 border-gray-200 gap-2 p-2 mt-4">
      <div 
        className="flex justify-between items-center cursor-pointer" 
        onClick={() => toggleAccordion(index)}
      >
        <h1 className="text-xl font-semibold">{title}</h1>
        <span>{isActive ? '-' : '+'}</span>
      </div>
      {isActive && <p className="text-gray-500 mt-2">{content}</p>}
    </div>
  );
};
