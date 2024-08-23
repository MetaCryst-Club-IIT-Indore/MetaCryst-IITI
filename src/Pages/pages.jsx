import React from "react";
import Home from "./home/home";
import Explore from "./explore/explore";
import Events from "./events/events";
import Projects from "./projects/projects";
import Team from "./team/team";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aboutus from "./aboutus/aboutus";

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
        </Routes>
      </Router>
    </>
  );
}

export default Pages;
