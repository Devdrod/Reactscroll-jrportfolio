import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// We will create these two pages in a moment
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Homelist from './components/Homelist'
export default function App() {
  return (
    <Switch>
    <Router>
      <Navbar/>
      <Route path="/" component={Home} />
      <Route component={Homelist} />
      <Route path="/" component={Skills} />
      </Router>
    </Switch>
  )
}