

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {Myphoto} from '../images/Myphoto.png'

import '../../src/Mycss.css'




export class Home extends Component {
    render() {
        return (
           
   <div className="flexbox-container">  
    
   <div className="flexbox-item" >



   <div className="home-item typewriter">    
    <h1 style={{maxWidth:"220px", fontSize:"80px"}}>Hello!</h1>
    </div>

    <h1 className="myname-item" >My name is:</h1>    
    <h1 className="name-item" >David Rodríguez</h1>
    <h1 className="im-item" >I'm a Jr Web Developer</h1>
    <div className="flexbox-img">  
    <img src={require('../images/yo.png')}/> 
       </div>
    </div>


    </div>
  )
}
}


export default Home