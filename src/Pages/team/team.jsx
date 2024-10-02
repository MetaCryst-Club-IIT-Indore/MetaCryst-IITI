import React from "react";
import Navbar from '../../components/Navbar/Navbar'
import Footer2 from "../../components/footer/footer2";
import ScrollToTop from '../../components/scrolltop/scrolltop'
import './team.css'
import Webdev from "./webdev";
import Head from "./heads";

function Team() {
  return (
    <>
    <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <div className="Team-encloser2"> <div className="Team-heading">	Team - 2024-25</div></div>
      <center className='TeamName'>Head</center>
      <Head />
			<center className='TeamName'>Web-Development team</center>
			<Webdev />
     
		
      <Footer2></Footer2>
    </>
  );
}

export default Team;
