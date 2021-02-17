import React from "react";
import "./Intro.css";
import MDNpicture from "../../assets/MDN.jpg";
import '../Nav/Footer/FooterNav'
import FooterNav from "../Nav/Footer/FooterNav";


const Intro = () => {
  return (
    <div className="intro__container">
      <div className="intro__row">
        <div className='intro__column'>

          {/* <div className='intro__img-container'>

          </div> */}
            <img className='intro__img' src={MDNpicture} alt="author" />
        </div>

        <div className='intro__column'>

          <div className="intro__text-links">
            <div className="intro__name">Michael Norris</div>
            <div className="intro-location">Hilton Head, South Carolina</div>

            <div className="intro__mission-statement">
              I'm currently seeking opportunities to work, grow and help the javascript
              development community.
        </div>


          </div>



      <FooterNav />
        </div>
      </div>










    </div>
  );
};

export default Intro;
