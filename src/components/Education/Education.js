import React from "react";

import './Education.css'
import BottomSVG from '../Utility/BottomSVG'
import TopSVG from '../Utility/TopSVG'
import FooterNav from '../Nav/Footer/FooterNav'

const Education = () => {
  return (
    <div className="edu__container">



      <TopSVG />

        <h3 className="edu__header">Education</h3>
     
      <div className='edu__info-container'>


        {/* • */}

        <div className="edu__school">
          <b>University of Cincinnati</b>
          <div>
            2009 to 2010
          </div>
        </div>
        <div className="edu__desc">
          Certificate in Geographical Information System (GIS)
        </div>



        <div className="edu__school">
          <b>University of Cincinnati</b>
          <div>
            2004 to 2009
            </div>
        </div>
        <div className=" edu__desc">Bachelor's of Arts, Geography</div>
      </div>

      {/* <div>
        asdfasdf ;kasd kf ;askdjf;kasd ;aksdjf ljhsdfljhas lajsdhf lasjkdhf lakjshdf laksjdhf lasjdhf 
        lajksdhf ljhsdf ljkh asdlfjkhasljdh alsdjhf lasjdhf lkjhas dfljhasdj 
        jhasdfjh ljhasdjf ljhsdf lkjhasljdf ljhsdjkfjh ljakljdhflk 
        asdfasdlfhj asdfadsjhasdfasdlhj asdfkljh asdfkjhlkjh asdf lkjhasdf 
        ljhaslkjh asdf lkjh asdf lkjh asdf lkjh asdf ljhasdf
        </div> */}

      <BottomSVG />
      <div class='edu__footernav-container'>
        <FooterNav />
      </div>


    </div>
  );
};

export default Education;
