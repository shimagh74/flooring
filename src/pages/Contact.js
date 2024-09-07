import React from 'react';
import contact from '../assets/img/Contact.jpg';
import { FaMapMarkerAlt, FaClock, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      {/* Header Section */}
      <section className='h-[350px]'>
        <div className="h-full relative flex justify-center items-center">
          <div className="z-20 text-white text-center">
            <h1 className="text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6">
              Contact Us
            </h1>
          </div>
          <div className="absolute top-0 w-full h-full">
            <img className="object-cover h-full w-full" src={contact} alt="contact" />
          </div>
          <div className="absolute w-full h-full bg-black/70"></div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-semibold mb-8">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="name">Your Name *</label>
                <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" type="text" id="name" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="phone">Your Phone *</label>
                <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" type="tel" id="phone" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">Your Email *</label>
                <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" type="email" id="email" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" id="message" rows="5"></textarea>
              </div>
              <button className="w-full py-3 mt-6 px-6  btn btn-lg btn-primary mx-autoshadow-md  text-white font-semibold rounded-lg  transition-colors">Submit</button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-2xl text-accent mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Address</h3>
                <p>1/177 Fairbairn Road, Sunshine West, VIC 3020</p>
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
                <p>info@greatfloor.com.au</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaPhone className="text-2xl text-accent mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Phone</h3>
                <p>(03) 8529 0646 / 0477 480 009</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
