import React from 'react';

interface MemeCardProps {
  id: string;
  name: string;
  url: string;
}

export const MemeCard: React.FC<MemeCardProps> = ({ name, url }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-black p-2">
      <img
        src={url}
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      </div>
    </div>
  );
};
