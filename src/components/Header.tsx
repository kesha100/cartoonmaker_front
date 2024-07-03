import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-4 lg:p-6 bg-white shadow-md">
      <img src="/balakai_logo.png" alt="Logo" className="h-12" />
      <h1 className="text-xl lg:text-2xl font-bold">BALAKAI</h1>
      <button className="text-black">
        <svg
          className="h-6 w-6 lg:h-8 lg:w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Header;
