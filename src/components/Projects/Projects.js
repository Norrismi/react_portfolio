import React, { Component } from "react";

import "./Projects.css";
import StHillaire_Prod from "../../assets/StHillaire_Prod.jpg";
import weatherPic from "../../assets/your_weather.jpg";
import TallGrassland from '../../assets/TallGrassland.jpg'
import BottomSVG from '../Utility/BottomSVG'
import TopSVG from '../Utility/TopSVG'
import FooterNav from '../Nav/Footer/FooterNav'

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

  render() {
    return (

      <div className="projects__container ">
        <TopSVG />
        <div className="projects__cards-container ">
          <h3 className='projects__header'>Projects</h3>
          <div className="projects__cards ">
            {projectData.map((project) => {
              return (
                <div className="card" key={project.id}>
                  <img
                    src={project.source}
                    alt="Card cap"
                  />
                  <div className="card-body">
                    <h5 className="projects__card-title">{project.title}</h5>
                    <p className="projects__card-text">{project.description}</p>
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
        <BottomSVG />
        <div className='projects__footernav-container'>
          <FooterNav />
        </div>
      </div>
    );
  }
}

export default Projects;
