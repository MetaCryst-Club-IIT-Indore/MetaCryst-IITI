import React from 'react'
import { MdAccessTime } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMdBook } from "react-icons/io";
import { NavLink } from 'react-router-dom';
const CourseHero = () => {
  return (
    <div className="relative z-10 text-white w-full px-6 md:px-20 " >
        {/* Navbar */}
        <nav className="flex justify-between items-center pt-4">
          <div className="flex items-center space-x-10">
            <h1 className="text-2xl font-semibold">Course Name</h1>
            <div className="flex space-x-6">
              <a href="#about" className="hover:underline">About the Course</a>
              <NavLink to="/"><a className="hover:underline"> Home</a></NavLink>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Access Course Materials
          </button>
        </nav>

        {/* Course Banner */}
        <div className="mt-10 pt-5 text-left">
          <div className="inline-block bg-gray-800 px-3 py-1 rounded-full text-sm uppercase tracking-wide">
            Course is Live!
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            A Primer Course on Data Science and Machine Learning
          </h2>
          {/* animations */}
          <p className="mt-4 text-lg ">

            Explore Data Analysis

          </p>

          {/* Course Info */}
          <div className="flex flex-col items-start space-y-4 text-gray-400 mt-8">
            <div className="flex items-center">
              <MdAccessTime className="mr-2" />
              <p className="-mb-2">Duration</p>
            </div>
            <div className="flex items-center">
              <MdOutlineLocationOn className="mr-2" />
              <p className="-mb-2">Online</p>
            </div>
            <div className="flex items-center">
              <IoMdBook className="mr-2" />
              <p>Prerequisites: None!</p>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex mt-12 space-x-6 text-gray-400">
          <a href="https://linkedin.com" className="hover:text-white">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com" className="hover:text-white">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="https://instagram.com" className="hover:text-white">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://facebook.com" className="hover:text-white">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://youtube.com" className="hover:text-white">
            <i className="fab fa-youtube fa-2x"></i>
          </a>
        </div>
      </div>
  )
}

export default CourseHero