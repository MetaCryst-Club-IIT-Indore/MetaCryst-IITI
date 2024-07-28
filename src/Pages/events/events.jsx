import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/footer";
import ScrollToTop from "../../components/scrolltop/scrolltop";
import styles from "./events.module.css";
import ECard from "./EventCard";
import img from "../../assets/design.png";

const data = [
  {
    name: "Student-Lab Connect Initiative",
    description:"Providing access and introductory sessions to various laboratories and their ongoing research for 1st and 2nd year students helps them discover their interests in different research areas. This initiative aims to inspire early engagement in scientific inquiry and foster a deeper understanding of potential research pathways.",
    link: "",
    imgurl: img,
  },
  {
    name: "MetaBizz Quiz'25",
    description:
      "The Annual Quiz Event conducted by the club in which multiple rounds of quizzing takes place. Materials science and metallurgical knowledge is tested in the most fun and exciting way possible. Be a part of this quizzing event to prove your metal-mettle",
    link: "",
    imgurl: img,
  },
  {
    name: "Event Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "https://www.google.com",
    imgurl: img,
  },
  {
    name: "Event Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "https://www.google.com",
    imgurl: img,
  },
  {
    name: "Event Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "https://www.google.com",
    imgurl: img,
  },
  {
    name: "Event Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "https://www.google.com",
    imgurl: img,
  },
  {
    name: "Event Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
        <Footer></Footer>
      </div>
    </>
  );
}

export default Events;
