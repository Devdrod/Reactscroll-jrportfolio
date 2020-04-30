import React from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'


import Home from './components/Home'
// import Navbar from './components/Navbar'
import Navbarcopy from './components/Navbarcopy'
import Skills from './components/Skills'
import Homelist from './components/Homelist'
import Projects from './components/Projects'
// import Contact from './components/Contact'
import Contactcopy from './components/Contactcopy'

export default function App() {
  return (
    <>
    <Navbarcopy/>
    {/* <Switch> */}
    
    <Router>
      
      <Route path="/" component={Home} />
      <Route path="/" component={Homelist} />
      <Route path="/" component={Skills} />
      <Route path="/" component={Projects} />
      <Route path="/" component={Contactcopy} />

      </Router>
    {/* </Switch> */}
    </>
  )
}