import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope,faClose, faBars, faHome, faSoccerBall, faStickyNote, faUser, faXRay, faComputer } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


const Sidebar = () => {

    const [showNav, setShowNav] = useState(false)

    return (
    <div className="nav-bar">
    
        <Link className="logo" to="/" >
            <img src={LogoS} alt="logo" />
        </Link>
        <p className='pe' style={{textAlign: "center", fontSize: "20px"}}>Shawn</p>
        <nav className={showNav ? 'mobile-show' : ''}>

        <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
        </NavLink>

        <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="about-link"  to="/about">
            <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
        </NavLink>

        <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="skills-link"  to="/skills">
            <FontAwesomeIcon icon={faComputer} color='#4d4d4e' />
        </NavLink>

        <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
        </NavLink>
        <FontAwesomeIcon
        onClick={() => setShowNav(false)}
        icon={faClose}
        color="#ffd700"
        size='3x'
        className='closed-icon'

        />
    </nav>

    <ul>
        <li>
            <a target={"_blank"} rel='noferrer' href='https://bingur.github.io/sounds-of-overwatch/pages/hero_pages/Zenyatta%20-%20Default.html'>
                <FontAwesomeIcon icon={faXRay} color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a target={"_blank"} rel='noferrer' href='https://bingur.github.io/sounds-of-overwatch/pages/hero_pages/Zenyatta%20-%20Default.html'>
                <FontAwesomeIcon icon={faSoccerBall} color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a target={"_blank"} rel='noferrer' href='https://bingur.github.io/sounds-of-overwatch/pages/hero_pages/Zenyatta%20-%20Default.html'>
                <FontAwesomeIcon icon={faStickyNote} color="#4d4d4e" />
            </a>
        </li>
    </ul>
    <FontAwesomeIcon
    onClick={() => setShowNav(true)}
    icon={faBars}
    color ='#ffd700'
    size='3x'
    className='hamburger-icon'
    />
    </div>
    
)}

export default Sidebar