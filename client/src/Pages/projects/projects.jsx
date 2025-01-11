import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer2 from "../../components/footer/footer2";
import ScrollToTop from "../../components/scrolltop/scrolltop";
import styles from "./projects.module.css";
import design from "../../assets/design.png";
import PCard from "./projectsCard";
import img from "../../assets/design.png";

const data = [
  {
    name: "Analysing CMT Weld joints",
    description:
      "Investigating the corrosion and mechanical behavior of ultrasonic-aided CMT (Cold Metal Transfer) weld joints focuses on enhancing the performance of similar and dissimilar aluminum alloys. This study aims to understand the impact of ultrasonic assistance on weld quality, strength, and resistance to corrosive environments.",
    link: "https://www.youtube.com/watch?v=sEaV3wfx8Hw&pp=ygULY210IHdlbGRpbmc%3D",
    imgurl: "https://ars.els-cdn.com/content/image/1-s2.0-S2214914717301022-gr1.jpg",
  },
  {
    name: "Synthesis of Quantum Dots",
    description:
      "Synthesizing carbon-based quantum dots involves creating nanoscale materials with unique optical and electronic properties. The focus is on understanding their characteristics to explore potential applications in bioimaging, sensing, and energy technologies.",
    link: "https://www.youtube.com/watch?v=gBnH0jIzF_o&pp=ygUTbWFraW5nIHF1YW50dW0gZG90cw%3D%3D",
    imgurl: "https://www.edn.com/wp-content/uploads/contenteetimes-images-edn-leds-lightfair-osram-quantum-dots.png",
  },
  {
    name: "Ferrofluids",
    description:
      "Ferrofluid synthesis involves creating stable colloidal suspensions of magnetic nanoparticles, which respond to magnetic fields. Optimization focuses on improving their stability, magnetic properties, and performance for applications in sealing, damping, and biomedical fields.",
    link: "https://www.youtube.com/watch?v=6L8yUY-doNc&pp=ygULZmVycm8gZmx1aWQ%3D",
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGvcQt1IrhGb10FTG0jR_o7pw8rC34F5j_w&s",
  },
];

const data1 = [
  {
    name: "Solar cell from beetroot juice",
    description: "Developing an improved solar cell involves utilizing beetroot juice as a natural dye for energy generation while optimizing its efficiency through material enhancements and design innovations. This approach leverages the unique light-absorbing properties of beetroot pigments to create a sustainable, cost-effective alternative to traditional solar technologies.",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S2214785317300718#:~:text=Dye%2Dsensitized%20solar%20cells%20(DSSCs,coated%20on%20FTO%20conducting%20glass.",
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCuP-9FNWt_lesu8wxca4B3cNbKlsRqa44lg&s",
  },
  {
    name: "Synthesising Biomaterials",
    description: "Synthesizing eco-friendly bioplastic involves using easily available substances like vinegar and starch to create sustainable and biodegradable materials. This approach offers a practical solution to reducing plastic pollution while promoting the use of renewable resources in everyday applications.",
    link: "https://www.wikihow.com/Make-Bioplastic",
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT26zzpYK4LDLyG5J3CRqj1PuSebWtXv7kHZQ&s",
  },
];

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
        {data1.flat().map(PCard)}
      </div>
      <Footer2></Footer2>
    </>
  );
}

export default Projects;
