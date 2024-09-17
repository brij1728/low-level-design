import React, { useEffect, useState } from 'react';
import { generateRandomId, getRandomAvatar, getRandomMessage, getRandomName } from '../../utils';

import { ChatMessage } from './ChatMessage';
import { ChatType } from '../../types/chatType';

const CHAT_MESSAGES_LIMIT = 100;

export const ChatWindow = () => {
  const [messages, setMessages] = useState<ChatType[]>([]);
  
  const fetchMessages =  () => {
   const data = [
      {
        id: generateRandomId(),
        name: getRandomName(),
        userAvatar: getRandomAvatar(),
        message: getRandomMessage(),
      },
    ];
    setMessages((messages) => {
      let newMessaheList = [...data, ...messages];
      newMessaheList = newMessaheList.slice(0, CHAT_MESSAGES_LIMIT);
      return newMessaheList;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchMessages();
    }, 1000);

    return () => clearInterval(interval); 
  }, []); 

  return (
    <div className="flex flex-col-reverse w-full h-[300px] lg:h-[600px] border border-black overflow-y-scroll ">
      {messages.length > 0 &&
        messages.map((message: ChatType, index: number) => (
          <ChatMessage key={index} {...message} />
        ))}
    </div>
  );
};
