import Navbar from '../../components/Navbar/Navbar'
import Footer2 from '../../components/footer/footer2'
import log from "../../assets/metalogo.png"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required module
import { Navigation } from 'swiper/modules';


const data = [
  {
    image: "https://img.freepik.com/free-photo/futuristic-metaverse-empty-room-product-display-presentation-abstract-technology-scifi-with-neon-light-3d-background_56104-2314.jpg",
    description: "adads",
    link: "asdasda"
  },
  {
    image: "src\assets\shreyans.jpg",
    description: "adads",
    link: "asdasda"
  },
  {
    image: "src\assets\shreyans.jpg",
    description: "adads",
    link: "asdasda"
  },
  {
    image: "src\assets\shreyans.jpg",
    description: "adads",
    link: "asdasda"
  },
  {
    image: "src\assets\shreyans.jpg",
    description: "adads",
    link: "asdasda"
  }, {
    image: "src\assets\shreyans.jpg",
    description: "adads",
    link: "asdasda"
  },
  {
    image: "src\assets\shreyans.jpg",
    description: "adads",
    link: "asdasda"
  },
]

const Page2 = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          background: "radial-gradient(rgb(82 27 88) 0.5%, rgb(00 00 00)",
        }}
      >
        {/* upper section -- About Metallurgy  */}
        <div className="flex flex-wrap justify-center  mt-5 mx-2">
          <div className="lg:w-1/3  p-4">
            <img src={log} alt="Photo" className="w-[450px] h-[350]] object-cover rounded-lg" />
          </div>
          <div className="lg:w-2/3 p-4 mt-5">
            <h2 className="lg:text-5xl sm:text-3xl font-bold mb-5 text-neutral-300 ">About Materials</h2>
            <p className="text-xl text-neutral-400">Metallurgy is the science and technology of metals,
              involving the extraction, processing, and development of metal materials.
              It encompasses various techniques like smelting, refining, and alloy production
              to manipulate the properties of metals for industrial and commercial use. Metallurgy
              is divided into two main branches: physical metallurgy, which deals with the mechanical
              properties and behavior of metals, and extractive metallurgy, focusing on extracting
              metals from their ores. Its applications range from the creation of everyday items like
              tools and machinery to advanced uses in aerospace, construction, and electronics, making
              it crucial to modern industry.</p>
          </div>
        </div>

        {/* swiper */}
        <div className='pr-2 pl-2 mr-20 ml-20'>
          <h2 className='text-center lg:text-5xl sm:text-3xl text-neutral-400 mb-7 '>Activities</h2>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            
              {data.map((slide, index) => (
                <SwiperSlide>
                  <div key={index} className='flex justify-center items-center mb-5'>
                  <div  className='relative w-[720px] h-[432px] overflow-hidden rounded-lg group '>
                    <img
                      src={slide.image} alt="image"
                      className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 '
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-lg mb-2">{slide.description}</p>
                      
                    </div>
                  </div>
                  </div>
                </SwiperSlide>
              ))}
         
          </Swiper>

        </div>

        {/* lower part -- link */}
        <div className=" body-font mt-3">
          <div className="container px-5 pt-3 pb-5 mx-auto">
            <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 className="flex-grow sm:pr-16 text-xl font-medium title-font text-neutral-300">
                For more information kindly refer to the given link!!
              </h1>
              {/* add link here */}
              <a href="">
                <button className="flex-shrink-0 text-white bg-custom-purple border-0 py-2 px-8 focus:outline-none hover:bg-purple-bg rounded text-lg mt-10 sm:mt-0">
                  Learn More..
                </button></a>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  )
}

export default Page2