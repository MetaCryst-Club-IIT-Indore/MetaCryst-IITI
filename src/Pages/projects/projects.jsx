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
    name: "CMT Welding",
    description:
      "Investigating the corrosion and mechanical behaviour of ultrasonic-aided",
      SkillsDevloped: "Understand the impact of ultrasonic assistance on weld quality, strength, and resistance to corrosive environments.",
      link: "https://www.youtube.com/watch?v=sEaV3wfx8Hw&pp=ygULY210IHdlbGRpbmc%3D",
    imgurl: "https://ars.els-cdn.com/content/image/1-s2.0-S2214914717301022-gr1.jpg",
  },
  {
    name: "Carbon Quantum Dots",
    description:
      "To prepare carbon quantum dots using carbon-based quantum dots using common household ingredients and easily available equipment, trying to demonstrate the principles of nanotechnology and fluorescence.",
      SkillsDevloped: "Synthesizing carbon quantum dots develops skills in nanomaterial synthesis, chemical handling, and advanced characterization techniques.",
      link: "https://www.youtube.com/watch?v=gBnH0jIzF_o&pp=ygUTbWFraW5nIHF1YW50dW0gZG90cw%3D%3D",
    imgurl: "https://www.edn.com/wp-content/uploads/contenteetimes-images-edn-leds-lightfair-osram-quantum-dots.png",
  },
  {
    name: "Ferrofluids",
    description:
      "Ferrofluids can be synthesized from hematite ore by first converting the iron oxide into magnetite (Fe₃O₄) through chemical co-precipitation using iron salts and a reducing agent. The resulting nanoparticles are then stabilized with a surfactant in a carrier liquid to form a stable  ,  magnetic colloidal suspension.",
      SkillsDevloped: "Synthesizing ferrofluids from hematite ore helps develop skills in inorganic synthesis, nanoparticle handling, and colloidal chemistry",
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
