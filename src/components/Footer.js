import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaWhatsapp, FaWeixin, FaInstagram, FaFacebook, FaFacebookF } from 'react-icons/fa';
import { SiReact } from 'react-icons/si';
import logoWhite from '../assets/img/logo.jpg';

const Footer = () => {
  return (
    <footer className='bg-primary py-12 text-white'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        <div className='flex flex-col items-center'>
          <a href='/' className='flex items-center mb-6'>
            <img src={logoWhite} alt='Maple Floors Logo' className='w-24 h-24 mb-4' />
            <span className='text-2xl text-accent tracking-[5px] mx-2'>Maple Floors</span>
          </a>
          <p>&copy; {new Date().getFullYear()} Maple Floors. All rights reserved.</p>
        </div>

        <div className='flex flex-col'>
          <h4 className='text-xl font-bold mb-4'>Useful Links</h4>
          <ul>
            <li><a href='/about' className='hover:text-accent'>About</a></li>
            <li><a href='/contact' className='hover:text-accent'>Contact</a></li>
            <li><a href='/privacy-policy' className='hover:text-accent'>Privacy Policy</a></li>
            <li><a href='/terms-conditions' className='hover:text-accent'>Terms & Conditions</a></li>
          </ul>
        </div>

        <div className='flex flex-col'>
          <h4 className='text-xl font-bold mb-4'>Keep In Touch</h4>
          <p className='flex items-center mb-2'>
            <FaMapMarkerAlt className='mr-2' />
            3/44 Henderson Rd, Rowville VIC 3178
          </p>
          <p className='flex items-center mb-2'>
            <FaPhoneAlt className='mr-2' />
            +61 490 200 853
          </p>
          <p className='flex items-center mb-2'>
            <FaEnvelope className='mr-2' />
            Info@maplefloors.com.au
          </p>
          <p className='flex items-center mb-2'>
            <FaEnvelope className='mr-2' />
Maplefloors@outlook.com.au
          </p>
          <p className='mb-2'>Mon – Fri: 9 am to 5 pm</p>
          <p>Saturday: 10 am to 12 pm</p>
        </div>

        <div className='flex flex-col items-center'>
          <h4 className='text-xl font-bold mb-4'>Follow Us</h4>
          <div className='flex space-x-4'>
            <a href='https://wa.me/123456789' className='hover:text-accent' aria-label="WhatsApp">
              <FaWhatsapp className='text-2xl' />
            </a>
            <a href='https://weixin.qq.com/' className='hover:text-accent' aria-label="WeChat">
              <FaWeixin className='text-2xl' />
            </a>
            <a href='https://www.instagram.com/maplefloors?utm_source=qr&igsh=NDl2ZzU3MWY2dDc=' className='hover:text-accent' aria-label="Instagram">
              <FaInstagram className='text-2xl' />
            </a>
            <a href='https://www.facebook.com/share/1gQVAXaxAGAiJqmX/?mibextid=qi2Omg' className='hover:text-accent' aria-label="Instagram">
              <FaFacebookF className='text-2xl' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
