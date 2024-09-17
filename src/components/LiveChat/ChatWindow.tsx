import React, { useEffect, useState } from 'react';
import { generateRandomId, getRandomAvatar, getRandomMessage, getRandomName } from '../../utils';

import { ChatInput } from './ChatInput';
import { ChatType } from '../../types/chatType';
import { MessageList } from './MessageList';

const CHAT_MESSAGES_LIMIT = 100;

export const ChatWindow = () => {
  const [messages, setMessages] = useState<ChatType[]>([]);

  // Simulate incoming random messages
  const fetchMessages = () => {
    const data = [
      {
        id: generateRandomId(),
        name: getRandomName(),
        userAvatar: getRandomAvatar(),
        message: getRandomMessage(),
      },
    ];
    setMessages((prevMessages) => {
      let newMessageList = [...data, ...prevMessages];
      newMessageList = newMessageList.slice(0, CHAT_MESSAGES_LIMIT); // Limit messages
      return newMessageList;
    });
  };

  // Handle user submission
  const handleUserSubmit = (message: string) => {
    const newMessage = {
      id: generateRandomId(),
      name: 'User', // Static name for user comments
      userAvatar: 'https://via.placeholder.com/32', // Static avatar for user comments
      message: message,
    };
    setMessages((prevMessages) => {
      let newMessageList = [newMessage, ...prevMessages];
      newMessageList = newMessageList.slice(0, CHAT_MESSAGES_LIMIT); // Limit messages
      return newMessageList;
    });
  };

  // Simulate new messages every second
  useEffect(() => {
    const interval = setInterval(() => {
      fetchMessages();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col w-full h-[300px] lg:h-[600px] border border-black">
      {/* Chat messages */}
      <MessageList messages={messages} />

      {/* Input field for user to submit their comment */}
      <ChatInput onSubmit={handleUserSubmit} />
    </div>
  );
};
