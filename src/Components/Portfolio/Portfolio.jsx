import React from "react";
import "./portfolio.scss";
import PortfolioData from "./PortfolioData";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <p className="portfolioHeading"> Portfolio </p>
      <div className="wrap">
        {PortfolioData.map((val) => {
          return (
            <div className="card">
              <img className="card-img-top" src={val.image} alt={val.title}/>
              <div className="card-body">
               <p className="card-title">
                   {val.title}
               </p>
                <p className="card-text">
                   {val.details}
                </p>
                <button><a href={val.gitLink}> Click Here  </a></button>
              </div>
            </div>
          );
        })}    
      </div>
    </div>
  );
}
export default Portfolio;
