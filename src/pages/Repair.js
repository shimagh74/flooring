import React from 'react';
import PageHeader from '../components/PageHeader';
import repairImage from "../assets/img/1004.png"; 
import exampleImage1 from "../assets/img/repair/repair2.jpg";
import exampleImage2 from "../assets/img/repair/repair4.jpg";
import exampleImage3 from "../assets/img/repair/repair3.jpg";
import exampleImage4 from "../assets/img/repair/repair5.jpg";
import exampleImage5 from "../assets/img/repair/repair6.jpg";
import galleryImage1 from "../assets/img/repair/gallery/a.jpg"; 
import galleryImage2 from "../assets/img/repair/gallery/b.jpg";
import galleryImage3 from "../assets/img/repair/gallery/c.jpg";
import galleryImage4 from "../assets/img/repair/gallery/d.jpg";
import galleryImage5 from "../assets/img/repair/gallery/e.jpg";
import galleryImage6 from "../assets/img/repair/gallery/f.jpg";

const RepairServices = () => {
  return (
    <>
      <PageHeader title="Repair Services" imageSrc={repairImage} />

      {/* Content Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
          Flooring Repairs by Maple Floors
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-4">
          Is your flooring showing signs of wear and tear? At Maple Floors, we specialize in professional repairs to restore your floors to their original beauty. Whether it's a minor fix or a major repair, our expert installers handle it all with precision and care.          </p>
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
      {/* Flooring Repair Services Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="h2 font-bold mb-8 text-accent text-center">
            Our Flooring Repair Services Include:
          </h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-4 mb-6">
            <li><strong>Replacing Damaged Boards:</strong> We replace scratched, cracked, or water-damaged planks in hardwood, laminate, or hybrid flooring for a seamless finish.</li>
            <li><strong>Floor Leveling:</strong> If your floors are uneven, we ensure a smooth, level subfloor before installation or repairs to prevent future issues.</li>
            <li><strong>Sanding and Refinishing:</strong> Restore the beauty of your hardwood floors with professional sanding and refinishing to eliminate surface damage.</li>
            <li><strong>Repairing Squeaky Floors:</strong> Squeaky floors are often caused by loose boards or gaps between the flooring and the subfloor. We secure loose boards or use specialized screws to tighten the subfloor, preventing long-term damage.</li>
            <li><strong>Seam Repairs:</strong> Fix gaps, lifting edges, or separating seams in vinyl or laminate flooring for a polished look.</li>
            <li><strong>Fixing Loose or Warped Flooring:</strong> We secure or replace sections of flooring that have become loose or warped due to humidity or wear.</li>
            <li><strong>Patching Holes or Dents:</strong> We fill and patch small dents or holes in wood or laminate flooring.</li>
            <li><strong>Pop-Up Floorboards Due to Expansion:</strong> We address common issues of floorboard expansion caused by moisture and temperature changes, preventing uneven surfaces.</li>
          </ul>

          {/* Causes of Pop-Up Floorboards */}
          <h3 className="text-xl font-semibold mb-4">Causes of Pop-Up Floorboards:</h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-6">
            <li><strong>Humidity and Moisture:</strong> Excess moisture causes the boards to swell, leading to buckling if not installed with proper expansion gaps.</li>
            <li><strong>Temperature Changes:</strong> Rapid shifts in weather can cause expansion and contraction of floorboards.</li>
            <li><strong>Improper Installation:</strong> Without enough space for natural movement, planks can rise or shift.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4">Our Pop-Up Floorboard Solutions:</h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-6">
            <li><strong>Inspection and Diagnosis:</strong> We inspect the floor to identify the cause of the popping boards and check for moisture damage.</li>
            <li><strong>Board Reinstallation:</strong> We carefully lift and reinstall affected floorboards, ensuring proper expansion gaps to prevent future issues.</li>
            <li><strong>Moisture Control:</strong> We address moisture sources and apply treatments to protect your floor.</li>
          </ul>
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
              src={exampleImage5}
              alt="Repair Promise"
              className="w-full h-auto object-cover rounded-lg shadow-md border border-gray-200"
            />
          </div>
        </div>
      </section>
            {/* Image Gallery Section */}
            <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-accent text-center">
            Gallery of Recent Repairs
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery Images with Hover Effect */}
            <div className="relative overflow-hidden rounded-lg shadow-md border border-gray-200">
              <img
                src={galleryImage1}
                alt="Gallery Image 1"
                className="w-full h-auto object-cover transform transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-md border border-gray-200">
              <img
                src={galleryImage2}
                alt="Gallery Image 2"
                className="w-full h-auto object-cover transform transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-md border border-gray-200">
              <img
                src={galleryImage3}
                alt="Gallery Image 3"
                className="w-full h-auto object-cover transform transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-md border border-gray-200">
              <img
                src={galleryImage4}
                alt="Gallery Image 4"
                className="w-full h-auto object-cover transform transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-md border border-gray-200">
              <img
                src={galleryImage5}
                alt="Gallery Image 5"
                className="w-full h-auto object-cover transform transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-md border border-gray-200">
              <img
                src={galleryImage6}
                alt="Gallery Image 6"
                className="w-full h-auto object-cover transform transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RepairServices;

