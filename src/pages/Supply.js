
import React from 'react';
import PageHeader from '../components/PageHeader';
import supplyImage from "../assets/img/1007.png"; // Replace with your supply header image
import exampleImage1 from "../assets/img/Design.jpg"; // Replace with your example images
import exampleImage2 from "../assets/img/3005.png";
import exampleImage3 from "../assets/img/flooring.jpg";
import floor from "../assets/img/floor.jpg";

const Supply = () => {
  return (
    <>
      {/* Page Header */}
      <PageHeader title="Supply" imageSrc={supplyImage} />

      {/* Content Section */}
      <section className="py-12 px-4 md:px-12 lg:px-24 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8">
            Premium Flooring Supply Services
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            At Maple Floors, we offer a comprehensive range of premium flooring materials that cater to various styles and preferences. Our supply services ensure that you have access to the best quality flooring options available on the market.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            From hardwood to vinyl, laminate, and tile, we stock a vast selection of flooring materials that meet the highest industry standards. Whether you're renovating your home or working on a large-scale commercial project, we have the right supplies to meet your needs.
          </p>
          <p className="text-lg md:text-xl text-gray-700">
            Contact us today to explore our extensive range of flooring supplies and get expert advice on the best materials for your project.
          </p>
        </div>
      </section>

      {/* Images Section */}
      <section className="py-12 px-4 md:px-12 lg:px-24 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-accent h2">
            Our Recent Supplies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="md:col-span-2">
              <img
                src={exampleImage1}
                alt="Supply Example 1"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <img
                src={exampleImage2}
                alt="Supply Example 2"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <img
                src={exampleImage3}
                alt="Supply Example 3"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Momentum Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Left Side - Text */}
          <div className="md:w-1/2 p-6">
            <h2 className="h2 font-semibold mb-4">Our Momentum</h2>
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

          {/* Right Side - Image */}
          <div className="md:w-1/2 p-6 flex justify-center items-center">
            <img
              src={floor}
              alt="Our Momentum"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Supply;
