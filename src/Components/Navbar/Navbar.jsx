import React from 'react'
import './Navbar.scss'
import logo from '../../images/logo.png'

function Navbar() {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">  
                     <img src={logo} className="logo" alt="logo"/>
                </div>
                <div className="right">
                    <ul>
                        <li> <a href="#hero">Home</a>  </li>
                        <li> <a href="#about">About</a>  </li>   
                        <li> <a href="#work">Skills</a> </li>
                        <li> <a href="#portfolio">Portfolio</a> </li>
                        <li> <a href="#contact">Contact</a> </li>
                        <li> 
                        <a  className="resume" 
                        href="https://drive.google.com/file/d/13KjJaZRaj_Zpc-Xg8-ZsSJDajyhE9Z36/view?usp=sharing"> 
                        Resume 
                        </a>
                        </li>                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
