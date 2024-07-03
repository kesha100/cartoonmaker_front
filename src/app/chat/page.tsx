import React from 'react';
import Header from '../../components/Header';
import Message from '../../components/Message';
import MessageInput from '../../components/MessageInput';

const Chat: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="w-full h-screen flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
        <Header />
        <div className="p-4 lg:p-6 flex-1">
          <Message sender="Bonnie Green" time="11:46" text="Hello there, We need to have a meeting to discuss the latest changes to be able to launch the product, please confirm when you are available. Thank you" />
          <Message sender="Bonnie Green" time="11:46" text="That's awesome. I think our users will really appreciate the improvements." isUser />
        </div>
        <MessageInput />
      </div>
    </div>
  );
};

export default Chat;
