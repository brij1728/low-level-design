import { LANG } from '../../utils';
import { LANGKeyType } from '../../types/langType';
import React from 'react';

interface TeamProps {
  lang: LANGKeyType; 
}

export const Team: React.FC<TeamProps> = ({ lang }) => {
  console.log(lang);

  
  const { title, desc, title2, title3 } = LANG[lang];

  return (
    <div className='p-4'>
      <h1 className='text-lg font-bold'>{title}</h1>
      <p className='text-base font-normal'>{desc}</p>
      <h2 className='text-lg font-bold'>{title2}</h2>
      <h2 className='text-lg font-bold'>{title3}</h2>
    </div>
  );
};
