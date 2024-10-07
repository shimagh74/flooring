import React, { useState } from 'react';
import contactImage from '../assets/img/Contact.jpg';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(null); 

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

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
          setSubmissionStatus('error'); 
        }
      );

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");

    setTimeout(() => setSubmissionStatus(null), 5000);
  };

  return (
    <>
      <PageHeader title="Contact us" imageSrc={contactImage} />
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-semibold mb-8">Get in Touch</h2>
            {submissionStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                <strong className="font-bold">Success! </strong>
                <span>Your message has been sent to Maple Floors.</span>
              </div>
            )}
            {submissionStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                <strong className="font-bold">Error! </strong>
                <span>There was a problem sending your message. Please try again.</span>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
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
              <button className="w-full py-3 btn bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors">
                Submit
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-2xl text-accent mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Address</h3>
                <p>3/44 Henderson Rd, Rowville VIC 3178</p>
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
