import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./SideNav.css";

const SideNav = () => {
  return (
   
      <nav className="navbar sticky-top bg-dark left-side ">
        <Nav className="navbar-nav sidebar">
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
        </Nav>
      </nav>
   
  );
};

export default SideNav;
