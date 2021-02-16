import React from "react";

import './Education.css'
import BottomSVG from '../Utility/BottomSVG'
import TopSVG from '../Utility/TopSVG'
import FooterNav from '../Nav/Footer/FooterNav'

const Education = () => {
  return (
    <div className="edu__container">
      

      <div className="">
     
        <TopSVG/>

    
     
        <div className='edu__info-container'>

        <h4 className="edu__header">Education</h4>
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
        <div class='edu__footernav-container'>
          <FooterNav/>
        </div>
      </div>
    </div>
  );
};

export default Education;
