import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./SideNav.css";

const SideNav = () => {
  return (
    <div className='sidebar__container'>


      {/* <div className="navbar-expand-lg navbar-dark bg-dark sticky-top sidenav__links">

        <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
          aria-expanded="true" aria-label="Toggle navigation"

        >


          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">



        </a>
        <div className="collapse navbar-collapse " id="navbarTogglerDemo01">

          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
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
      </div> */}


      <nav className="navbar sticky-top bg-dark left-side  ">
   

        <Nav className="navbar-nav sidebar  collapseOnSelect ">
          <NavLink
            exact
            to="/"
            className="d-inline p-3 text-white  link nav-link "
          >
            Michael Norris
          </NavLink>
          <NavLink to="/projects" className="d-inline p-3  text-white link">
            Projects
          </NavLink>
          <NavLink to="/education" className="d-inline p-3  text-white link">
            Education
          </NavLink>
        </Nav >
      </nav>

    </div>

  );
};

export default SideNav;
