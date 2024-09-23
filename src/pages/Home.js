import React from "react";
import Rooms from "../components/HybridFloor";
import HeroSlider from "../components/HeroSlider";
import CardGrid from "../components/CardGrid";
import Hybrid from "../assets/img/HW8022-2.png";
import Design from "../assets/img/Design.jpg";
import Repair from "../assets/img/Repair.jpg";
import Installation from "../assets/img/Installation.jpg";
import useIntersectionObserver from "../components/useIntersectionObserver";
import HybridFloor from "../components/HybridFloor";
import { FaHardHat, FaThumbsUp, FaTools } from "react-icons/fa";
import { FaWrench, FaHammer, FaWarehouse } from "react-icons/fa";
import { Link } from "react-router-dom";
import FeatureCard from "../components/FeatureCard";
import ServiceCard from "../components/ServiceCard";
import PriceMatch from "../components/PriceMatch";

const services = [
  {
    icon: FaWrench,
    title: "Expert Repair",
    description:
      "Our experienced technicians provide top-notch repair services to restore your flooring to its original beauty.",
    link: "/repair", // Set the appropriate route
  },
  {
    icon: FaWarehouse,
    title: "Premium Supply",
    description:
      "We supply a wide range of high-quality flooring materials to meet all your design needs.",
    link: "/supply", // Set the appropriate route
  },
  {
    icon: FaHammer,
    title: "Professional Installation",
    description:
      "We specialize in flawless installations, ensuring your new floors are installed with precision and expertise.",
    link: "/install", // Set the appropriate route
  },
];
const Features = [
  {
    title: "Installation Services",
    description: `Inspecting and measuring the work area to advise cost estimates
      Advising and assisting customers in choosing the flooring type
      Removing existing flooring & preparing the work surface
      Delivering high-quality installation
      Advising clients on flooring maintenance`,
    image: Installation,
    link: "/Install",
  },
  {
    title: "Common Repair Services",
    description: `Examine underfloor humidity & subfloor moisture levels
      Subfloor levels, flattening, and cleaning of any detritus or debris
      Repairing water & moisture damaged floorings`,
    image: Repair,
    link: "/Repair",
  },
  {
    title: "Floor Design",
    description: `Advising and performing a composition of different patterns, scale work, and texture
      Specialized in different stylings:
      Neutral form, asymmetrical patterns, and curves
      Symmetrical pattern straight lines, geometrical figures, and angles`,
    image: Design,
    link: "/Supply",
  },
];

const Home = () => {
  const [setRef, isVisible] = useIntersectionObserver();
  return (
    <>
      {/* <HybridFloor/> */}
      <HeroSlider />
      <div className="m-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            link={service.link}
          />
        ))}
      </div>

      <section className="text-center py-4">
        <h1 className="text-5xl justify-center flex m-auto pt-8">
          What We Offer
        </h1>
        <h3 className="text-xl text-accent font-semibold mt-4">
          Lower Prices, Greater Value!
        </h3>
        <p className="text-gray-600 my-6 text-lg lg:max-w-4xl md:max-w-2xl max-w-md mx-auto">
          By choosing us, you're securing unbeatable prices on high-quality
          flooring! We've eliminated the middlemen, allowing you to save more by
          purchasing directly from our Flooring Manufacturer Outlet. Visit us
          today—our knowledgeable and friendly team is ready to help you find
          the perfect flooring solution for your home!
        </p>
        <Link
          to={"/Products"}
          className="px-8 py-3 m-4 font-semibold  text-white rounded-full shadow-lg transition-colors btn-primary "
        >
          EXPLORE ALL PRODUCTS
        </Link>
      </section>
      <CardGrid />

      <section
        className="bg-cover bg-center bg-fixed h-96 flex my-8 items-center justify-center text-white"
        style={{ backgroundImage: `url(${Hybrid})` }}
      >
        <div className="text-center">
          <h3 className="text-3xl font-bold">GET FREE CONSULTANCY</h3>
          <p className="text-xl my-4">
            Receive a Complimentary On-Site Consultation and Instant Quote
            Today!
          </p>
          <a
            href="tel:0490200853"
            className="btn-white text-accent uppercase font-semibold text-lg px-10 mt-6 py-3 mx-auto rounded-lg shadow-md"
          >
            Call Us
          </a>
        </div>
      </section>
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto p-6">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {Features.map((service, index) => (
              <div
                key={index}
                ref={setRef}
                className={`transition-transform duration-1000 ${
                  isVisible
                    ? "transform translate-y-0 opacity-100"
                    : "transform translate-y-14 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <FeatureCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  link={service.link}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <PriceMatch />

      {/* <Rooms/> */}
    </>
  );
};

export default Home;
