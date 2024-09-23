import React from "react";
import HybridFloor from "../components/HybridFloor";
import hybridFloor from "../assets/img/1009.png";
import PageHeader from "../components/PageHeader";
import floor from "../assets/img/floor.jpg";


const Products = () => {
  return (
    <div>
      <PageHeader title="products" imageSrc={hybridFloor} />
      <HybridFloor />
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-6">
            <h2 className="h2 text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">Our Momentum</h2>
            <h3 className="h3 font-semibold mb-4 text-accent">No Job is too BIG or too SMALL!</h3>
            <p className="text-gray-600 mb-6">
              We Guarantee 100% Satisfaction.
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li className="mb-2">High Quality Work</li>
              <li className="mb-2">Fast & Excellent Service</li>
              <li className="mb-2">Honest & Reliable Advice</li>
              <li className="mb-2">Reasonable Pricing</li>
            </ul>
          </div>
          <div className="md:w-1/2 p-6 flex justify-center items-center">
            <img
              src={floor}
              alt="Our Momentum"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
