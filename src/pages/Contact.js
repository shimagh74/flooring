import React, { useState } from 'react';
import contactImage from '../assets/img/1009.png';
import { FaMapMarkerAlt, FaClock, FaEnvelope, FaPhone } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
// import emailjs from 'emailjs-com';

const Contact = () => {
  // State Management
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Handlers for Input Changes
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  // Handle Form Submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const templateParams = {
  //     from_name: name,
  //     from_email: email,
  //     from_phone: phone,
  //     message: message,
  //   };

  //   emailjs
  //     .send(
  //       "service_rt7yacd",            // Service ID
  //       "template_ywnqkln",           // Template ID
  //       templateParams,
  //       "jQej3RBnsnfGP5qRV"           // Public Key
  //     )
  //     .then(
  //       (response) => {
  //         console.log("SUCCESS!", response.status, response.text);
  //       },
  //       (error) => {
  //         console.log("FAILED...", error);
  //       }
  //     );

  //   // Reset the form fields after submission
  //   setName("");
  //   setEmail("");
  //   setPhone("");
  //   setMessage("");
  // };

  return (
    <>
      <PageHeader title="Contact us" imageSrc={contactImage} />

      {/* Contact Form & Info Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-semibold mb-8">Get in Touch</h2>
            {/* <form className="space-y-6" onSubmit={handleSubmit}> */}
            <form className="space-y-2" onSubmit={()=>console.log}>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="name">Your Name *</label>
                <input 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" 
                  type="text" 
                  id="name" 
                  value={name}
                  onChange={handleNameChange}
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="phone">Your Phone *</label>
                <input 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" 
                  type="tel" 
                  id="phone" 
                  value={phone}
                  onChange={handlePhoneChange}
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">Your Email *</label>
                <input 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" 
                  type="email" 
                  id="email" 
                  value={email}
                  onChange={handleEmailChange}
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                <textarea 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" 
                  id="message" 
                  rows="5" 
                  value={message}
                  onChange={handleMessageChange}
                ></textarea>
              </div>
              <button className="w-full py-3 btn  bg-accent text-white font-semibold rounded-lg hover:bg-accent transition-colors">
                Submit
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 ">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-2xl text-accent mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Address</h3>
                <p>3/44 Henderson Rd, Rowville VIC 3178</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaClock className="text-2xl text-accent mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Opening Hours</h3>
                <p>Mon – Fri: 9AM to 5PM<br />Saturday: 10AM to 12PM</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaEnvelope className="text-2xl text-accent mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-1">E-mail</h3>
                <p>Info@maplefloors.com.au</p>
                <p>Maplefloors@outlook.com.au</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaPhone className="text-2xl text-accent mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Phone</h3>
                <p>+61 490 200 853</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
