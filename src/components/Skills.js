import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../../src/Mycss.css'


export class Skills extends Component {
    render() {
        return (
           
<div  id="skills" className="flexbox-container">
<div className="flexbox-skill">
<div className="skills-item"> 
<h1 style={{textAlign:'center',color:'#131C3A'}}> Skills &#38; Tools </h1>
<br/>


<div className='row'> 

<div className="column">

<h2>Front-end</h2>
<br/>
<li>HTML5</li>
<li>CSS</li>
<li>JavaScript</li>
<li>SAS</li>

</div>

<div className="column">



<h2>Libraries</h2>
<br/>
<li>React.js</li>



</div>

<div className="column" >
<h2>Frameworks</h2>
<br/>
<li>Gatsby.js</li>
<li>Bootstrap-4</li>
</div>


<div className="column" >
<h2>Back-end</h2>
<br/>
<li>Express.js</li>
<li>Node.js</li>
</div>

<div className="column" >
<h2>DB</h2>
<br/>
<li>Mongodb</li>
</div>




<div className="column" style={{borderStyle:"none"}}>

<h2>V. Controller</h2>
<br/>
<li>Git</li>

</div>

</div>

</div>





</div>

</div>

  )
}
}


export default Skills