import React from 'react';
import CourseHero from '../../components/courses/CourseHero';
import CourseAbout from '../../components/courses/CourseAbout';
import CoursesCurriculum from '../../components/courses/CoursesCurriculum';

const data = [
  {
    question: "Why Summer Analytics?",
    description: "With the availability of numerous paid and free courses across the internet, it becomes overwhelming for students to start with Data Science. To demystify the process, we painstakingly curate a list of topics from over 25+ websites and create a simplified path for our community to follow within 2 months.",
  },
  {
    question: "What does it cover?",
    description: "Data Science is all about extracting meaningful insights from huge amounts of data. This online data science certification course will revolve around the concepts of Python, Machine Learning, Data Cleaning, and Data Analysis. This course will help you understand core concepts and the latest advancements including aspects of Supervised and Unsupervised machine learning, and introduce you to the very latest tools and algorithms used in the industry.",
  },
  {
    question: "Who We Are?",
    description: "The course is conducted by Consulting & Analytics Club, IIT Guwahati, in the winter. Along with Winter Consulting and other initiatives, we support 25K+ students and professionals each year. The online course was started to train the students from IIT Guwahati but has eventually spread out to universities and organizations across India and beyond - spanning 35+ countries worldwide.",
  },
];

const CourseBanner = () => {
  return (
    <div className="relative bg-black min-h-screen"> {/* Changed to min-h-screen */}
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 [background:radial-gradient(130%_125%_at_50%_5%,_#000_40%,_#aa6cb8_100%)] min-h-full" /> {/* Ensure full height coverage */}
      
      <CourseHero />
      <CourseAbout/>
      <CoursesCurriculum/>
      <div className=" relative  my-3">
        <div className="container px-5 pt-3 pb-5 mx-auto">
          <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto bg-gray-800 p-3 rounded-lg" >
            <h1 className="flex-grow sm:pr-16 text-xl font-medium title-font text-neutral-300">
              For more information, kindly refer to the given link!
            </h1>
            {/* Add link here */}
            <a href="">
              <button className="flex-shrink-0 text-white bg-custom-purple border-0 py-2 px-8 focus:outline-none hover:bg-purple-bg rounded text-lg mt-10 sm:mt-0">
                Learn More...
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBanner;
