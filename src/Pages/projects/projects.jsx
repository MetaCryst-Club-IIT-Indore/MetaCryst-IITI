import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/footer";
import ScrollToTop from "../../components/scrolltop/scrolltop";
import styles from "./projects.module.css";
import design from "../../assets/design.png";
import PCard from "./projectsCard";
import img from "../../assets/design.png";

const data = [
  {
    name: "Metallography and phase transformation analysis",
    description:
      "Understanding the concept of microstructure, phase and heat treatment processes. Observers can get familiarised with basic metallurgical concepts and the mechanical behaviour of materials. A good demonstration of the shape memory effect can also be done. ",
    link: "",
    imgurl: img,
  },
  {
    name: "Corrosion studies with ferric chloride",
    description:"Investigation of corrosion behaviour of iron nails and steel wool in ferric chloride solutions. This experiment is to be done by varying the concentration of ferric chloride and by studying the effects of corrosion rates.",
    link: "https://doi.org/10.1016/j.jmrt.2024.01.194",
    link: "https://doi.org/10.1016/j.jmrt.2023.12.121",
    imgurl: img,
  },
  {
    name: "Synthesising Biomaterials",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "https://www.google.com",
    imgurl: img,
  },
  {
    name: "Solar cell from beetroot juice",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "https://www.google.com",
    imgurl: img,
  }


function Projects() {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>

      <h1 className={styles.projectsname}>Ongoing Projects</h1>
      <div className="max-xl:flex max-xl:flex-wrap max-xl:justify-center">
        {data.flat().map(PCard)}
      </div>
      <h1 className={styles.projectsname}>Upcoming Projects</h1>
      <div className="max-xl:flex max-xl:flex-wrap max-xl:justify-center">
        {data.flat().map(PCard)}
      </div>
      <Footer></Footer>
    </>
  );
}

export default Projects;
