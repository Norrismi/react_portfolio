import React from "react";
import "./Intro.css";
import MDNpicture from "../../assets/MDN.jpg";
import { Link } from 'react-router-dom'
import {
  FaGithub,
  FaCode,
  FaLinkedin

} from "react-icons/fa";

const Intro = () => {
  return (
    <div className="intro__container">
      <div>
        <img className='intro__img' src={MDNpicture} alt="author" />

      </div>
      <div className="intro__text-links">
        <div className="intro__name">Michael Norris</div>
        <div className="intro-location">Hilton Head, SC</div>
        <a
          href="mailto:Norrismi0@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          id='intro__link'
        >
          Norrismi0@gmail.com
        </a>
        <div className="intro__mission">
          I'm currently seeking opportunities to work, grow and help the
          development community.
        </div>

        <div className='intro__icon-container'>
          <div className='intro__github'>
            <a
              href="https://github.com/Norrismi"
              target="_blank"
              rel="noopener noreferrer"
              alt='GitHub'
              title='GitHub'
            >
              <FaGithub id='intro__icon' />
            </a>
          </div>


          <div className='intro__linkedin'>
            <a
              href="https://bit.ly/3q8QbAG"
              target="_blank"
              rel="noopener noreferrer"
              alt='LinkedIn'
              title='LinkedIn'
            >

              <FaLinkedin id='intro__icon' />
              <span title='LinkedIn' ></span>
            </a>
          </div>
          <div className='intro__codewars'>
            <a
              href="https://www.codewars.com/users/Norrismi"
              target="_blank"
              rel="noopener noreferrer"
              alt='CodeWars'
              title='CodeWars Profile'
            >
              <FaCode id='intro__icon' />
            </a>
          </div>





        </div>




      </div>
    </div>
  );
};

export default Intro;
