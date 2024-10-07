import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const RequestQuoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [submissionStatus, setSubmissionStatus] = useState(null); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;
    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      message: message,
    };

    emailjs
      .send(
        "service_dh0uccb",            // Service ID
        "template_dizzxye",           // Template ID
        templateParams,
        "jQej3RBnsnfGP5qRV"           // Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmissionStatus('success'); 
        },
        (error) => {
          console.log("FAILED...", error);
          setSubmissionStatus('failure'); 
        }
      );


    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleClose = () => {
    setSubmissionStatus(null); 
    onClose(); 
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 md:p-8 rounded-lg w-full max-w-lg mx-4 sm:mx-auto">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Enquire Now</h2>
        {submissionStatus === 'success' && (
          <div className="bg-green-100 text-green-800 p-3 mb-4 rounded">
            Your message has been sent successfully!
          </div>
        )}
        {submissionStatus === 'failure' && (
          <div className="bg-red-100 text-red-800 p-3 mb-4 rounded">
            Failed to send your message. Please try again.
          </div>
        )}

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
              onClick={handleClose} 
            >
              Close
            </button>
            <button
              type="submit"
              className="btn-primary btn-sm text-white px-6 md:py-2 py-1 rounded-lg shadow-md bg-accent"
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
