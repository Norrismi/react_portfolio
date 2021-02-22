import React, { Component } from "react";

import "./Projects.css";
import BottomSVG from '../Utility/BottomSVG'
import TopSVG from '../Utility/TopSVG'
import FooterNav from '../Nav/Footer/FooterNav'
import data from '../Utility/Data'


class Projects extends Component {


  render(props) {

    return (

      <div className="projects__container ">
        <TopSVG />
        <div className="projects__cards-container ">
          <h3 className='projects__header'>Projects</h3>
          <div className="projects__cards ">
            {data.map((project) => {
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
