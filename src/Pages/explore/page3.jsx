import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer2 from '../../components/footer/footer2'
const Page3 = () => {
  return (
<>
      <Navbar/>
      <h2 className="lg:text-5xl sm:text-3xl font-bold mb-5 text-neutral-300 ">GATE Examination</h2>
      <h1 className="flex-grow sm:pr-16 text-xl font-medium title-font text-neutral-300">
                For more information kindly refer to the GATE 2025 official page by clicking given link!!
              </h1>
              <a href="https://gate2025.iitr.ac.in/">
                <button className="flex-shrink-0 text-white bg-custom-purple border-0 py-2 px-8 focus:outline-none hover:bg-purple-bg rounded text-lg mt-10 sm:mt-0">
                  Learn More..
                </button></a>
                <img src="https://gate2025.iitr.ac.in/img/logos/green-logo.png" alt="Photo" class="w-[450px] h-[350px] object-cover rounded-lg" />

              
      <Footer2/>
    </>
  )
}

export default Page3