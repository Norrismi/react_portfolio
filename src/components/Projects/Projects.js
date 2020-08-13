import React, { Component } from "react";
import SideNav from "../Nav/SideNav/SideNav";
import Intro from "../Intro/Intro";
import { Link } from "react-router-dom";
import "./Projects.css";
import Dean_Prod from "../../assets/Dean-Prod.jpg";
import weatherPic from "../../assets/your_weather.jpg";

const projectData = [
  {
    id: "1",
    title: "Crypto Marketcap app",
    description:
      "React.js app that will help you keep up-to-date with the latest marketcap of crypto currencies",
  },
  {
    id: "2",
    title: "Dean Productions",
    description:
      "Firebase realtime database for contact and message submissions",
    link: "https://deanproductions-75095.web.app",
    source: Dean_Prod,
  },
  {
    id: "3",
    title: "Your Weather",
    description:
      "Used weatherstack.com API to retreive weather and weather metrics around the world",
    link: "https://yourweather-eccfb.web.app",
    source: weatherPic,
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

          <h4 className="edu-title">Projects</h4>
          <div className="project-cards-container ">
            <div className="project-cards ">
              {projectData.map((project) => {
                return (
                  <div className="card" key={project.id}>
                    <img
                      className="card-img-top"
                      src={project.source}
                      alt="Card cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">{project.description}</p>
                      <a
                        href={project.link}
                        className="btn btn-outline-secondary"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
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
