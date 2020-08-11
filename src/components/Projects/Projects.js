import React, { Component } from "react";
import SideNav from "../Nav/SideNav/SideNav";
import Intro from "../Intro/Intro";
import { Link } from "react-router-dom";
import "./Projects.css";
import Utility from "../Utility/Utility";


class Projects extends Component {
  constructor(props){
    super(props);
    this.state={}
  }

  render(props) {
    console.log(this.props.data)
   
    
    //  function handleMap(data){
      //   console.log(data)
      //  }
      
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

              {/* <Utility data={data}/> */}
      
        {/* {projectData.map(project => {
          return(

              <Link to={() => "cars.com"}>
                <div className="card bg-light text-dark">
                  <img
                    className="card-img"
                    // src={}
                    alt="Card "
                  />
                  <div className="card-img-overlay">
                    <h5 className="card-title"> {project.title}</h5>
                    <p className="card-text">
                      Technology Description
                      <ul>
                        <li>
                        {project.description}
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
              </Link>
          )
        })} */}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
