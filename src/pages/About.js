import React from "react";
import aboutImage from "../assets/img/1009.png";
import aboutImage2 from "../assets/img/1077.png";
import { FaHardHat, FaThumbsUp, FaTools } from "react-icons/fa";

const About = () => {
  return (
    <>
      <section className="h-[350px] ">
        <div className="h-full relative flex justify-center items-center ">
          <div className="z-20 text-white text-center">
            <h1 className="text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6">
              About us
            </h1>
          </div>
          <div className="absolute top-0 w-full h-full">
            <img
              className="object-cover h-full w-full"
              src={aboutImage}
              alt="aboutImage"
            />
          </div>
          <div className="absolute w-full h-full bg-black/70"></div>
        </div>
      </section>
      {/* Three-Part Section */}
      <div className="my-12 mx-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* First Part */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <FaTools className="text-4xl text-accent mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold mb-2">Expert Installation</h2>
          <p className="text-gray-600">
            Our team of skilled professionals ensures that every floor is
            installed with precision and care.
          </p>
        </div>

        {/* Second Part */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <FaHardHat className="text-4xl text-accent mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold mb-2">Quality Materials</h2>
          <p className="text-gray-600">
            We use only the highest quality materials to guarantee long-lasting
            and beautiful flooring solutions.
          </p>
        </div>

        {/* Third Part */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <FaThumbsUp className="text-4xl text-accent mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold mb-2">Customer Satisfaction</h2>
          <p className="text-gray-600">
            Your satisfaction is our priority. We strive to exceed your
            expectations in every project.
          </p>
        </div>
      </div>
      {/* Two Rows and Two Columns Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* First Column */}
        <div className="flex flex-col justify-center p-6 ">
          <p className="mb-6">
            Welcome to Maple Floors! We are a team of passionate flooring
            experts dedicated to providing top-quality flooring solutions for
            your home and business. With years of experience in the industry, we
            have established ourselves as a trusted provider of flooring
            installation, repair, and maintenance services.
          </p>
          <p className="mb-6">
            Our mission is to enhance the beauty and functionality of your
            spaces through our exceptional craftsmanship and attention to
            detail. We take pride in offering a wide range of flooring options
            including hardwood, laminate, vinyl, and more, ensuring that you
            find the perfect fit for your style and needs.
          </p>
        </div>

        {/* Second Column */}
        <div className="flex justify-center items-center">
          <img
            src={aboutImage2}
            alt="Flooring Service"
            className="w-full h-auto "
          />
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* Image Column */}
        <div className="flex justify-center items-center">
          <img src={aboutImage} alt="Our Mission" className="w-full h-auto " />
        </div>

        {/* Text Column */}
        <div className="flex flex-col justify-center p-6">
          <p className="mb-6">
            At Maple Floors, customer satisfaction is our top priority. We are
            committed to delivering outstanding service and results that exceed
            your expectations. Our team works closely with you from the initial
            consultation to the final installation, ensuring a smooth and
            stress-free experience.
          </p>
          <p className="mb-6">
            Thank you for choosing Maple Floors. We look forward to transforming
            your spaces with our high-quality flooring solutions.
          </p>
        </div>
      </div>
      {/* <div className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          
                 <p className="mb-6">
                   Welcome to Maple Floors! We are a team of passionate flooring
                   experts dedicated to providing top-quality flooring solutions for
                   your home and business. With years of experience in the industry,
                   we have established ourselves as a trusted provider of flooring
                 installation, repair, and maintenance services.
               </p>
                 <p className="mb-6">
                   Our mission is to enhance the beauty and functionality of your
                   spaces through our exceptional craftsmanship and attention to
                   detail. We take pride in offering a wide range of flooring options
                   including hardwood, laminate, vinyl, and more, ensuring that you
                   find the perfect fit for your style and needs.
                 </p>
                 <p className="mb-6">
                   At Maple Floors, customer satisfaction is our top priority. We are
                  committed to delivering outstanding service and results that exceed
                   your expectations. Our team works closely with you from the initial
                  consultation to the final installation, ensuring a smooth and
                 stress-free experience.
                 </p>
                 <p className="mb-6">
                   Thank you for choosing Maple Floors. We look forward to transforming
                   your spaces with our high-quality flooring solutions.
                 </p>
               </div> */}
    </>
  );
};

export default About;
