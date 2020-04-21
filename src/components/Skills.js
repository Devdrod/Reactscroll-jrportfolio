import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../../src/Mycss.css'


export class Skills extends Component {
    render() {
        return (
           
<div className="flexbox-container">
<div className="flexbox-skill skills-item">

<h1 style={{textAlign:'center'}}> Tools &#38; Languages </h1>
<br/>


<div className='row'> 

<div className="column">

<li>HTML5</li>
<li>CSS</li>
<li>SAS</li>
<li>Bootstrap4</li>
</div>

<div className="column">


<li>JavaScript</li>
<li>React.js</li>
<li>Gatsby.js</li>


</div>

<div className="column" style={{borderStyle:"none"}}>

<li>Mongodb</li>
<li>Express.js</li>
<li>Node.js</li>
</div>

</div>
</div>
</div>
  )
}
}


export default Skills