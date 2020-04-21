import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../../src/Mycss.css'
import logo from '../images/rod2.png'


export class Navbar extends Component {
   
    state= {
        isOpen:false
    }

    handleClick=()=>{
this.setState({
    isOpen:!this.state.isOpen,
})
    }

    
   
    render() {
        return (
          <nav style={{borderBottomStyle:"solid", borderWidth:"1px", }}>
            <div className="logoBtn">
            <div className="logo">
                <a href="#">
                {/* <img src={logo} alt=""/> */}
                </a>
                </div>
<div className="btn" onClick={this.handleClick}>
<div className="circlebor">
<div className="bar"></div>
<div className="bar"></div>
<div className="bar"></div>
</div>
            </div>
            </div>
            <ul className={this.state.isOpen ? 'showNav':'undefined'}>
                <li><Link to='/'>Home </Link></li>
                <li><Link to='/skills'>Tools/Languages</Link></li>
                <li><Link to='#'>Projects</Link></li>
                <li ><Link to='#'>Contact</Link></li>
            </ul>
          </nav>
        )
    }
}

export default Navbar
