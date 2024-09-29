import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navMenu } from "../data";
import { FaTimes, FaBars } from "react-icons/fa";
import whiteLogo from "../assets/img/whiteLogo.png";

const Header = () => {
  const [header, setHeader] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  }, []);

  return (
    <header
      className={`${
        header ? "bg-white py-5 shadow-lg" : "bg-transparent py-4"
      } fixed z-50 w-full transition-all duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="/">
          <img
            src={whiteLogo}
            alt="whiteLogo"
            className="w-[180px]"
          />
        </a>

        {/* Hamburger menu for mobile */}
        <div className="lg:hidden z-50">
          <button
            className="text-2xl focus:outline-none text-accent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop navigation */}
        <nav
          className={`${
            header ? "text-primary" : "text-accent"
          } hidden lg:flex gap-x-8 font-bold font-tertiary tracking-[2px] text-[16px] items-center uppercase`}
        >
          {navMenu.map((menu, i) => (
            <Link
              key={i}
              to={menu.path}
              className="hover:text-accent transition"
            >
              {menu.title}
            </Link>
          ))}
        </nav>

        {/* Mobile navigation */}
        <div
          className={`${
            isMobileMenuOpen ? "left-0" : "-left-full"
          } lg:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col justify-center items-center gap-y-8 transition-all duration-300`}
        >
          {navMenu.map((menu, i) => (
            <Link
              key={i}
              to={menu.path}
              className="text-white text-2xl font-bold uppercase"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {menu.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
