import React from 'react'
import { FaArrowRight } from "react-icons/fa";

//data
const curriculum = [
    {
        image: "https://dummyimage.com/1203x503",
        title: "fdasfasdf",
        description: "Swag shoindxgoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual",
    },
    {
        image: "https://dummyimage.com/1203x503",
        title: "fdasfasdf",
        description: "Swag shoindxgoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual",
    }, {
        image: "https://dummyimage.com/1203x503",
        title: "fdasfasdf",
        description: "Swag shoindxgoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual",
    },
    {
        image: "https://dummyimage.com/1203x503",
        title: "fdasfasdf",
        description: "Swag shoindxgoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual",
    },
    {
        image: "https://dummyimage.com/1203x503",
        title: "fdasfasdf",
        description: "Swag shoindxgoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual",
    },
    {
        image: "https://dummyimage.com/1203x503",
        title: "fdasfasdf",
        description: "Swag shoindxgoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual",
    },



]

const CoursesCurriculum = () => {
    return (
        <div className="relative z-10  text-gray-400 body-font ">
            <div className="container px-4  mx-auto">
                <div className="flex flex-col">
                    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-6">
                        <h1 className="sm:w-2/5 text-white font-medium title-font text-5xl mb-1 sm:mb-0 ">
                            Curriculum
                        </h1>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    {curriculum.map((course, index) => (
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6  ">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img
                                    alt="content"
                                    className="object-cover object-center h-full w-full"
                                    src={course.image}
                                />
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">
                               {course.title}
                            </h2>
                            <p className="text-base leading-relaxed mt-2">
                                {course.description}
                            </p>
                            <a className="text-indigo-400 inline-flex items-center mt-3">
                                Learn More
                                <FaArrowRight className='ml-1' />
                            </a>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default CoursesCurriculum