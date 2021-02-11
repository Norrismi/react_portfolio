import React from "react";
import Intro from "../Intro/Intro";
import './Education.css'
import BottomSVG from '../Utility/BottomSVG'
import TopSVG from '../Utility/TopSVG'

const Education = () => {
  return (
    <div className="edu__container">
      

      <div className="me-container right-side">
     
        <TopSVG/>

        <Intro />
        <br />
        <br />
        <div className='edu__info-container'>

        <h4 className="edu__title">Education</h4>
        <br/>
        <br/>

        <div className="edu__school">
          <b>University of Cincinnati</b> • 2009 to 2010
        </div>
        <div className="edu__desc">
          Certificate in Geographical Information System (GIS)
        </div>
        <hr />
        <div className="edu__school">
          <b>University of Cincinnati</b> • 2004 to 2009
        </div>
        <div className=" edu__desc edu__desc-bottom ">Bachelor's of Arts, Geography</div>
        </div>
      
   
      <BottomSVG/>
      </div>
    </div>
  );
};

export default Education;
