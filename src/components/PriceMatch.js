// PriceMatchButton.js
import React, { useState } from 'react';
import PriceMatchModal from './PriceMatchModal';


const PriceMatchButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={handleButtonClick}
        className="fixed bottom-4 left-4 bg-accent text-white p-4 rounded-full shadow-lg btn-primary"
        style={{ width: '120px', height: '120px', lineHeight: 'normal' }}
      >
        <span className="text-base font-semibold">
          Price Match Guarantee
        </span>
      </button>

      <PriceMatchModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default PriceMatchButton;
