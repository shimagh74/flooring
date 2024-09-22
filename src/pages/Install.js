import React from "react";
import PageHeader from "../components/PageHeader";
import installImage from "../assets/img/HW8022-2.png";
import exampleImage1 from "../assets/img/install/install2.jpg";
import exampleImage2 from "../assets/img/install/install4.jpg";
import exampleImage3 from "../assets/img/install/install3.jpg";

const Install = () => {
  return (
    <>
      <PageHeader title="Install" imageSrc={installImage} />

      {/* Content Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl  font-bold mb-6 text-gray-800 h2">
            Professional Installation Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-4">
            Our team of skilled professionals ensures that every floor is
            installed with precision and care. From the initial consultation to
            the final installation, we handle every aspect of the flooring
            process to ensure your complete satisfaction.
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-4">
            We use the highest quality materials and the latest installation
            techniques to deliver a flawless finish. Whether you're looking to
            install hardwood, laminate, vinyl, or tile flooring, we have the
            expertise to make your flooring dreams a reality.
          </p>
          <p className="text-lg md:text-xl text-gray-600">
            Contact us today to schedule a consultation and learn more about our
            professional flooring installation services.
          </p>
        </div>
      </section>

      {/* Recent Installations Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-accent h2 text-center">
            Our Recent Installations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-2">
              <img
                src={exampleImage1}
                alt="Example Flooring 1"
                className="w-full h-auto object-cover rounded-lg shadow-md border border-gray-200"
              />
            </div>
            <div className="grid grid-cols-1 gap-6">
              <img
                src={exampleImage2}
                alt="Example Flooring 2"
                className="w-full h-auto object-cover rounded-lg shadow-md border border-gray-200"
              />
              <img
                src={exampleImage3}
                alt="Example Flooring 3"
                className="w-full h-auto object-cover rounded-lg shadow-md border border-gray-200"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
  <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
    {/* Left Side - Text */}
    <div className="md:w-full p-6">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
        Transform Your Space with Our Expertise
      </h2>
      <p className="text-gray-600 mb-6">
        Our flooring installation service is the key to transforming your space. With expert craftsmen and a commitment to quality, we ensure your new flooring is installed flawlessly. Whether it’s hardwood, engineered, laminate, hybrid, or vinyl, our skilled team takes care of every detail, from precise measurements to flawless finishing touches.
      </p>
    </div>
  </div>
</section>

      {/* Our Momentum Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
          {/* Left Side - Text */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
              Our Installation Promise
            </h2>
            <h3 className="text-xl md:text-2xl font-medium mb-4 text-accent">
              Precision, Care, and Excellence
            </h3>
            <p className="text-gray-600 mb-6">
              We are committed to providing top-notch installation services that
              ensure your flooring is not only beautiful but also durable and
              long-lasting.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Expert Installation Techniques</li>
              <li>Attention to Detail</li>
              <li>Timely and Professional Service</li>
              <li>100% Satisfaction Guarantee</li>
            </ul>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2 p-6 flex justify-center">
            <img
              src={exampleImage1} // Replace this with your actual image path
              alt="Installation Guarantee"
              className="w-full h-auto object-cover rounded-lg shadow-md border border-gray-200"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Install;
