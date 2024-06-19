import React from "react";
import "./about.css";
import Dhruvjain from "../../assets/team/DhruvJain.png";
function About() {
  return (
    <>
      <div className="aboutusname">About us</div>
      <div className="card" >
  <h5 className="text-3xl font-bold"> &lt; Our Vision /&gt;</h5>
  <div className="card-body" id="body1">
    {/* <h5 className="card-title">Special title treatment</h5> */}
    <p className="card-text" >MetaCryst at IIT Indore is a vibrant community dedicated to the advancement of material science. Created to inspire interest in material properties and applications, the club serves as a hub for both beginners and enthusiasts. Through hands-on workshops, insightful lectures, and collaborative research projects, members develop a deep understanding of material science and crystallography. The club provides access to cutting-edge equipment, enabling participants to conduct experiments and analyze various materials. Partnerships with experts and industry leaders enhance the learning experience, offering valuable insights and opportunities. Whether you’re a budding material scientist or simply fascinated by the subject, MetaCryst at IIT Indore welcomes you to explore the endless possibilities of material science.






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
