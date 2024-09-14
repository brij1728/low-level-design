import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import { ISingleAccordion } from '../../types/accordionType';
import React from 'react';

interface IProps extends ISingleAccordion {
  isActive: boolean;
  index: number;
  toggleAccordion: (index: number) => void;
}

export const AccordionItem: React.FC<IProps> = ({ title, content, isActive, index, toggleAccordion }) => {
  return (
    <div className=" gap-2 mt-4 ">
      <div 
        className="flex justify-between items-center cursor-pointer bg-slate-200 p-2" 
        onClick={() => toggleAccordion(index)}
      >
        <h1 className="text-xl font-semibold">{title}</h1>
        <span>
          {isActive ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
        </span>
      </div>
      {isActive && <p className="text-gray-500 mt-2">{content}</p>}
    </div>
  );
};
