import { LANGKeyType, LanguageData } from '../../types/langType';

import React from 'react';

interface LanguageProps {
  lang: LANGKeyType; 
  langData: { [key in LANGKeyType]: LanguageData }; 
}

export const Language: React.FC<LanguageProps> = ({ lang, langData }) => {
  console.log(lang);

  const { title, desc, title2, title3 } = langData[lang]; 

  return (
    <div className='p-4'>
      <h1 className='text-lg font-bold'>{title}</h1>
      <p className='text-base font-normal'>{desc}</p>
      <h2 className='text-lg font-bold'>{title2}</h2>
      <h2 className='text-lg font-bold'>{title3}</h2>
    </div>
  );
};
