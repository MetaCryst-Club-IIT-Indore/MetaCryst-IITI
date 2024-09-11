import React, { useState } from "react";
import "../../components/teamcard/teamcard.css";
import shreyans from "../../assets/shreyans.jpg";
// import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Teamcard from "../../components/teamcard/teamcard"; // Make sure the path is correct
import {
  Dikshit,
  Abhishek,
  // Shreyans,
  unknownboys,
} from "../../assets/team";

function Webdev() {
  const [committee] = useState({
    members: [
      {
        name: "Dikshit Suthar",
        img: Dikshit,
        designation: "Member",
        ig: "https://www.instagram.com/dikshit_suthar_57/",
        lin: "https://www.linkedin.com/in/dikshit-suthar-289459250/?originalSubdomain=in",
        git: "https://github.com/Dikshitsuthar",
      },
      {
        name: "Shreyans ",
        img: shreyans,
        designation: "Member",
        ig: "https://in.linkedin.com/in/shreyans-kothari-3a80a722a",
        lin: "",
        git: "",
      },
      {
        name: "Abhishek AP",
        img: Abhishek,
        designation: "Member",
        ig: "https://www.instagram.com/abhiap2004/?hl=en",
        lin: "https://www.linkedin.com/in/abhishek-a-p-66104425b/",
        git: "https://github.com/Abhiap2004",
      },
    ],
  });

  return (
    <div className="container-fluid">
      {committee.members.map((member, idx) => (
        <Teamcard key={idx} val={member} />
      ))}
    </div>
  );
}

export default Webdev;
