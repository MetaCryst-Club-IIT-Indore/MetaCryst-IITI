// src/ResponsiveCard.js
import React from "react";

const ResponsiveCard = ({ ref, image, name, description, link }) => {
  return (
    <div
      ref={ref}
      onClick={() => window.open(link, "_blank")}
      className=" cursor-pointer bg-white/10 w-full sm:w-[90%] md:w-[80%] lg:w-[60%] p-6 flex flex-col sm:flex-row items-center rounded-3xl gap-4 md:gap-8 mx-auto my-3">
      <div className="image-container w-full sm:w-1/3">
        <img
          className="w-full h-auto rounded-xl object-cover"
          src={image}
          alt={name}
        />
      </div>
      <div className="content-container w-full sm:w-2/3 flex flex-col justify-center text-white p-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
          {name}
        </h2>
        <p className="text-sm md:text-lg opacity-70">{description}</p>
      </div>
    </div>
  );
};

export default ResponsiveCard;
