import React, { useState, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/footer";
import ScrollToTop from "../../components/scrolltop/scrolltop";
import ExploreCard from "../../components/Explore/exploreCard";
import styles1 from "./explore.module.css";
import styles from "../../components/Navbar/Navbar.module.css";
import metalogo from "../../assets/metalogo.png";
import iitilogo from "../../assets/iitilogo.png";
import photo from "../../assets/design.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const data = [
  {
    name: "Steel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim quia harum blanditiis nam officiis sed voluptates cumque quos, similique veniam error iure veritatis omnis mollitia id minus distinctio eveniet sequi. Error, reiciendis? Nesciunt dolorem, eum quaerat consequuntur delectus aut alias ad soluta similique ducimus, hic in libero neque. Mollitia explicabo recusandae vel corporis unde debitis ea pariatur deserunt iste omnis labore, officiis fugiat sequi temporibus! Ex maxime nesciunt tempora tempore fugit, impedit excepturi ipsum aperiam, quibusdam sed rerum non harum corporis ad. Dicta, labore dolore quisquam adipisci officia autem numquam eligendi dolores doloremque? Quod sit harum commodi cupiditate molestias.",
    link: "https://www.google.com",
  },
  {
    name: "Steel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim quia harum blanditiis nam officiis sed voluptates cumque quos, similique veniam error iure veritatis omnis mollitia id minus distinctio eveniet sequi. Error, reiciendis? Nesciunt dolorem, eum quaerat consequuntur delectus aut alias ad soluta similique ducimus, hic in libero neque. Mollitia explicabo recusandae vel corporis unde debitis ea pariatur deserunt iste omnis labore, officiis fugiat sequi temporibus! Ex maxime nesciunt tempora tempore fugit, impedit excepturi ipsum aperiam, quibusdam sed rerum non harum corporis ad. Dicta, labore dolore quisquam adipisci officia autem numquam eligendi dolores doloremque? Quod sit harum commodi cupiditate molestias.",
    link: "https://www.google.com",
  },
  {
    name: "Steel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim quia harum blanditiis nam officiis sed voluptates cumque quos, similique veniam error iure veritatis omnis mollitia id minus distinctio eveniet sequi. Error, reiciendis? Nesciunt dolorem, eum quaerat consequuntur delectus aut alias ad soluta similique ducimus, hic in libero neque. Mollitia explicabo recusandae vel corporis unde debitis ea pariatur deserunt iste omnis labore, officiis fugiat sequi temporibus! Ex maxime nesciunt tempora tempore fugit, impedit excepturi ipsum aperiam, quibusdam sed rerum non harum corporis ad. Dicta, labore dolore quisquam adipisci officia autem numquam eligendi dolores doloremque? Quod sit harum commodi cupiditate molestias.",
    link: "https://www.google.com",
  },
  {
    name: "Steel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim quia harum blanditiis nam officiis sed voluptates cumque quos, similique veniam error iure veritatis omnis mollitia id minus distinctio eveniet sequi. Error, reiciendis? Nesciunt dolorem, eum quaerat consequuntur delectus aut alias ad soluta similique ducimus, hic in libero neque. Mollitia explicabo recusandae vel corporis unde debitis ea pariatur deserunt iste omnis labore, officiis fugiat sequi temporibus! Ex maxime nesciunt tempora tempore fugit, impedit excepturi ipsum aperiam, quibusdam sed rerum non harum corporis ad. Dicta, labore dolore quisquam adipisci officia autem numquam eligendi dolores doloremque? Quod sit harum commodi cupiditate molestias.",
    link: "https://www.google.com",
  },
  {
    name: "Steel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim quia harum blanditiis nam officiis sed voluptates cumque quos, similique veniam error iure veritatis omnis mollitia id minus distinctio eveniet sequi. Error, reiciendis? Nesciunt dolorem, eum quaerat consequuntur delectus aut alias ad soluta similique ducimus, hic in libero neque. Mollitia explicabo recusandae vel corporis unde debitis ea pariatur deserunt iste omnis labore, officiis fugiat sequi temporibus! Ex maxime nesciunt tempora tempore fugit, impedit excepturi ipsum aperiam, quibusdam sed rerum non harum corporis ad. Dicta, labore dolore quisquam adipisci officia autem numquam eligendi dolores doloremque? Quod sit harum commodi cupiditate molestias.",
    link: "https://www.google.com",
  },
  {
    name: "Steel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim quia harum blanditiis nam officiis sed voluptates cumque quos, similique veniam error iure veritatis omnis mollitia id minus distinctio eveniet sequi. Error, reiciendis? Nesciunt dolorem, eum quaerat consequuntur delectus aut alias ad soluta similique ducimus, hic in libero neque. Mollitia explicabo recusandae vel corporis unde debitis ea pariatur deserunt iste omnis labore, officiis fugiat sequi temporibus! Ex maxime nesciunt tempora tempore fugit, impedit excepturi ipsum aperiam, quibusdam sed rerum non harum corporis ad. Dicta, labore dolore quisquam adipisci officia autem numquam eligendi dolores doloremque? Quod sit harum commodi cupiditate molestias.",
    link: "https://www.google.com",
  },
  {
    name: "Steel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim quia harum blanditiis nam officiis sed voluptates cumque quos, similique veniam error iure veritatis omnis mollitia id minus distinctio eveniet sequi. Error, reiciendis? Nesciunt dolorem, eum quaerat consequuntur delectus aut alias ad soluta similique ducimus, hic in libero neque. Mollitia explicabo recusandae vel corporis unde debitis ea pariatur deserunt iste omnis labore, officiis fugiat sequi temporibus! Ex maxime nesciunt tempora tempore fugit, impedit excepturi ipsum aperiam, quibusdam sed rerum non harum corporis ad. Dicta, labore dolore quisquam adipisci officia autem numquam eligendi dolores doloremque? Quod sit harum commodi cupiditate molestias.",
    link: "https://www.google.com",
  },
  {
    name: "Steel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim quia harum blanditiis nam officiis sed voluptates cumque quos, similique veniam error iure veritatis omnis mollitia id minus distinctio eveniet sequi. Error, reiciendis? Nesciunt dolorem, eum quaerat consequuntur delectus aut alias ad soluta similique ducimus, hic in libero neque. Mollitia explicabo recusandae vel corporis unde debitis ea pariatur deserunt iste omnis labore, officiis fugiat sequi temporibus! Ex maxime nesciunt tempora tempore fugit, impedit excepturi ipsum aperiam, quibusdam sed rerum non harum corporis ad. Dicta, labore dolore quisquam adipisci officia autem numquam eligendi dolores doloremque? Quod sit harum commodi cupiditate molestias.",
    link: "https://www.google.com",
  },
];

function Explore() {
  const [isResponsive, setIsResponsive] = useState(false);

  const handleToggle = () => {
    setIsResponsive((prevState) => !prevState);
  };

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    element.scrollTop = 0;
  };

  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <>
        <div className={styles.clubname}>
          <div className={styles.logo}>
            <a href="/">
              <img
                src={metalogo}
                alt=""
                style={{
                  margin: "1vh 2vw",
                  width: "80px",
                  height: "70px",
                  backgroundColor: "transparent",
                }}
              />
            </a>
          </div>
          <div style={{ margin: "1vh 2vw " }}>
            <a
              href="/"
              style={{
                fontSize: "5.5vh",
                fontWeight: "bold",
                color: "white",
                textDecoration: "none",
              }}
              className={styles.name}>
              The MetaCryst Club - IIT Indore
            </a>
          </div>
          <div>
            <a href="https://www.iiti.ac.in/" target="_blank">
              <img
                src={iitilogo}
                alt=""
                style={{
                  margin: "1vh 2vw",
                  width: "80px",
                  height: "70px",
                  backgroundColor: "transparent",
                }}
              />
            </a>
          </div>
        </div>

        <div className={styles.navbar}>
          <div
            className={`${styles.topnav} ${
              isResponsive ? styles.responsive : ""
            }`}
            id="myTopnav">
            <Link to="/">
              <div className="text-xl ">Home</div>
            </Link>
            {/* <Link to="/explore"> */}
            <div
              style={{
                fontSize: "large",
                fontWeight: "bold",
                float: "left",
                display: "block",
                color: isHovering ? "white" : "#f2f2f2",
                textAlign: "center",
                padding: "14px 16px",
                textDecoration: "none",
                // scale: isHovering ? "1" : "1",
                transitionDuration: isHovering ? "0.3s" : "",
                textShadow: isHovering ? "0px 0px 10px #f2f2f2" : "",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              class="dropdown">
              <div
                class="text-xl font-bold dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Explore
              </div>
              <ul class="dropdown-menu">
                <li>
                  <a
                    style={{ cursor: "pointer" }}
                    class="dropdown-item text-xl text-black bg-white"
                    onClick={() => {
                      ref0.current?.scrollIntoView({ behavior: "smooth" });
                    }}>
                    Explore 1
                  </a>
                </li>
                <li>
                  <a
                    style={{ cursor: "pointer" }}
                    class="dropdown-item text-xl text-black bg-white"
                    onClick={() => {
                      ref1.current?.scrollIntoView({ behavior: "smooth" });
                    }}>
                    Explore 2
                  </a>
                </li>
                <li>
                  <a
                    style={{ cursor: "pointer" }}
                    class="dropdown-item text-xl text-black bg-white"
                    onClick={() => {
                      ref2.current?.scrollIntoView({ behavior: "smooth" });
                    }}>
                    Explore 3
                  </a>
                </li>
              </ul>
            </div>
            {/* </Link> */}
            <Link to="/projects">
              <div className="text-xl ">Projects</div>
            </Link>

            <Link to="/events">
              <div className="text-xl ">Events</div>
            </Link>
            <Link to="/team">
              <div className="text-xl ">Team</div>
            </Link>
            <button
              className={styles.joinus}
              onClick={() =>
                (window.location.href =
                  "https://chat.whatsapp.com/HL0GTYmaxIGKxkPVugqjdR")
              }>
              Join Us
            </button>
            <a
              href="javascript:void(0);"
              className={styles.icon}
              onClick={handleToggle}>
              <i className="fas fa-bars"></i>
            </a>
          </div>
        </div>
      </>
      <div>
        <h1 className={styles1.explorename}>Explore</h1>
        <div className="material-list flex flex-col lg:flex-nowrap items-center justify-center my-5 gap-5">
          {/* {data.map((item, index) => ( */}
          {/* <ExploreCard
            // key={index}
            id={1}
            name={data[0].name}
            description={data[0].description}
            link={data[0].link}
            image={photo}
            className="material-item"
          /> */}
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
          {/* ))} */}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Explore;
