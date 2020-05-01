import React, {useState} from 'react'
import { Link } from 'react-scroll'



function Navbarcopy() {

const [isOpen, setOpen] = useState(false)

 const handleClick = () => setOpen({
    isOpen: true
 })

    console.log(handleClick)

    return (
        <nav className="sticky" >
        <div className="logoBtn">
        <div className="logo">

            </div>
<div className="btn" onClick={() => {setOpen(!isOpen)}}>
<div className="circlebor">
<div className="bar"></div>
<div className="bar"></div>
<div className="bar"></div>
</div>
        </div>
        </div>
        <ul className={isOpen ? 'showNav':'undefined'}>
            <li><Link to='home' activeClass='active' spy={true} smooth={true} offset={0} duration={1000} >Home </Link></li>
            <li><Link to='homelist' activeClass='active' spy={true} smooth={true} offset={0} duration={1000} >Skills / Tools</Link></li>
            <li><Link to='projects' activeClass='active' spy={true} smooth={true} offset={0} duration={1000} >Projects</Link></li>
            <li ><Link to='contact' activeClass='active' spy={true} smooth={true} offset={0} duration={1000}>Contact</Link></li>
        </ul>
      </nav>
    )
}

export default Navbarcopy
