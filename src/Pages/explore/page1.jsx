import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer2 from '../../components/footer/footer2'
import log from "../../assets/metalogo.png"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required module
import { Navigation } from 'swiper/modules';

// for applications
const application = [
  {
    title :"Aerospace",
    description : "Metallurgy helps create lightweight, high-strength alloys for aircraft and spacecraft, improving fuel efficiency and durability.",
  },
  {
    title :"Construction",
    description : "Structural steels and reinforced alloys are used in building bridges, skyscrapers, and infrastructure.",
  },
  {
    title :"Automotive",
    description : " Metallurgy advances vehicle parts by enhancing strength, corrosion resistance, and heat tolerance.",
  },
  {
    title :"Electronics",
    description : "Metallurgy enables the production of conductive metals like copper and gold for use in circuits, semiconductors, and electronic devices.",
  },
]
//for post
const data = [
  {
    image: "https://cdn.hswstatic.com/gif/gettyimages-492798423.jpg",
    description: "",
    link: ""
  },
  {
    image: "https://img.freepik.com/free-photo/futuristic-metaverse-empty-room-product-display-presentation-abstract-technology-scifi-with-neon-light-3d-background_56104-2314.jpg",

    description: "",
    link: ""
  },
  {
    image: "https://img.freepik.com/free-photo/futuristic-metaverse-empty-room-product-display-presentation-abstract-technology-scifi-with-neon-light-3d-background_56104-2314.jpg",
    description: "",
    link: ""
  },
  {
    image: "https://img.freepik.com/free-photo/futuristic-metaverse-empty-room-product-display-presentation-abstract-technology-scifi-with-neon-light-3d-background_56104-2314.jpg",
    description: "",
    link: ""
  },
]
const Page1 = () => {
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
            <img src={"https://cdn.thefabricator.com/a/its-all-about-why-0.jpg"} alt="Photo" className="w-[450px] h-[350]] object-cover rounded-lg" />
          </div>
          <div className="lg:w-2/3 p-4 mt-5">
            <h2 className="lg:text-5xl sm:text-3xl font-bold mb-5 text-neutral-300 ">About Metallurgy</h2>
            <p className="text-xl text-neutral-400">Metallurgy is the science and technology of metals,
              involving the extraction, processing, and development of metal materials.
              It includes various techniques like smelting, refining, and alloy production
              to manipulate the properties of metals for industrial and commercial use. Metallurgy
              is divided into few main branches: Mechanical Metallurgy, which deals with the mechanical
              properties and behavior of metals, Extractive metallurgy, focusing on extracting
              metals from their ores, Physical metallurgy etc. Its applications range from the creation of everyday items like
              tools and machinery to advanced uses in aerospace, construction, and electronics, making
              it crucial to modern industry.</p>
          </div>
        </div>

        {/*Middle part -- Applications */}
        <div className="text-gray-600 body-font -mt-5">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl lg:text-5xl font-medium title-font mb-4 text-neutral-300">
                Applications of Metallurgy
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-neutral-400 lg:text-lg">
              Metallurgy has diverse applications across industries, from creating everyday items like tools and machinery to advanced uses in aerospace, construction, and electronics. It plays a crucial role in producing stronger alloys, refining metals, and enhancing properties for industrial processes, contributing to innovation in automotive, defense, and energy sectors.
              </p>
            </div>
            <div className="flex flex-wrap -mt-5">
              {application.map((item, index) => (
                 <div key={index} className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                 <h2 className="text-lg sm:text-xl text-custom-purple font-medium title-font mb-2">
                 {item.title}
                 </h2>
                 <p className="leading-relaxed text-base mb-4 text-slate-300">
                  {item.description}
                 </p>
                 <a className="text-indigo-500 inline-flex items-center" href='#'>
                   Learn More
                   <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                     <path d="M5 12h14M12 5l7 7-7 7"></path>
                   </svg>
                 </a>
               </div>
              ))}
            </div>
          </div>
        </div>
        {/* swiper part for post  */}
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
        <div className=" body-font -my-3">
          <div className="container px-5 pt-3 pb-5 mx-auto">
            <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 className="flex-grow sm:pr-16 text-xl font-medium title-font text-neutral-300">
                For more information kindly refer to the given link!!
              </h1>
              { }
              <a href="https://science.howstuffworks.com/metallurgy.htm">
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

export default Page1