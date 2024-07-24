import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/footer";
import ScrollToTop from "../../components/scrolltop/scrolltop";
import Hero from "../../components/hero/hero";
import "./home.css";
import About from "../../components/about/about";

function Home() {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Footer></Footer>
    </>
  );
}

export default Home;
