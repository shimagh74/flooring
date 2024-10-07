import React from 'react';

const PriceMatchModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Price Match Guarantee</h2>
        <p className="mb-6">
        We offer a price match guarantee! If you find a lower price elsewhere, we will beat it by 5 percent. Contact us for more details.
        </p>
        <button
          onClick={onClose}
          className="mt-4 bg-accent btn-primary text-white py-2 px-4 rounded-lg "
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PriceMatchModal;
