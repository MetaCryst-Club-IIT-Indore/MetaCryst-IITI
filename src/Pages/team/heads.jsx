import React, { useState } from 'react';
import '../../components/teamcard/teamcard.css';
// import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Teamcard from '../../components/teamcard/teamcard'; 
import {

  Abhishek,
 
  Avdhoot,
  Dhruv,
  Lokery,
  Mrunal,
} from "../../assets/team";

function Head() {
  const [committee] = useState({
    members: [
      {
        name: "Dhruv Jain",
        img: Dhruv,
        designation: "Overall Head",
        ig: "",
        lin: "https://in.linkedin.com/in/dhr-jain",
        git: "https://github.com/dhr-jain"
      },
      {
        name: "Avdhoot Kasture",
        img: Avdhoot,
        designation: "Treasurer",
        ig: "https://www.instagram.com/avdhoot_kasture20_04/",
        lin: "https://in.linkedin.com/in/avdhoot-kasture",
        git: "https://github.com/kal-el95"
      },
      {
    
        name: "Abhishek AP",
        img: Abhishek,
        designation: "Projects Head",
        ig: "https://www.instagram.com/abhiap2004/?hl=en",
        lin: "https://www.linkedin.com/in/abhishek-a-p-66104425b/",
        git: "https://github.com/Abhiap2004"
      },
      {
    
        name: "Lokery Kiranmayi",
        img: Lokery,
        designation: "Outreach Head",
        ig: "",
        lin: "https://www.linkedin.com/in/kiranmayi-lokery-34402725b",
        git: ""
      },
      {
    
        name: "Mrunal Nandpure",
        img: Mrunal,
        designation: "Events Head",
        ig: "https://www.instagram.com/mrunal_nandpure/",
        lin: "https://www.linkedin.com/in/mrunal-nandpure-5b90a025b",
        git: ""
      },
    ]
  });

  return (
    <div className="container-fluid">
      {committee.members.map((member, idx) => (
        <Teamcard key={idx} val={member} />
      ))}
    </div>
  );
}

export default Head;
