import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/footer";
import ScrollToTop from "../../components/scrolltop/scrolltop";

function Events() {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <div>
        <h1>this is Events page </h1>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Events;
