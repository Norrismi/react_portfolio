import React from "react";
import "./Author.css";
import Intro from '../Intro/Intro'
import BottomSVG from '../Utility/BottomSVG'
import TopSVG from '../Utility/TopSVG'
import FooterNav from '../Nav/Footer/FooterNav'

import {
  FaLeanpub,
  FaChartBar,
  FaLaptopCode,
  FaLightbulb,
  FaUsers,
  FaPepperHot

} from "react-icons/fa";



const Me = () => {
  return (
 

      <div className="author__container">

        <TopSVG />
        <Intro />
        {/* <hr className="author__hr-break" /> */}
        <h3 className='author__body-title'>A Little Bit About Michael</h3>






        <div className='author__info-container'>
          <div className='author__row'>

            <div className='author__column'>

              <div className='author__about-text'>
                <div>
                  < FaLeanpub className='author__about-icon' />
                </div>
            Life Long Learner
          </div>

              <div className='author__about-text'>
                <div>
                  < FaLightbulb className='author__about-icon' />
                </div>
            Enjoys bringing ideas to life
          </div>

              <div className='author__about-text'>
                <div>
                  <  FaUsers className='author__about-icon' />
                </div>
            Loves to Share Knowledge
          </div>
            </div>



            <div className='author__column'>

              <div className='author__about-text'>
                <div>
                  < FaLaptopCode className='author__about-icon' />
                </div>
          Cryptocurrency Enthusiast
          </div>

              <div className='author__about-text'>
                <div>
                  < FaChartBar className='author__about-icon' />
                </div>
            Stock Market Enthusiast
          </div>

              <div className='author__about-text'>
                <div>
                  < FaPepperHot className='author__about-icon' />
                </div>
              Foodie
          </div>
            </div>
          </div>






        </div>








        <BottomSVG />
        <div className='author__footernav-container'>
          {/* <div>Connect/ Social Media</div> */}
          <FooterNav className='author__footernav'/>
        </div>
      </div>


  );
};

export default Me;
