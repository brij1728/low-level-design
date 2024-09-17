import { ChatType } from '../../types/chatType';
import React from 'react';

export const ChatMessage: React.FC<ChatType> = ({
  id,
  name,
  userAvatar,
  message,
}) => {
  return (
    <div className="flex items-start space-x-3 p-2" key={id}>
      {/* Avatar */}
      <img
        className="w-8 h-8 rounded-full object-cover"
        src={userAvatar}
        alt={name}
        onError={(e) => {
          // Fallback to a default image if avatar fails to load
          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/32';
        }}
      />

      {/* Name and Message */}
      <div className="flex-1">
        {/* Name on the first line */}
        <span className="font-semibold text-sm">{name} </span>

        {/* Message - wrapped properly below the name */}
        <span className="text-sm text-gray-800 break-words leading-normal">
          {message}
        </span>
      </div>
    </div>
  );
};
