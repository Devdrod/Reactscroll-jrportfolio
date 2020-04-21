import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {Myphoto} from '../images/Myphoto.png'

import '../../src/Mycss.css'




export class Homelist extends Component {
    render() {
        return (
           
  
<div className="flexbox-container flexbox-itemlist" >

       
<div className="home-list">
 
    <p style={{paddingBottom:"65px"}}>For the past year I've been learning and making personal projects based on front-end technologies</p>
        <li>
          100% proactive
        </li>
        {/* <li>
         Team player
        </li> */}
        <li>
           Bilingual English/Spanish
        </li>
        <li>
         Good communication skills   </li>
        <li>
          Ready to start working now!
        </li>    
        <li>
           Located on San Jose, Costa Rica
        </li>
        </div>
    </div>



  )
}
}


export default Homelist