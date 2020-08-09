import React from "react";
import SideNav from "../Nav/SideNav/SideNav";
import Intro from "../Intro/Intro";
import './Education.css'

const Education = () => {
  return (
    <div className="page-container">
      <div className="navbar sticky-top bg-dark left-side ">
        <SideNav />
      </div>

      <div className="me-container right-side">
        <Intro />
        <br />
        <br />
        <h4 className="edu-title">Education</h4>
        <br/>
        <br/>

        <div className="edu-school">
          <b>University of Cincinnati</b> • 2009 to 2010
        </div>
        <div className="edu-desc">
          Certificate in Geographical Information System (GIS)
        </div>
        <hr />
        <div className="edu-school">
          <b>University of Cincinnati</b> • 2004 to 2009
        </div>
        <div className=" edu-desc edu-desc-bottom ">Bachelor's of Arts, Geography</div>
      
      </div>
    </div>
  );
};

export default Education;
