import React from 'react';
import Card from './Cart';
import Hybrid from '../assets/img/HW8101+.jpg'

const CardGrid = () => {
  const products = [
    { title: 'Hybrid', image: Hybrid }, 
  ];

  return (
    <div className="justify-center flex m-auto px-8">
      {products.map((product, index) => (
        <Card key={index} title={product.title} image={product.image} />
      ))}
    </div>
  );
};

export default CardGrid;
