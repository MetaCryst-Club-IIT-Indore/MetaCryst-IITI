import React from "react";
import "./about.css";
import Dhruvjain from "../../assets/team/DhruvJain.png";
function About() {
  return (
    <>
      <div className="aboutusname">About Us</div>
      <div className="card" >
  <h5 className="text-3xl font-bold"> Our Vision </h5>
  <div className="card-body" id="body1">
    {/* <h5 className="card-title">Special title treatment</h5> */}
    <p className="card-text" >The MetaCryst Club at IIT Indore is a student community focused on material science and metallurgy. As part of the Science and Technology Council, we offer a platform for students to engage in these fields through workshops, seminars, guest lectures, and hands-on projects.

We facilitate connections with the college's labs and provide opportunities for practical learning and research. Collaborations with experts and academic organizations enhance our members' experiences and broaden their knowledge.

Join the MetaCryst Club to explore and contribute to the future of material science and metallurgy. Be part of a community that encourages curiosity and innovation.





</p>
    
  </div>
</div>
<div id="msgheading">Message from club head</div>
      <div className="containermain flex justify-center items-center">
        
        <div className="messagecontainer">
          <div className="headphoto"><img src={Dhruvjain} alt="" /></div>
          <div className="headmessage"><div className="content">Welcome to the MetaCryst Club of IIT Indore! <br />


          At MetaCryst, our passion lies in discovering the intricacies of material science. We provide a platform for students, faculty, and enthusiasts to explore, innovate, and collaborate. Through workshops, lectures, and research opportunities, we foster a community dedicated to advancing material science and uncovering the secrets of crystalline structures.

<br />
<br />

Warm regards,
<br />

Dhruv Jain
<br />
Club Head
<br />
MetaCryst Club, IIT Indore</div>
        
       </div></div>
        </div>
     
    </>
  );
}

export default About;
