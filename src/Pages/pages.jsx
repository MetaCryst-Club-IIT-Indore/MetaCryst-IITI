import React from 'react'
import Home from './home/home'
import Aboutus from './aboutus/aboutus'
import Activities from './activities/activities'
import News from './news/news'
import Team from './team/team'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function Pages() {
  return (
    <>
    <Router>
    <Routes>
    <Route  path="/"   element={<Home/>} />
    <Route  path="/aboutus"   element={<Aboutus/>} />
    <Route  path="/activities"   element={<Activities/>} />
    <Route  path="/news"   element={<News/>} />
    <Route  path="/team"   element={<Team/>} />
    </Routes>
    </Router>
    </>
  )
}

export default Pages
