import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import React, { useState } from 'react';

import { AiOutlineSmile } from 'react-icons/ai';
import { IoMdSend } from 'react-icons/io';

interface ChatInputProps {
  onSubmit: (message: string) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSubmit }) => {
  const [userMessage, setUserMessage] = useState<string>(''); 
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false); 

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userMessage.trim()) {
      onSubmit(userMessage); 
      setUserMessage('');
      setShowEmojiPicker(false);
    }
  };

  // Function to handle emoji click
  const onEmojiClick = (emojiData: EmojiClickData) => {
    setUserMessage(userMessage + emojiData.emoji); 
  };

  return (
    <div className="relative p-2 bg-white border-t border-gray-300">
      <form onSubmit={handleSubmit} className="flex items-center">
        <img 
          src="https://randomuser.me/api/portraits/men/1.jpg" 
          alt="user avatar" 
          className="w-8 h-8 rounded-full mr-2"
        />

        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Chat..."
          className="flex-1 p-2 pl-4 rounded-full border border-gray-300 focus:outline-none focus:border-blue-400 pr-16"
        />

        <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() => setShowEmojiPicker((prev) => !prev)}
          >
            <AiOutlineSmile size={22} />
          </button>
        </div>

        {userMessage && (
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-700 focus:outline-none"
          >
            <IoMdSend size={24} />
          </button>
        )}

        {showEmojiPicker && (
          <div className="absolute z-50 left-0 bottom-full mb-2 bg-white border border-gray-300 rounded-md shadow-lg p-2 w-full">
            <EmojiPicker onEmojiClick={onEmojiClick} />
          </div>
        )}
      </form>
    </div>
  );
};
