import React from "react";
import SideNav from "../Nav/SideNav/SideNav";
import Intro from "../Intro/Intro";
import './Projects.css'

const Projects = () => {
  return (
    <div className="page-container">
      <div className="navbar sticky-top bg-dark left-side ">
        <SideNav />
      </div>

      <div className="me-container right-side">
        <Intro />
        <br />
        <br />
        <h4 className="edu-title">Projects</h4>
    

        <div className="card bg-dark text-white">
          <img className="card-img" src="..." alt="Card " />
          <div className="card-img-overlay">
            <h5 className="card-title"> Crypto Marketcap app</h5>
            <p className="card-text">
              Technology Description
              <ul>
                <li>
                  React.js app that will help you keep up-to-date with the
                  latest market cap of crypto currencies
                </li>
              </ul>
            </p>
          </div>
        </div>
  

        <div className="card bg-dark text-white">
          <img className="card-img" src="..." alt="Card " />
          <div className="card-img-overlay">
            <h5 className="card-title">Dean Productions</h5>
            <p className="card-text">
            Technology Description
              <ul>
                <li>
                  React.js website made for a friend
                </li>
                  <li>

                  Firebase realtime database for contact and message submissions
                  </li>
              </ul>
            </p>
          </div>
        </div>
     

        <div className="card bg-dark text-white">
          <img className="card-img" src="..." alt="Card " />
          <div className="card-img-overlay">
            <h5 className="card-title">Your Weather</h5>
            <p className="card-text">
            Technology Description
              <ul>
                <li>
                  React.js Weather site
                </li>
                  <li>
                  ***LIST API*** to retreive weather and weather metrics around the world
                  </li>
              </ul>
            </p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Projects;
