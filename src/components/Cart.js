import React from 'react';

const Card = ({ title, image }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="h-80 w-full overflow-hidden transform hover:scale-110 transition-transform duration-1000" />
      <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white text-lg font-semibold">
        {title}
      </div>
    </div>
  );
};

export default Card;