import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/footer";
import ScrollToTop from "../../components/scrolltop/scrolltop";
import Hero from "../../components/hero/hero";
import "./home.css";
import About from "../../components/about/about";
import Footer2 from "../../components/footer/footer2";
import Feature from "../../components/Intro/Feature";
import Cardcompo from "../../components/courses/CourseCompo";

function Home() {
  return (
    <>
   
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <Hero></Hero>
      {/* <About></About> */}
      <Feature/>
      <Cardcompo/>
      <Footer2></Footer2>
    </>
  );
}

export default Home;
