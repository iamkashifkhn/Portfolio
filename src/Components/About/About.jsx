import React from "react";
import "./about.scss";
import kashif from "../../images/kashif.png";
import {BiRightArrow} from '../../../node_modules/react-icons/bi'

function About() {
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="main">
          <p className="main1"> Who am I? </p>
          <p className="main-heading"> I am <span>Kashif Usman </span> a Frontend Developer, Graphic
              Desinger and Wordpress Developer 
          </p>
          <p className="aboutme">
              I'm a Final Year Computer Science student enrolled in COMSATS
              University, Islamabad. I have been developing web apps for over
              1 years now. I have worked on several semester projects and few
              Local Projects. I am currently working on my Final year project 
              which is totally a web based application to help students to find 
              resources for academic use.   
            </p> 
            <hr/>
            <p className="redHeading"> Techonologies I have worked with </p>
            <ul>
              <li> <BiRightArrow className="red"/> Html </li>
              <li> <BiRightArrow className="red"/> CSS3 </li>
              <li> <BiRightArrow className="red"/> Bootstrap </li>
              <li> <BiRightArrow className="red"/> React.JS </li>
              <li> <BiRightArrow className="red"/> Node.JS </li>
              <li> <BiRightArrow className="red"/> MongoDB </li>
            </ul>
            <hr/>
            <div className="aboutDown">
                <p className="name"> <b> Name : </b> Kashif Usman </p>
                <p className="email"> <b> Email: </b> usmankashif544@gmail.com</p>
            </div>
        </div>
      </div>
      <div className="right">
        <img src={kashif} alt="kashif" />
      </div>
    </div>
  );
}
export default About;
