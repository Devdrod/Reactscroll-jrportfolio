import React from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'


import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Homelist from './components/Homelist'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
    <Navbar/>
   
    
    <Router>
      
      <Route path="/" component={Home} />
      <Route path="/" component={Homelist} />
      <Route path="/" component={Skills} />
      <Route path="/" component={Projects} />
      <Route path="/" component={Contact} />

      </Router>
    
    </>
  )
}