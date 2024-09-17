import { ChatMessage } from './ChatMessage';
import { ChatType } from '../../types/chatType';
import React from 'react';

interface MessageListProps {
  messages: ChatType[];
}

export const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-scroll flex flex-col-reverse p-2">
      {messages.length > 0 &&
        messages.map((message: ChatType, index: number) => (
          <ChatMessage key={index} {...message} />
        ))}
    </div>
  );
};
