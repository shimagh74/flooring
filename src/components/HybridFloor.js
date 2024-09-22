import React, { useContext } from 'react';
import { FloorContext } from '../context/FloorContext';
import { Link } from 'react-router-dom';
import qrCodeImage from '../assets/img/qrCodeImage.jpeg'

const HybridFloor = () => {
  const { products } = useContext(FloorContext);

  return (
    <>      

   
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-semibold mb-4">What Is Hybrid Flooring?</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Hybrid flooring represents a cutting-edge innovation in the world of interior design and flooring solutions. 
            Combining the best features of laminate and luxury vinyl flooring, hybrid flooring offers a remarkable blend 
            of durability, aesthetics, and versatility.
          </p>
        </div>

        {/* Image Gallery Section */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          <img src={hybridFloor} alt="Hybrid Flooring 1" className="w-full h-auto" />
          <img src={hybridFloor} alt="Hybrid Flooring 2" className="w-full h-auto" />
          <img src={hybridFloor} alt="Hybrid Flooring 3" className="w-full h-auto" />
        </div> */}
<section className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-8 text-center">
        You can use the 3D link or QR code to see 3D products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center">
        {/* Button */}
        <div className="flex justify-center mb-4 md:mb-0">
          <a
            href="https://vr.3d66.com/vr/index_detail_5086588.asp" // Replace with your 3D link
            target="_blank"
            rel="noopener noreferrer"
            className=" text-white px-6 py-3 rounded-lg shadow-lg btn-secondary transition duration-300 ease-in-out"
          >
            View 3D Product
          </a>
        </div>

        {/* QR Code */}
        <div className="flex justify-center">
          <img
            src={qrCodeImage}
            alt="QR Code"
            className="w-48 h-48 object-cover border border-gray-300 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
        {/* Product Listing Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
               <Link to={`/products/${product.id}`}>
                <div className="border rounded-lg p-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
               <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-2" />
               <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
               {/* <p className="text-lg font-semibold mt-2">{product.price}</p> */}
             </div>
               </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HybridFloor;
