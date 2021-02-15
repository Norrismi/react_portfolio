import React from 'react';
import './FooterNav.css'
import {
    FaGithub,
    FaCode,
    FaLinkedin,
    FaAt

} from "react-icons/fa";

const FooterNav = () => {
    return (
        <div className='footer__icon-container'>




            <div className='intro__github fa-spin'>
                <a
                    href="https://github.com/Norrismi"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt='GitHub'
                    title='GitHub'
                >
                    <FaGithub id='footer__icon' />
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

                    <FaLinkedin id='footer__icon' />
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
                    <FaCode id='footer__icon' />
                </a>
            </div>

            <div className='intro__email'>
                <a
                    href="mailto:Norrismi0@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt='Email'
                    title='Email'
                >
                    <FaAt id='footer__icon' />
                </a>
            </div>




        </div>
    );
}

export default FooterNav;
