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
    imgurl: img,
  },
  {
    name: "Synthesising Biomaterials",
    description:
      "Synthesising environment friendly bio-plastic material from easily available substances.",
    link: "https://link.springer.com/article/10.1007/s42452-019-1460-x",
    imgurl: img,
  },
  {
    name: "Solar cell from beetroot juice",
    description:
      "Developing an Improved solar cell and energy generation material using Beetroot juice and optimising its efficiency.",
    link: "",
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
