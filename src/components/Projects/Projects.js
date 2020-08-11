import React, { Component } from "react";
import SideNav from "../Nav/SideNav/SideNav";
import Intro from "../Intro/Intro";
import { Link } from "react-router-dom";
import "./Projects.css";
import  Dean_Prod  from "../../assets/Dean-Prod.jpg";

const projectData = [
  {
    id: "1",
    title: "Crypto Marketcap app",
    description:
      "React.js app that will help you keep up-to-date with the latest market cap of crypto currencies",
    link: "https://deanproductions-75095.web.app",
    source: Dean_Prod,
  },
  {
    id: "2",
    title: "Dean Productions",
    description:
      "Firebase realtime database for contact and message submissions",
  },
  {
    id: "3",
    title: "Your Weather",
    description:
      "***LIST API*** to retreive weather and weather metrics around the world",
  },
];

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
  
    return (
      <div className="page-container">
        <div className="navbar sticky-top bg-dark left-side-projects ">
          <SideNav />
        </div>

        <div className="me-container right-side">
          <Intro />
          <br />
          <br />

          <div className="project-cards-container">
            <div className="project-cards">
              <h4 className="edu-title">Projects</h4>

              {projectData.map((project) => {
                return (
                  <Link
                    key={project.id}
                    onClick={() => (window.location = project.link)}
                    to={"#"}
                  >
                    <div
                      className="card bg-light text-dark project-card"
                      key={projectData.id}
                    >
                      <img
                        className="card-img"
                        src={project.source}
                        alt="Card "
                      />
                      <div className="card-img-overlay">
                        <h5 className="card-title"> {project.title}</h5>
                        <div className="card-text">
                          Technology Description
                          <ul>
                            <li>{project.description}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
