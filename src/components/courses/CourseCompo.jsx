import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import a from "../../assets/metalogo.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css'; // Your custom styles

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from "react-router-dom";

//data
const application = [
  {
    image: "https://www.google.com/imgres?q=bgimage&imgurl=https%3A%2F%2Fpng.pngtree.com%2Fthumb_back%2Ffh260%2Fbackground%2F20200714%2Fpngtree-modern-double-color-futuristic-neon-background-image_351866.jpg&imgrefurl=https%3A%2F%2Fpngtree.com%2Ffree-backgrounds&docid=nrS8yXEy4V6zEM&tbnid=NC2I32BwnL9BPM&vet=12ahUKEwiO3t6F-JqJAxVvTGwGHcDfBJAQM3oECE0QAA..i&w=861&h=404&hcb=2&itg=1&ved=2ahUKEwiO3t6F-JqJAxVvTGwGHcDfBJAQM3oECE0QAA",
    title :"Aerospace",
    description : "Metallurgy helps create lightweight, high-strength alloys for aircraft and spacecraft, improving fuel efficiency and durability.",
  },
  {
    image: "https://www.google.com/imgres?q=bgimage&imgurl=https%3A%2F%2Fpng.pngtree.com%2Fthumb_back%2Ffh260%2Fbackground%2F20200714%2Fpngtree-modern-double-color-futuristic-neon-background-image_351866.jpg&imgrefurl=https%3A%2F%2Fpngtree.com%2Ffree-backgrounds&docid=nrS8yXEy4V6zEM&tbnid=NC2I32BwnL9BPM&vet=12ahUKEwiO3t6F-JqJAxVvTGwGHcDfBJAQM3oECE0QAA..i&w=861&h=404&hcb=2&itg=1&ved=2ahUKEwiO3t6F-JqJAxVvTGwGHcDfBJAQM3oECE0QAA",
    title :"Construction",
    description : "Structural steels and reinforced alloys are used in building bridges, skyscrapers, and infrastructure.",
  },
  {
    image: "https://www.google.com/imgres?q=bgimage&imgurl=https%3A%2F%2Fpng.pngtree.com%2Fthumb_back%2Ffh260%2Fbackground%2F20200714%2Fpngtree-modern-double-color-futuristic-neon-background-image_351866.jpg&imgrefurl=https%3A%2F%2Fpngtree.com%2Ffree-backgrounds&docid=nrS8yXEy4V6zEM&tbnid=NC2I32BwnL9BPM&vet=12ahUKEwiO3t6F-JqJAxVvTGwGHcDfBJAQM3oECE0QAA..i&w=861&h=404&hcb=2&itg=1&ved=2ahUKEwiO3t6F-JqJAxVvTGwGHcDfBJAQM3oECE0QAA",
    title :"Automotive",
    description : " Metallurgy advances vehicle parts by enhancing strength, corrosion resistance, and heat tolerance.",
  },
  {
    image: "https://www.google.com/imgres?q=bgimage&imgurl=https%3A%2F%2Fpng.pngtree.com%2Fthumb_back%2Ffh260%2Fbackground%2F20200714%2Fpngtree-modern-double-color-futuristic-neon-background-image_351866.jpg&imgrefurl=https%3A%2F%2Fpngtree.com%2Ffree-backgrounds&docid=nrS8yXEy4V6zEM&tbnid=NC2I32BwnL9BPM&vet=12ahUKEwiO3t6F-JqJAxVvTGwGHcDfBJAQM3oECE0QAA..i&w=861&h=404&hcb=2&itg=1&ved=2ahUKEwiO3t6F-JqJAxVvTGwGHcDfBJAQM3oECE0QAA",
    title :"Electronics",
    description : "Metallurgy enables the production of conductive metals like copper and gold for use in circuits, semiconductors, and electronic devices.",
  },
]

const Cardcompo = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div className=' p-5 '>
        <h1 className=' py-2 px-12 text-4xl text-white'>COURSES</h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true} // Enable navigation buttons
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Card Slides */}

        {application.map((data, index) => (
             <SwiperSlide key={index}>
             <div  className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer" onClick={() => handleNavigation('/course1')}>
               <img className="w-full h-40 object-cover" src={a} alt="Card Image" />
               <div className=" py-4">
                 <div className="font-bold text-xl mb-2 text-slate-200 tracking-wider">{data.title}</div>
                 <p className="text-gray-200 text-base italic">{data.description}</p>
               </div>
             </div>
           </SwiperSlide>
        ))}
       

       

        {/* Add as many SwiperSlides as needed */}
        
      </Swiper>
    </div>
  );
};

export default Cardcompo;
