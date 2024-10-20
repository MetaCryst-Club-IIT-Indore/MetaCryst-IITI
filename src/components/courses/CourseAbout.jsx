import React from 'react'
const data = [
    {
        question: "why Summer Analytics?",
        description:"With the availability of numerous paid and free courses across the internet, it becomes overwhelming for students to start with Data Science. To demystify the process, we painstakingly curate a list of topics from over 25+ websites and create a simplified path for our community to follow within 2 month",
    },
    {
        question: "What does it cover?",
        description:"Data Science is all about extracting meaningful insights from huge amount of data. This online data science certification course will revolve around the concepts of Python, Machine Learning, Data Cleaning and Data Analysis. This course will help you understand core concepts and the latest advancements including aspects of Supervised and Unsupervised machine learning, and introduce you to the very latest tools and algorithms used in the industry.",
    },
    {
        question: "Who We Are?",
        description:"The course is conducted by Consulting & Analytics Club, IIT Guwahati, in the winter, and along with Winter Consulting and other initiatives, we support 25K+ students and professionals each year. The online course was started to train the students from IIT Guwahati but has eventually spread out to universities and organisations across India and beyond - spanning 35+ countries worldwide.",
    },
]
const CourseAbout = () => {
  return (
    <div className="relative w-full mt-10 md:px-20 z-10 pt-20 pb-10  ">
    <h1 className="text-5xl text-slate-100 ml-2 pl-9">About this course</h1>

    {data.map((item, index) => (
      <div key={index} className="px-5 mt-3 py-4 mx-2">
        <h1 className="text-3xl tracking-wide text-gray-300 mb-2">{item.question}</h1>
        <p className="text-gray-300 mb-1">
          {item.description}
        </p>
        <hr class="border-t border-gray-300 my-4"></hr>
      </div>
    ))}
  </div>    
  )
}

export default CourseAbout