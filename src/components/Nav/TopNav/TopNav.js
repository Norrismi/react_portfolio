import React from 'react';
import './TopNav.css'

const TopNav = () => {
    return (
       
            <div className="navbar-expand-lg navbar-dark bg-dark sticky-top top-navbar ">

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
                    aria-expanded="true" aria-label="Toggle navigation"

                >


                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="/">



                </a>
                <div className="collapse navbar-collapse " id="navbarTogglerDemo01">




                    <ul className="navbar-nav ml-auto mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Michael Norris </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/projects">Projects</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/education">Education</a>
                        </li>

                    </ul>
                </div>


            </div>
       
    );
}

export default TopNav;
