import React, { Component } from "react";
import SideNav from "../Nav/SideNav/SideNav";
import Intro from "../Intro/Intro";
import "./Projects.css";
import StHillaire_Prod from "../../assets/StHillaire_Prod.jpg";
import weatherPic from "../../assets/your_weather.jpg";
import TallGrassland from '../../assets/TallGrassland.jpg'
import BottomSVG from '../Utility/BottomSVG'
import TopSVG from '../Utility/TopSVG'

const projectData = [
  {
    id: "1",
    title: "TallGrassland.com",
    description:
      "Real Estate website, uses React Redux for state management, Google Cloud Firestore and Google Cloud Storage",
    link: 'https://tallgrassland.com',
    source: TallGrassland

  },
  {
    id: "2",
    title: "St. Hillaire Productions",
    description:
      "React and Node app utilizing Node Mailer to keep business owner up-to-date on website submissions. Submissions are backed up with Google Firebase Realtime Database.",
    link: "https://deanproductions-75095.web.app",
    source: StHillaire_Prod,
  },
  // {
  //   id: "3",
  //   title: "Crypto Marketcap app",
  //   description:
  //     "React.js app that will help you keep up-to-date with the latest marketcap of crypto currencies",
  // },
  {
    id: "4",
    title: "Your Weather",
    description:
      "Used weatherstack API to retreive weather and weather metrics around the world",
    link: "http://your-weather7.herokuapp.com/",
    source: weatherPic,
  },
];

class Projects extends Component {

  state = {};

  render() {
    return (

      <div className="page-container  ">


        <div className="navbar sticky-top bg-dark left-side-projects ">
          <SideNav />
        </div>



        <div className="me-container right-side">
          <div style={{ overflow: "hidden", backgroundColor: "lightblue", zindex: "-1", position: 'relative' }}>

            <TopSVG />

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
                          target="_blank"
                          rel="noopener noreferrer"
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

          <BottomSVG />

        </div>

      </div>
    );
  }
}

export default Projects;
