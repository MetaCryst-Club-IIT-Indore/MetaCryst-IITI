import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer2 from '../../components/footer/footer2'
import BlogSection from './compo/blogsection'
const Blog = () => {
  return (
    <>
    <Navbar/>
    <div style={{
          background: "radial-gradient(rgb(82 27 88) 0.5%, rgb(00 00 00)",
        }}>
       <BlogSection/>
            
        </div>
    <Footer2/>
    </>
  )
}

export default Blog