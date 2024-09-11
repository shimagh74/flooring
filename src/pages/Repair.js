import React from 'react';
import PageHeader from '../components/PageHeader';
import repairImage from "../assets/img/1004.png"; // Replace with your repair header image
import exampleImage1 from "../assets/img/repair/repair2.jpg";
import exampleImage2 from "../assets/img/repair/repair4.jpg";
import exampleImage3 from "../assets/img/repair/repair3.jpg";
import exampleImage4 from "../assets/img/repair/repair5.jpg";

const RepairServices = () => {
  return (
    <>
      <PageHeader title="Repair Services" imageSrc={repairImage} />

      {/* Content Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
            Expert Repair Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-4">
            When it comes to flooring repair, trust our skilled professionals to breathe new life into your floors. Whether you’re dealing with unsightly scratches, damaged floorboards, or creaking hardwood, our experts are equipped to assess, repair, and restore your flooring to its former glory.
          </p>
        </div>
      </section>

      {/* Recent Repairs Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl h2 md:text-4xl lg:text-5xl font-bold mb-8 text-accent text-center">
            Recent Repair Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-2">
              <img
                src={exampleImage1}
                alt="Repair Example 1"
                className="w-full h-auto object-cover rounded-lg shadow-md border border-gray-200"
              />
            </div>
            <div className="grid grid-cols-1 gap-6">
              <img
                src={exampleImage2}
                alt="Repair Example 2"
                className="w-full h-auto object-cover rounded-lg shadow-md border border-gray-200"
              />
              <img
                src={exampleImage3}
                alt="Repair Example 2"
                className="w-full h-auto object-cover rounded-lg shadow-md border border-gray-200"
              />
              <img
                src={exampleImage4}
                alt="Repair Example 3"
                className="w-full h-auto object-cover rounded-lg shadow-md border border-gray-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Guarantee Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
          {/* Left Side - Text */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
              Our Promise
            </h2>
            <h3 className="text-xl md:text-2xl font-medium mb-4 text-accent">
              We Restore, You Relax
            </h3>
            <p className="text-gray-600 mb-6">
              We are committed to delivering high-quality repairs that exceed your expectations.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Precision Repairs</li>
              <li>Timely and Efficient Service</li>
              <li>Transparent Pricing</li>
              <li>Customer Satisfaction Guaranteed</li>
            </ul>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2 p-6 flex justify-center">
            <img
              src={exampleImage1}
              alt="Repair Promise"
              className="w-full h-auto object-cover rounded-lg shadow-md border border-gray-200"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default RepairServices;

