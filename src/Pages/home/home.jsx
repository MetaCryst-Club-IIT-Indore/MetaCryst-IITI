import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/footer/footer'
import ScrollToTop from '../../components/scrolltop/scrolltop'

function Home() {
  return (
    <>
    <ScrollToTop></ScrollToTop>
    <Navbar></Navbar>
   <h1>this is home page </h1>
   <Footer></Footer>
    </>
  )
}

export default Home
