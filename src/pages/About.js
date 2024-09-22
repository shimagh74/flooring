import React from "react";
import aboutImage from "../assets/img/1009.png";
import aboutImage2 from "../assets/img/1077.png";
import PageHeader from "../components/PageHeader";

const About = () => {
  return (
    <>
      <PageHeader title="About us" imageSrc={aboutImage} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 md:text-lg">
        {/* First Column */}
        <div className="flex flex-col justify-center md:p-16 p-6">
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
        <div className="flex justify-center items-center ">
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
        <div className="flex flex-col justify-center md:p-16 p-6">
          <p className="mb-6 ">
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
