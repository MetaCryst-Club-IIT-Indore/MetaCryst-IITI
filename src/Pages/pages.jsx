import React from "react";
import Home from "./home/home";
import Explore from "./explore/explore";
import Events from "./events/events";
import Projects from "./projects/projects";
import Team from "./team/team";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aboutus from "./aboutus/aboutus";
import Page1 from "./explore/page1";
import Page2 from "./explore/page2";
import Page3 from "./explore/page3";
import Page4 from "./explore/page4";
import Blog from "./blogPage/Blog";
import Course1 from "./CoursesPages/Course1";
function Pages() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/metallurgy" element={<Page1 />} />
          <Route path="/material" element={<Page2 />} />
          <Route path="/gate" element={<Page3 />} />
          <Route path="/steel" element={<Page4 />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/course1" element={<Course1 />} />
        </Routes>
      </Router>
    </>
  );
}

export default Pages;
