'use client'
import React, { useState } from 'react';
import axios from 'axios';

const MessageInput: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/create-job', { 
        prompt: message, // You might need to adjust the keys to match your backend expectations
        config: {"input_width": 1920,
        "input_height": 2400,
        "source_image_url": null}, // Add other required fields
        duration: 4, // Example duration
        seed: 123, // Example seed
        is_public: true // Example is_public
      });
      console.log(message)
      console.log('Message sent successfully:', response.data);
      setMessage(''); // Clear the input after successful submission
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center p-4 lg:p-6 border-t w-full fixed bottom-4">
      <button type="button" className="text-blue-500 p-2 lg:p-3">
        <svg
          className="w-6 h-6 lg:w-8 lg:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
      </button>
      <input
        type="text"
        placeholder="Write message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 px-4 py-2 lg:px-6 lg:py-3 border rounded-full mx-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 lg:p-3 rounded-full">
        <svg
          className="w-6 h-6 lg:w-8 lg:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </button>
    </form>
  );
};

export default MessageInput;
