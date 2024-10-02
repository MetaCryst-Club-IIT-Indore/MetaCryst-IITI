import React, { useState, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer2 from "../../components/footer/footer2";
import ScrollToTop from "../../components/scrolltop/scrolltop";
import ExploreCard from "../../components/Explore/exploreCard";
import styles1 from "./explore.module.css";
import styles from "../../components/Navbar/Navbar.module.css";
import metalogo from "../../assets/metalogo.png";
import iitilogo from "../../assets/iitilogo.png";
import photo from "../../assets/design.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// const data = [
//   {
//     name: "Domains in Materials Science",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim quia harum blanditiis nam officiis sed voluptates cumque quos, similique veniam error iure veritatis omnis mollitia id minus distinctio eveniet sequi. Error, reiciendis? Nesciunt dolorem, eum quaerat consequuntur delectus aut alias ad soluta similique ducimus, hic in libero neque. Mollitia explicabo recusandae vel corporis unde debitis ea pariatur deserunt iste omnis labore, officiis fugiat sequi temporibus! Ex maxime nesciunt tempora tempore fugit, impedit excepturi ipsum aperiam, quibusdam sed rerum non harum corporis ad. Dicta, labore dolore quisquam adipisci officia autem numquam eligendi dolores doloremque? Quod sit harum commodi cupiditate molestias.",
//     link: "https://www.google.com",
//   },
//   {
//     name: "GATE Examination",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim quia harum blanditiis nam officiis sed voluptates cumque quos, similique veniam error iure veritatis omnis mollitia id minus distinctio eveniet sequi. Error, reiciendis? Nesciunt dolorem, eum quaerat consequuntur delectus aut alias ad soluta similique ducimus, hic in libero neque. Mollitia explicabo recusandae vel corporis unde debitis ea pariatur deserunt iste omnis labore, officiis fugiat sequi temporibus! Ex maxime nesciunt tempora tempore fugit, impedit excepturi ipsum aperiam, quibusdam sed rerum non harum corporis ad. Dicta, labore dolore quisquam adipisci officia autem numquam eligendi dolores doloremque? Quod sit harum commodi cupiditate molestias.",
//     link: "https://www.google.com",
//   },
//   {
//     name: "Steel",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim quia harum blanditiis nam officiis sed voluptates cumque quos, similique veniam error iure veritatis omnis mollitia id minus distinctio eveniet sequi. Error, reiciendis? Nesciunt dolorem, eum quaerat consequuntur delectus aut alias ad soluta similique ducimus, hic in libero neque. Mollitia explicabo recusandae vel corporis unde debitis ea pariatur deserunt iste omnis labore, officiis fugiat sequi temporibus! Ex maxime nesciunt tempora tempore fugit, impedit excepturi ipsum aperiam, quibusdam sed rerum non harum corporis ad. Dicta, labore dolore quisquam adipisci officia autem numquam eligendi dolores doloremque? Quod sit harum commodi cupiditate molestias.",
//     link: "https://www.google.com",
//   },
//   {
//     name: "Steel",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim quia harum blanditiis nam officiis sed voluptates cumque quos, similique veniam error iure veritatis omnis mollitia id minus distinctio eveniet sequi. Error, reiciendis? Nesciunt dolorem, eum quaerat consequuntur delectus aut alias ad soluta similique ducimus, hic in libero neque. Mollitia explicabo recusandae vel corporis unde debitis ea pariatur deserunt iste omnis labore, officiis fugiat sequi temporibus! Ex maxime nesciunt tempora tempore fugit, impedit excepturi ipsum aperiam, quibusdam sed rerum non harum corporis ad. Dicta, labore dolore quisquam adipisci officia autem numquam eligendi dolores doloremque? Quod sit harum commodi cupiditate molestias.",
//     link: "https://www.google.com",
//   },
//   {
//     name: "Steel",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim quia harum blanditiis nam officiis sed voluptates cumque quos, similique veniam error iure veritatis omnis mollitia id minus distinctio eveniet sequi. Error, reiciendis? Nesciunt dolorem, eum quaerat consequuntur delectus aut alias ad soluta similique ducimus, hic in libero neque. Mollitia explicabo recusandae vel corporis unde debitis ea pariatur deserunt iste omnis labore, officiis fugiat sequi temporibus! Ex maxime nesciunt tempora tempore fugit, impedit excepturi ipsum aperiam, quibusdam sed rerum non harum corporis ad. Dicta, labore dolore quisquam adipisci officia autem numquam eligendi dolores doloremque? Quod sit harum commodi cupiditate molestias.",
//     link: "https://www.google.com",
//   },
//   {
//     name: "Steel",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim quia harum blanditiis nam officiis sed voluptates cumque quos, similique veniam error iure veritatis omnis mollitia id minus distinctio eveniet sequi. Error, reiciendis? Nesciunt dolorem, eum quaerat consequuntur delectus aut alias ad soluta similique ducimus, hic in libero neque. Mollitia explicabo recusandae vel corporis unde debitis ea pariatur deserunt iste omnis labore, officiis fugiat sequi temporibus! Ex maxime nesciunt tempora tempore fugit, impedit excepturi ipsum aperiam, quibusdam sed rerum non harum corporis ad. Dicta, labore dolore quisquam adipisci officia autem numquam eligendi dolores doloremque? Quod sit harum commodi cupiditate molestias.",
//     link: "https://www.google.com",
//   },
//   {
//     name: "Steel",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim quia harum blanditiis nam officiis sed voluptates cumque quos, similique veniam error iure veritatis omnis mollitia id minus distinctio eveniet sequi. Error, reiciendis? Nesciunt dolorem, eum quaerat consequuntur delectus aut alias ad soluta similique ducimus, hic in libero neque. Mollitia explicabo recusandae vel corporis unde debitis ea pariatur deserunt iste omnis labore, officiis fugiat sequi temporibus! Ex maxime nesciunt tempora tempore fugit, impedit excepturi ipsum aperiam, quibusdam sed rerum non harum corporis ad. Dicta, labore dolore quisquam adipisci officia autem numquam eligendi dolores doloremque? Quod sit harum commodi cupiditate molestias.",
//     link: "https://www.google.com",
//   },
//   {
//     name: "Steel",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim quia harum blanditiis nam officiis sed voluptates cumque quos, similique veniam error iure veritatis omnis mollitia id minus distinctio eveniet sequi. Error, reiciendis? Nesciunt dolorem, eum quaerat consequuntur delectus aut alias ad soluta similique ducimus, hic in libero neque. Mollitia explicabo recusandae vel corporis unde debitis ea pariatur deserunt iste omnis labore, officiis fugiat sequi temporibus! Ex maxime nesciunt tempora tempore fugit, impedit excepturi ipsum aperiam, quibusdam sed rerum non harum corporis ad. Dicta, labore dolore quisquam adipisci officia autem numquam eligendi dolores doloremque? Quod sit harum commodi cupiditate molestias.",
//     link: "https://www.google.com",
//   },
// ];

function Explore() {
  //   const [isResponsive, setIsResponsive] = useState(false);

  //   const handleToggle = () => {
  //     setIsResponsive((prevState) => !prevState);
  //   };

  //   const [isHovering, setIsHovering] = useState(false);

  //   const handleMouseEnter = () => {
  //     setIsHovering(true);
  //   };

  //   const handleMouseLeave = () => {
  //     setIsHovering(false);
  //   };

  //   const scrollToElement = (id) => {
  //     const element = document.getElementById(id);
  //     element.scrollTop = 0;
  //   };

  //   const ref0 = useRef(null);
  //   const ref1 = useRef(null);
  //   const ref2 = useRef(null);

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <div
        style={{
          background: "radial-gradient(rgb(82 27 88) 0.5%, rgb(00 00 00)",
        }}
      >
        <h1 className={styles1.explorename}>Explore</h1>
        {/* <div className="material-list flex flex-col lg:flex-nowrap items-center justify-center my-5 gap-5">
          {/* {data.map((item, index) => ( 
           <ExploreCard
            // key={index}
            id={1}
            name={data[0].name}
            description={data[0].description}
            link={data[0].link}
            image={photo}
            className="material-item"
          /> 
          <div
            ref={ref0}
            onClick={() => window.open(data[0].link, "_blank")}
            className=" cursor-pointer bg-white/10 w-full sm:w-[90%] md:w-[80%] lg:w-[60%] p-6 flex flex-col sm:flex-row items-center rounded-3xl gap-4 md:gap-8 mx-auto my-3">
            <div className="image-container w-full sm:w-1/3">
              <img
                className="w-full h-auto rounded-xl object-cover"
                src={photo}
                alt={data[0].name}
              />
            </div>
            <div className="content-container w-full sm:w-2/3 flex flex-col justify-center text-white p-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
                {data[0].name}
              </h2>
              <p className="text-sm md:text-lg opacity-70">
                {data[0].description}
              </p>
            </div>
          </div>
          <div
            ref={ref1}
            onClick={() => window.open(data[1].link, "_blank")}
            className=" cursor-pointer bg-white/10 w-full sm:w-[90%] md:w-[80%] lg:w-[60%] p-6 flex flex-col sm:flex-row items-center rounded-3xl gap-4 md:gap-8 mx-auto my-3">
            <div className="image-container w-full sm:w-1/3">
              <img
                className="w-full h-auto rounded-xl object-cover"
                src={photo}
                alt={data[1].name}
              />
            </div>
            <div className="content-container w-full sm:w-2/3 flex flex-col justify-center text-white p-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
                {data[1].name}
              </h2>
              <p className="text-sm md:text-lg opacity-70">
                {data[1].description}
              </p>
            </div>
          </div>
          <div
            ref={ref2}
            onClick={() => window.open(data[2].link, "_blank")}
            className=" cursor-pointer bg-white/10 w-full sm:w-[90%] md:w-[80%] lg:w-[60%] p-6 flex flex-col sm:flex-row items-center rounded-3xl gap-4 md:gap-8 mx-auto my-3">
            <div className="image-container w-full sm:w-1/3">
              <img
                className="w-full h-auto rounded-xl object-cover"
                src={photo}
                alt={data[2].name}
              />
            </div>
            <div className="content-container w-full sm:w-2/3 flex flex-col justify-center text-white p-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
                {data[2].name}
              </h2>
              <p className="text-sm md:text-lg opacity-70">
                {data[2].description}
              </p>
            </div>
          </div>
          {/* ))} 
        </div> */}
        <div className="flex justify-center items-center mt-20 mb-5">
          <div className="grid grid-cols-2 gap-8">
            <div
              className="bg-blue-500 text-white text-center rounded-lg p-8 shadow-lg cursor-pointer transition duration-300 hover:bg-blue-700 h-[209px] w-[390px]"
              onClick={() => handleNavigation('/metallurgy')}
            >
              <h2 className="text-4xl font-bold mt-5 ">Metallurgy</h2>
            </div>
            <div
              className="bg-green-500 text-white text-center rounded-lg p-8 shadow-lg cursor-pointer transition duration-300 hover:bg-green-700"
              onClick={() => handleNavigation('/material')}
            >
              <h2 className="text-4xl font-bold mt-5 ">Material Science</h2>

            </div>
            <div
              className="bg-red-500 text-white text-center rounded-lg p-8 shadow-lg cursor-pointer transition duration-300 hover:bg-red-700 h-[209px] w-[390px]"
              onClick={() => handleNavigation('/gate')}
            >
              <h2 className="text-4xl font-bold mt-4 ">GATE <br />Examination</h2>

            </div>
            <div
              className="bg-yellow-500 text-white text-center rounded-lg p-8 shadow-lg cursor-pointer transition duration-300 hover:bg-yellow-700"
              onClick={() => handleNavigation('/steel')}
            >
              <h2 className="text-4xl font-bold mt-5 ">Steel</h2>

            </div>
          </div>
        </div>

      </div>
      <Footer2 />
    </>
  );
}

export default Explore;
