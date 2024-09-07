// src/components/Card.js
import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <img src={image} alt={title} className="w-full h-80 object-cover" />
      <div className="px-8 py-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">{title}</h2>
        <ul className="list-disc list-inside text-gray-700">
          {description.split('\n').map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
