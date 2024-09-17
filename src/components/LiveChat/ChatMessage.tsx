import { ChatType } from '../../types/chatType';
import React from 'react';

export const ChatMessage: React.FC<ChatType> = ({
  id,
  name,
  userAvatar,
  message,
}) => {
  return (
    <div className="flex items-center space-x-4 p-2" key={id}>
      <img
        className="w-8 h-8 rounded-full object-cover"
        src={userAvatar}
        alt={name}
        onError={(e) => {
          // Fallback to a default image if avatar fails to load
          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/32';
        }}
      />
      <div className="flex gap-3 justify-center items-center">
        <span className="font-semibold">{name}</span>
        <span className="text-sm text-gray-500">{message}</span>
      </div>
    </div>
  );
};
