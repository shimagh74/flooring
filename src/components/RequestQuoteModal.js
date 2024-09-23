// src/components/RequestQuoteModal.js
import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

const RequestQuoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    productTitle: '',
    size: '',
    grading: '',
    quantity: '',
    suburb: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // try {
    //   const result = await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID');
    //   console.log('Email sent successfully:', result);
    //   alert('Your request has been sent successfully!');
    //   onClose(); // Close the modal after successful submission
    // } catch (error) {
    //   console.error('Error sending email:', error);
    //   alert('Failed to send your request. Please try again.');
    // }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 md:p-8 rounded-lg w-full max-w-lg mx-4 sm:mx-auto">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Enquire Now</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="block text-sm font-medium mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border border-gray-300 px-4 md:py-2 py-1 rounded-lg placeholder-gray-400 text-gray-800 focus:outline-none focus:border-primary"
              required
            />
          </div>

          <div className="mb-2">
            <label className="block text-sm font-medium mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 px-4 md:py-2 py-1 rounded-lg placeholder-gray-400 text-gray-800 focus:outline-none focus:border-primary"
              required
            />
          </div>

          <div className="mb-2">
            <label className="block text-sm font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full border border-gray-300 px-4 md:py-2 py-1 rounded-lg placeholder-gray-400 text-gray-800 focus:outline-none focus:border-primary"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="w-full border border-gray-300 px-4 md:py-2 py-1 rounded-lg placeholder-gray-400 text-gray-800 focus:outline-none focus:border-primary"
              required
            />
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="btn-white btn-sm px-6 border md:py-2 py-1 rounded-lg shadow-md border-gray-300 hover:bg-gray-100"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary btn-sm text-white px-6 md:py-2 py-1 rounded-lg shadow-md bg-accent "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestQuoteModal;
