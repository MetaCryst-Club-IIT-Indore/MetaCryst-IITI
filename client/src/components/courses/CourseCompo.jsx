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
    image: "https://www.sensxpert.com/wp-content/uploads/2024/01/material-characterization-illustration-content-width-w730-h411.jpg",
    title :"Materials Characterisation",
    description : "Upcoming Course",
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D5622AQGT5BjsYfsJwA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1699953663963?e=2147483647&v=beta&t=hZL4M2DLJ8PRAnEO_aCAiLrdUfDOEIOEMqFFyD_jj4M",
    title :"Crazy Metallurgy 101",
    description : "Upcoming course",
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
               <img className="w-full h-40 object-cover" src={"https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L3JtNTU4LWVsZW1lbnRzLXdvcmQtMDEteC5qcGc.jpg"} alt="Card Image" />
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
