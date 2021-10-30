import React from "react";
import "./skills.scss";
import SkillsData from "./SkillsData";

function Work() {
  return (
<div className="container-fluid">
<div className="container">
      <div className="work" id="work">
        <p className="topHeading"> Skills </p>
        {SkillsData.map((val) => {
          return (
            <div className="card">
              <ul>
                <li>
                  <span> {val.icon} </span> 
                </li>
                <li> {val.title} </li>
                <li> {val.details} </li>
              </ul>
            </div>   
          );
        })}
      </div>
    </div>
</div>
  
  );
}

export default Work;
