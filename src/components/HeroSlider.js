import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper';
import img1 from "../assets/img/3033.png";
import img2 from "../assets/img/HW8022-1.jpg";
import img3 from "../assets/img/HW8101.png";

const slides = [
  {
    title: 'Installation',
    bg: img1,
    btnText: 'View Installation',
    link: '/Install'
  },
  {
    title: 'Repair',
    bg: img2,
    btnText: 'View Repair',
    link: '/Repair'
  },
  {
    title: 'Supply',
    bg: img3,
    btnText: 'View Supply',
    link: '/Products'
  },
];

const HeroSlider = () => {
  return (
    <Swiper modules={[EffectFade, Autoplay]}
      effect={'fade'}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      className="heroSlider h-[600px] lg:h-[860px] bg-black">
      {slides.map((slide, index) => {
        const { title, bg, btnText, link } = slide;
        return (
          <SwiperSlide className="h-full relative flex justify-center items-center" key={index}>
            <div className="z-20 text-white text-center">
              <div className="uppercase font-tertiary tracking-[6px] mb-5">
                Flooring specialists in Melbourne
              </div>
              <h1 className="text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6">
                {title}
              </h1>
              <a href={link} className="btn btn-lg btn-primary max-w-[220px] mx-auto">{btnText}</a>
            </div>
            <div className="absolute top-0 w-full h-full">
              <img className="object-cover h-full w-full" src={bg} alt={title} />
            </div>
            <div className="absolute w-full h-full bg-black/70"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
