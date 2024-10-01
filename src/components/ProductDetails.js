import React, { useContext, useState } from "react";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import { FloorContext } from "../context/FloorContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageHeader from "./PageHeader";
import hybridFloor from "../assets/img/1004.png";
import { descriptionDetails, descriptionHybrid, TechnicalData } from "../data";
import RequestQuoteModal from "./RequestQuoteModal";
import { IoCloseSharp } from "react-icons/io5";

const NextArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} slick-next`}
    style={{ ...style, display: "block", right: "10px" }}
    onClick={onClick}
  />
);

const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} slick-prev`}
    style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
    onClick={onClick}
  />
);

const ProductDetails = () => {
  const { products } = useContext(FloorContext);
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false); // Quote modal state
  const [enlargedImageIndex, setEnlargedImageIndex] = useState(null); // Image enlargement state

  const product = products.find((product) => product.id === Number(id));
  const { name, description, image, imageLg, price, imageLg2, code } = product;

  const images = [imageLg, image];

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img
            src={images[i]}
            alt={`thumbnail-${i}`}
            className="w-full h-auto"
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // Function to handle modal open for quotes
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to handle modal close
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle image enlargement modal open
  const openImageModal = (index) => {
    setEnlargedImageIndex(index); // Set index of clicked image
  };

  // Function to close image enlargement modal
  const closeImageModal = () => {
    setEnlargedImageIndex(null);
  };

  // Navigate to next image in modal
  const goToNextImage = () => {
    setEnlargedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Navigate to previous image in modal
  const goToPrevImage = () => {
    setEnlargedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <PageHeader title="" imageSrc={hybridFloor} />
      <section className="container mx-auto p-6">
        <div className="flex flex-col lg:flex-row">
          {/* Image Slider */}
          <div className="lg:w-1/2">
            <Slider {...settings}>
              {images.map((imgSrc, index) => (
                <div key={index}>
                  <img
                    src={imgSrc}
                    alt={`slide-${index}`}
                    className="w-full h-auto object-contain cursor-pointer"
                    onClick={() => openImageModal(index)} // Open modal on image click
                  />
                </div>
              ))}
            </Slider>
          </div>

          <div className="lg:w-1/2 lg:pl-10">
            <h1 className="text-3xl font-bold mb-4">{name}</h1>
            <h1 className="text-xl mb-4">Product Code: {code}</h1>
            <p className="text-gray-700 mb-6">
              {descriptionHybrid.map((item, index) => (
                <span key={index}>{item.description}</span>
              ))}
            </p>
            <div className="mt-10">
              <button
                className="btn-white btn-sm px-6 border py-2 rounded shadow"
                onClick={openModal}
              >
                Request a Quote
              </button>
              <a
                href="tel:0490200853"
                className="ml-4 btn-primary text-white px-10 py-[13px] rounded shadow"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>

        <section className="container mx-auto p-6">
          {/* Product Specifications */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Specifications</h2>
            <ul className="list-disc ml-4">
              {descriptionDetails.map((detail, index) => (
                <li key={index}>
                  <strong>{detail.name}: </strong>
                  {detail.value}
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Data */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Technical Data</h2>
            <ul className="list-disc ml-4">
              {TechnicalData.map((data, index) => (
                <li key={index}>
                  <strong>{data.name}: </strong>
                  {data.value}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </section>

      {/* Request Quote Modal */}
      <RequestQuoteModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Image Enlargement Modal */}
      {enlargedImageIndex !== null && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
          <div className="relative max-w-full max-h-full p-4 md:p-6 lg:p-8">
            {/* Image Navigation */}
            <button
              className="absolute top-1/2 left-4 text-white text-4xl"
              onClick={goToPrevImage}
            >
              &#10094; {/* Left Arrow */}
            </button>

            <img
              src={images[enlargedImageIndex]}
              alt="Enlarged"
              className="max-w-full max-h-[80vh] object-contain"
            />

            <button
              className="absolute top-1/2 right-4 text-white text-4xl"
              onClick={goToNextImage}
            >
              &#10095; {/* Right Arrow */}
            </button>

            {/* Close button */}
            <button
              className="absolute top-8 right-8  text-white px-4 py-2 text-4xl"
              onClick={closeImageModal}
            >
             <IoCloseSharp />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
