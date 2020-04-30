import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Myphoto} from '../images/Myphoto.png'
import '../../src/Mycss.css'
import {Proyect1} from '../images/blog.png'
import {Proyect2} from '../images/soon.png'
export class Projects extends Component {
    render() {
        return (
           
<div id="projects"className="flexbox-container">

<div className='flexbox-project'>
<h1>Here are some deployed projects I've work on</h1>





<div className="container">
  <h3 className="title">"Drodcr Blog"</h3>
  <div className="content">
    <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
      <div className="content-overlay"></div>
      <img style={{    maxWidth: '100%', height:'300px',  objectFit: 'cover' }}src={require('../images/blog.png')}/> 
       
      <div className="content-details fadeIn-bottom">
        <h3 className="content-title">This is a title</h3>
        <p className="content-text">This is a short description</p>
      </div>
    </a>
  </div>
</div>





<div className="container">
  <h3 className="title">"This portfolio"</h3>
  <div className="content">
    <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
      <div className="content-overlay"></div>
      <img style={{    maxWidth: '100%',height:'300px',  objectFit: 'cover' }}src={require('../images/portfolio.png')}/> 
       
      <div className="content-details fadeIn-bottom">
        <h3 className="content-title">This is a title</h3>
        <p className="content-text">This is a short description</p>
      </div>
    </a>
  </div>
</div>


<div className="container">
  <h3 className="title">"Eccommerce"</h3>
  <div className="content">
    <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
      <div className="content-overlay"></div>
      <img style={{    maxWidth: '100%',height:'300px',  objectFit: 'cover' }}src={require('../images/soon.png')}/> 
       
      <div className="content-details fadeIn-bottom">
        <h3 className="content-title">This is a title</h3>
        <p className="content-text">This is a short description</p>
      </div>
    </a>
  </div>
</div>


<div className="container">
  <h3 className="title">"HTML e-mail"</h3>
  <div className="content">
    <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
      <div className="content-overlay"></div>
      <img style={{    maxWidth: '100%',height:'300px',  objectFit: 'cover' }}src={require('../images/soon.png')}/> 
       
      <div className="content-details fadeIn-bottom">
        <h3 className="content-title">This is a title</h3>
        <p className="content-text">This is a short description</p>
      </div>
    </a>
  </div>
</div>



</div>
</div>
  )
}
}


export default Projects