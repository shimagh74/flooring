import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, link }) => {
  return (
    <Link to={link} className="p-6 bg-white shadow-lg rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <Icon className="text-4xl text-accent mb-4 mx-auto" />
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
};

export default ServiceCard;
