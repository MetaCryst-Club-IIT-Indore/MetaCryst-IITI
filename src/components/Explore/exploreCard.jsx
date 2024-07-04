// src/ResponsiveCard.js
import React from 'react';

const ResponsiveCard = ({ image, name, description, link }) => {
  return (
    <div onClick={() => window.open(link, '_blank')} className=' cursor-pointer bg-white/10 w-full sm:w-[90%] md:w-[80%] lg:w-[60%] p-6 flex flex-col sm:flex-row items-center rounded-3xl gap-4 md:gap-8 mx-auto my-5'>
      <div className="image-container w-full sm:w-1/3">
        <img className='w-full h-auto rounded-xl object-cover' src="../../src/assets/design.png" alt={name} />
      </div>
      <div className='content-container w-full sm:w-2/3 flex flex-col items-start justify-center text-white p-4'>
        <h2 className='text-2xl md:text-3xl items-start-center font-bold mb-2 '>{name}</h2>
        <p className='text-sm md:text-lg opacity-70'>{description}</p>
      </div>
    </div>
  );
};

export default ResponsiveCard;
