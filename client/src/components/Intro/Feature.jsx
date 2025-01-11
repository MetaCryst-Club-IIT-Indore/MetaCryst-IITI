import React from 'react';
import { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import v3 from "../../assets/v3.mp4";

const Feature = () => {
    
      const smaller_top = {
        hidden: { y: -90, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
      };
    
      const control = useAnimation();
      const [ref, inView] = useInView();
    
      useEffect(() => {
        if (inView) {
          control.start("visible");
        }
      }, [control, inView]);

      

  return (
    <div className="text-white body-font"
    style={{
        background: "radial-gradient(rgb(82 27 88) 0.5%, rgb(00 00 00)",
      }}
    >
      <div className="container mx-auto flex px-5 pt-18 pb-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <video autoPlay muted loop className='object-cover object-center rounded-xl h-[380px] w-[500px] shadow-white' src={v3}> Your Browser does not support Video formate</video>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <motion.div
          id="heading"
          className=" my-[5vh] mx-[5vh] mb-[3vh]"
          variants={smaller_top}
          animate={control}
          initial="hidden"
          whileInView="visible"
          style={{ fontFamily: "Trebuchet MS" }}
        >
          <h1  style={{ color: "rgb(199, 152, 223)" }} className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            What is Metallurgy &
            <br className="hidden lg:inline-block" />
            Materials Science ?
          </h1>
          <p className="mb-8 leading-relaxed">
          Metallurgy and Materials Science is the field that studies the properties, performance, and applications of metals, alloys, and advanced materials. It plays a crucial role in understanding the behavior of materials under different conditions, enabling innovations in industries such as aerospace, automotive, construction, and electronics. By examining the microstructure and composition of materials, experts in this field can improve durability, strength, and resistance to wear and corrosion. Metallurgy and Materials Science is essential in developing sustainable solutions and cutting-edge technologies like nanomaterials and smart alloys, helping industries evolve while addressing environmental challenges. At Metacryst, we harness these insights to create innovative, high-performance material solutions for tomorrow's world.
          </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
