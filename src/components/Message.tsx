import React from 'react';

interface MessageProps {
  sender: string;
  time: string;
  text: string;
  isUser?: boolean;
}

const Message: React.FC<MessageProps> = ({ sender, time, text, isUser = false }) => {
  return (
    <div className="flex items-start mb-4">
      <img
        src={isUser ? '/cat.png' : '/cat.png'}
        alt="Avatar"
        className="w-10 h-10 lg:w-12 lg:h-12 rounded-full mr-3"
      />
      <div className="flex flex-col">
        <span className="text-sm lg:text-base font-semibold">{sender}</span>
        <span className="text-xs lg:text-sm text-gray-500">{time}</span>
        <div className={`rounded-lg p-3 lg:p-4 ${isUser ? 'bg-gradient-to-r from-blue-400 to-teal-400 text-white' : 'bg-gray-100'}`}>
          <p className="text-sm lg:text-base">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
