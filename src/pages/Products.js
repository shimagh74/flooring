import React from 'react';
import HybridFloor from '../components/HybridFloor';
import hybridFloor from "../assets/img/1009.png";
import PageHeader from '../components/PageHeader';


const Products = () => {
  return <div>
    <PageHeader title="products" imageSrc={hybridFloor} />
    <HybridFloor/></div>;
};

export default Products;
