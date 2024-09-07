import React from 'react';
import Rooms from '../components/Rooms'
import HeroSlider from '../components/HeroSlider';
import CardGrid from '../components/CardGrid';
import Hybrid from '../assets/img/HW8022-2.png'
import Design from '../assets/img/Design.jpg'
import Repair  from '../assets/img/Repair.jpg'
import Installation  from '../assets/img/Installation.jpg'
import ServiceCard from '../components/ServiceCard';
import useIntersectionObserver from '../components/useIntersectionObserver';
import HybridFloor from '../components/Rooms';

const services = [
  {
    title: "Installation Services",
    description: `Inspecting and measuring the work area to advise cost estimates
      Advising and assisting customers in choosing the flooring type
      Removing existing flooring & preparing the work surface
      Delivering high-quality installation
      Advising clients on flooring maintenance`,
    image: Installation
  },
  {
    title: "Common Repair Services",
    description: `Examine underfloor humidity & subfloor moisture levels
      Subfloor levels, flattening, and cleaning of any detritus or debris
      Repairing water & moisture damaged floorings`,
    image: Repair
  },
  {
    title: "Floor Design",
    description: `Advising and performing a composition of different patterns, scale work, and texture
      Specialized in different stylings:
      Neutral form, asymmetrical patterns, and curves
      Symmetrical pattern straight lines, geometrical figures, and angles`,
    image: Design
  }
];

const Home = () => {
  const [setRef, isVisible] = useIntersectionObserver();
  return <>
  <HybridFloor/>
  {/* <HeroSlider/>
  
  <section className="text-center py-8">
  <h1 className="text-5xl justify-center flex m-auto pt-8">What We Offer</h1>
      <h3 className="text-xl text-accent font-semibold mt-4">Lower Prices, Greater Value!</h3>
      <p className="text-gray-600 mt-5 text-lg lg:max-w-4xl md:max-w-2xl max-w-md mx-auto">
      By choosing us, you're securing unbeatable prices on high-quality flooring! We've eliminated the middlemen, allowing you to save more by purchasing directly from our Flooring Manufacturer Outlet. Visit us today—our knowledgeable and friendly team is ready to help you find the perfect flooring solution for your home!
      </p>
      <button className="mt-6 px-6 py-2 btn btn-lg btn-primary mx-auto  rounded-lg shadow-md ">
        EXPLORE ALL PRODUCTS
      </button>
    </section>
    <CardGrid />


    <section className="bg-cover bg-center bg-fixed h-96 flex my-8 items-center justify-center text-white"
     style={{ backgroundImage: `url(${Hybrid})` }}>
  <div className="text-center">
    <h3 className="text-3xl font-bold">GET FREE CONSULTANCY</h3>
    <p className="text-xl mt-4">Receive a Complimentary On-Site Consultation and Instant Quote Today!</p>
    <button className="mt-6 px-6 py-2 btn btn-lg btn-white mx-auto rounded-lg shadow-md">
      ENQUIRY NOW
    </button>
  </div>
</section>
<section className="py-12 bg-gray-100">
      <div className="container mx-auto p-6">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              ref={setRef}
              className={`transition-transform duration-1000 ${isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-14 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
              />
            </div>
          ))}
        </div>
      </div>
</section> */}

 
  {/* <Rooms/> */}

  </>;
};

export default Home;
