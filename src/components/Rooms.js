import React, { useContext } from 'react';
import { RoomContext } from '../context/RoomContext';
import Room from '../components/Room';
import hybridFloor from "../assets/img/1009.png";

const HybridFloor = () => {
  const { rooms } = useContext(RoomContext);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-0">
        {/* Top Section: What Is Hybrid Flooring? */}
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

        {/* Product Listing Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">7mm Aurora Collection</h2>
          <p className="text-lg max-w-xl mb-8">
            The Aurora Series is a premium SPC waterproof hybrid flooring that incorporates ceramic coating, making 
            it more scratch-resistant compared to regular SPC flooring.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {rooms.map((room) => (
               <div className="border rounded-lg p-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
               <img src={room.image} alt={room.name} className="w-full h-64 object-cover mb-2" />
               <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
               {/* <p className="text-lg font-semibold mt-2">{room.price}</p> */}
             </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HybridFloor;
