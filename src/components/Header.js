import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logodark from "../assets/img/logo-dark.svg";
import logolight from "../assets/img/logo-white.svg";
import { navMenu } from "../data";


const Header = () => {
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });
  return (
    <header className={`${header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"} fixed z-50 w-full transition-all duration-300`}
    >
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
        <a href="/">
          {header ? (
            // <img className="w-[160px]" src={logodark} />
            <span className="w-[260px] text-2xl text-accent tracking-[5px] ">Maple Floors</span>
          ) : (
            <span className="w-[260px] text-2xl text-accent tracking-[5px] ">Maple Floors</span>
            // <img className="w-[160px]" src={logolight} />
          )}
        </a>
        <nav
          className={`${header ? "text-primary" : "text-accent"} flex gap-x-4 font-bold font-tertiary tracking-[2px] text-[16px] items-center uppercase lg:gap-x-8`}
        >
          {navMenu.map((menu, i) => (
            <Link key={i} to={menu.path} className="hover:text-accent transition">
              {menu.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
