import React, { useState } from 'react';

const GreetingCard = ({ title, message, bgColor }) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleMouseEnter = () => {
    setShowMessage(true);
  };

  const handleMouseLeave = () => {
    setShowMessage(false);
  };

  return (
    <div
      className={`p-6 rounded-lg shadow-lg text-white ${bgColor} max-w-sm mx-auto cursor-pointer transition-transform transform hover:scale-105`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleMouseEnter}
    >
      <h2 className="text-2xl font-bold mb-2 text-center">{title}</h2>
      {showMessage && <p className="text-lg text-center">{message}</p>}
    </div>
  );
};

export default GreetingCard;
