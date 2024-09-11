import React from "react";

const PageHeader = ({ title, imageSrc }) => {
  return (
    <section className="h-[350px] ">
      <div className="h-full relative flex justify-center items-center ">
        <div className="z-20 text-white text-center">
          <h1 className="text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6">
            {title}
          </h1>
        </div>
        <div className="absolute top-0 w-full h-full">
          <img
            className="object-cover h-full w-full"
            src={imageSrc}
            alt={title}
          />
        </div>
        <div className="absolute w-full h-full bg-black/70"></div>
      </div>
    </section>
  );
};

export default PageHeader;

