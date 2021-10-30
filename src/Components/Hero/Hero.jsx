import React, { useEffect, useRef } from "react";
import "./Hero.scss";
import hero from "../../images/hero.png";
import { init } from "ityped";
import HeroData from "./HeroData";
import {FaArrowRight} from '../../../node_modules/react-icons/fa'

function Hero() {

const textRef = useRef();
 
 useEffect(()=>{
    init(textRef.current, { showCursor: false, strings: ['Graphic Designer', 'React Developer', 'UI Designer' ] })
 }, [])
  return (
    <div className="hero" id="hero">
      <div className="left">
        <div className="wrapper1">
            <ul>
              {HeroData.map((val,idx)=>{
                return(
                  <li> <a href={val.slink}> {val.icon}</a></li> 
                )  
              })}
            </ul>
        </div>
        <div className="wrapper2">
          <p className="welcome"> Hello, Welcome to my Portfolio </p>
          <h1> Kashif Usman </h1>
          <p> <FaArrowRight /> <span className="change" ref={textRef}>  </span></p>
          <p className="intro">
            Hi, I am Kashif Usman, a Frontend Developer and Wordpress Develoepr. I am 
            a final year Computer Science Student enrolled in COMSATS University Islmabad.
            
          </p>
          <button> <a href="#contact"> I want to hire </a> </button>
        </div>
      </div>
      <div className="right">
         <img className="hero-image" src={hero} alt="hero"/>
      </div>
    </div>
  );
}

export default Hero;
