import React from "react";
import aboutImage from "../assets/img/1009.png";
import PageHeader from "../components/PageHeader";
import exampleImage1 from "../assets/img/install/install2.jpg";
import exampleImage2 from "../assets/img/install/install4.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      {/* Page Header */}
      <PageHeader title="About Us" imageSrc={aboutImage} />

      {/* About Section */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column (Text) */}
          <div className="space-y-6 px-6 md:px-12">
            <h2 className="text-3xl font-bold text-gray-800 font-primary">Who We Are</h2>
            <p className="text-lg text-gray-600">
              Welcome to Maple Floors! We are a team of passionate flooring
              experts dedicated to providing top-quality flooring solutions for
              your home and business. With years of experience in the industry,
              we have established ourselves as a trusted provider of flooring
              installation, repair, and maintenance services.
            </p>
            <p className="text-lg text-gray-600">
              Our mission is to enhance the beauty and functionality of your
              spaces through exceptional craftsmanship and attention to detail.
              We take pride in offering a wide range of flooring options
              including hardwood, laminate, vinyl, and more, ensuring that you
              find the perfect fit for your style and needs.
            </p>
          </div>

          {/* Right Column (Image) */}
          <div className="relative group">
            <img
              src={exampleImage1}
              alt="Flooring Service"
              className="w-full h-full object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column (Image) */}
          <div className="relative group">
            <img
              src={exampleImage2}
              alt="Our Mission"
              className="w-full h-full object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
            />
          </div>

          {/* Right Column (Text) */}
          <div className="space-y-6 px-6 md:px-12">
            <h2 className="text-3xl font-bold text-gray-800 font-primary">Our Mission</h2>
            <p className="text-lg text-gray-600">
              At Maple Floors, customer satisfaction is our top priority. We are
              committed to delivering outstanding service and results that exceed
              your expectations. Our team works closely with you from the initial
              consultation to the final installation, ensuring a smooth and
              stress-free experience.
            </p>
            <p className="text-lg text-gray-600">
              Thank you for choosing Maple Floors. We look forward to transforming
              your spaces with our high-quality flooring solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 bg-accent text-white text-center">
        <div className="container mx-auto">
          <h2 className="md:text-4xl text-2xl font-semibold mb-4">Ready to Upgrade Your Floors?</h2>
          <p className="text-lg mb-6">
            Contact us today for a free consultation and let us help you find the perfect flooring solution.
          </p>
          <Link
            to="/contact"
            className="px-8 py-3  font-semibold rounded-full shadow-lg transition-colors btn-white"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
