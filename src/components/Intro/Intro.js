import React from "react";
import "./Intro.css";
import MDNpicture from "../../assets/MDN.jpg";


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
          id = 'intro__link'
        >
          Norrismi0@gmail.com
        </a>
        <div className="intro__mission">
          I'm currently seeking opportunities to work, grow and help the
          development community.
        </div>
        <a
          href="https://github.com/Norrismi"
          target="_blank"
          rel="noopener noreferrer"
          id = 'intro__link'
        >
          Github.com/Norrismi
        </a>

      </div>
    </div>
  );
};

export default Intro;
