import React, { useState } from "react";
import "../../components/teamcard/teamcard.css";
import shreyans from "../../assets/shreyans.jpg";
import unknownb from "../../assets/unknownboys.webp";
import unknowng from "../../assets/unknowngirls.webp"
// import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Teamcard from "../../components/teamcard/teamcard"; // Make sure the path is correct
import {
  Apekshit,
  Dikshit,
  Pragathi,
  Sahajmeet,
  Samridhi,
  Shaksham,
} from "../../assets/team";

function Members() {
  const [committee] = useState({
    members: [
        {
            name: "Aakash Sangvikar",
            designation: "Member",
            img: unknownb ,
            ig: " ",
            lin: "https://www.linkedin.com/in/aakash-sangvikar/",
            git: " ",
          },

          {
            name: "Aditya Sonkusare",
            designation: "Member",
            img: unknownb ,
            ig: " ",
            lin: " ",
            git: " ",
          },
          {
            name: "Amber Verma",
            designation: "Member",
            img: unknownb ,
            ig: " ",
            lin: "https://www.linkedin.com/in/amber-verma",
            git: " ",
          },
          {
            name: "Apekshit",
            designation: "Member",
            img: Apekshit ,
            ig: " ",
            lin: "https://www.linkedin.com/in/apekshit-noutiyal-ba7808255/",
            git: " ",
          },
          {
            name: "Ashwin Bansod",
            designation: "Member",
            img: unknownb ,
            ig: " ",
            lin: " https://in.linkedin.com/in/ashwin-bansod-654106260",
            git: " ",
          },
          {
            name: "Bhumika Aggarwal",
            designation: "Member",
            img: unknowng ,
            ig: "https://www.instagram.com/bhumika_aggwl/",
            lin: "https://in.linkedin.com/in/bhumika-aggarwal-8a1453280",
            git: "https://github.com/BhumikaAggwl",
          },
          {
            name: "Chirag Gour",
            designation: "Member",
            img: unknownb ,
            ig: " ",
            lin: "linkedin.com/in/chirag-gour",
            git: " ",
          },
          {
            name: "Dhairya Shrivastava",
            designation: "Member",
            img: unknownb ,
            ig: "https://www.instagram.com/itsdhairya",
            lin: "https://in.linkedin.com/in/dhairya-srivastava-195a021b8",
            git: " ",
          },
          {
            name: "Ishan Shrivastava",
            designation: "Member",
            img: unknownb ,
            ig: " ",
            lin: "https://in.linkedin.com/in/ishan-shrivastava-70b016247",
            git: " ",
          },
          {
            name: "Keerthan",
            designation: "Member",
            img: unknownb ,
            ig: "https://www.instagram.com/a__keerthu/",
            lin: "https://www.linkedin.com/in/keerthan-arulmani-a7748b331/",
            git: " ",
          },
          {
            name: "Kushagra Shrikhande ",
            designation: "Member",
            img: unknownb ,
            ig: "https://www.instagram.com/kush___133/profilecard/?igsh=MWNsbHMxb3pocGIxMQ==",
            lin: "https://www.linkedin.com/in/kushagra-shrikhande-396a152a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            git: "",
          },
          {
            name: "Mohak Dadhich",
            designation: "Member",
            img: unknownb ,
            ig: "https://www.instagram.com/dadhichmohak?igsh=MTJ5dHE0OTh6dmg1bA==",
            lin: "https://in.linkedin.com/in/dadhichmohak",
            git: "https://github.com/dadhichmohak",
          },
          

          {
            name: "Pragathi",
            designation: "Member",
            img: Pragathi ,
            ig: "https://www.instagram.com/prageeeeee/?next=%2F",
            lin: "https://www.linkedin.com/in/pragathi-p-038576334/",
            git: "https://github.com/PragathiPazhanivel",
          },

          {
            name: "Sahajmeet Kaur",
            img: Sahajmeet ,
            designation: "Member",
            ig: " ",
            lin: "https://in.linkedin.com/in/sahajmeet-kaur-60b652283",
            git: " ",
          },
          {
            name: "Shaksham Nigam",
            img: Shaksham ,
            designation: "Member",
            ig: "https://www.instagram.com/saksham_k.42/",
            lin: "https://www.linkedin.com/in/shaksham-kumar-nigam-847a862a7/",
            git: " ",
          },
          {
            name: "Samridhi",
            img: Samridhi ,
            designation: "Member",
            ig: "https://www.instagram.com/_samridhiii_._24/profilecard/?igsh=MW16enJwYXNzcGx5ZA==",
            lin: "https://www.linkedin.com/in/samridhiii24?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            git: "https://github.com/Samridhii24",
          },
          {
            name: "Shubham Prajapati",
            img: unknownb ,
            designation: "Member",
            ig: "https://www.instagram.com/shubham_prajapati00.92?igsh=Njc5MXhkYnB1a2x6",
            lin: "https://in.linkedin.com/in/shubham-prajapati-56345b287",
            git: "https://github.com/Shubhamprana",
          },
          {
            name: "Swarangi Kale",
            img: unknowng ,
            designation: "Member",
            ig: "https://www.instagram.com/swarangikale7?igsh=MXQ3dm8wOHE5d2t4MQ==",
            lin: "https://in.linkedin.com/in/swarangi-kale-803705287",
            git: "https://github.com/Swarangi-codes",
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

export default Members;
