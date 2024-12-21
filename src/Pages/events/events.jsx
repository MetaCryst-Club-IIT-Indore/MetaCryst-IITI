import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer2 from "../../components/footer/footer2";
import ScrollToTop from "../../components/scrolltop/scrolltop";
import styles from "./events.module.css";
import ECard from "./EventCard";
import img from "../../assets/design.png";

const data = [
  {
    name: "MetaBizz Quiz'25",
    description:"The Annual Quiz Event conducted by the club in which multiple rounds of quizzing takes place. Materials science and metallurgical knowledge is tested in the most fun and exciting way possible. Be a part of this quizzing event to prove your metal-mettle",
    link: "",
    imgurl: "",
  },
  {
    name: "Ferralytics Challenge'24",
    description:
      "On 20th October 2024, The Metacryst Club organized a Machine Learning challenge aimed at predicting silicon concentration in iron ore using operational data. This initiative helped engineers optimize processes by eliminating the need to wait for lab results, providing participants with an opportunity to solve a real-world, industry-relevant problem.",
    link: "",
    imgurl: img,
  },
  {
    name: "Independence Day Tech-Expo 2024",
    description:
      "A Tech-Expo was organised by the Science and Technology Council on the Independence day (15th August 2024). All the clubs exhibited their ongoing projects and showcased the talents of their tech teams. Metacryst club actively participated in the expo showing 3 of its ongoing projects related to CMT Welding, Phase field Simulations etc.",
    link: "https://www.google.com",
    imgurl: img,
  },
  {
    name: "IITISoc 2024",
    description:
      "TThe Metacryst Club, as part of the IITISoC'24 organized by the SnT Council, released a series of problem statements in the design and modeling domain. These problem statements focused on the modeling and cost analysis of CubeSat structures. Participants worked on designing CubeSat structures that met specific engineering requirements while optimizing for cost, materials, and structural efficiency. Two teams excelled in the competition and secured the 3rd prize",
    link: "https://www.google.com",
    imgurl: img,
  },
  {
    name: "Alumni Connect 2024",
    description:
      "The MetaCryst Club, in collaboration with the MEMS Department, organized a farewell and a special interactive session with the 4th-year passing-out batch of MEMS on April 19th (Friday). The event provided a unique opportunity for students, especially first-year participants, to interact with seniors. The seniors shared their insights, addressed queries, and offered guidance to help students in their academic and professional journeys.",
    link: "https://www.google.com",
    imgurl: img,
  },
];

function Events() {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <div>
        <h1 className={styles.eventsname}>Events</h1>
      </div>
      <div className="flex flex-wrap justify-around gap-5 w-full">
        {data.flat().map(ECard)}
        {/* <ECard /> */}
      </div>
      <div className="mt-10">
        <Footer2></Footer2>
      </div>
    </>
  );
}

export default Events;
