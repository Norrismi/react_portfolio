import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./SideNav.css";

const TopNav = () => {
  return (
   
      <div className="page-container sticky-top">
        <nav className="navbar  bg-dark left-side ">
          <Nav className="navbar-nav  sidebar">
            <NavLink
              exact
              to="/Michael_Norris"
              className="d-inline p-2 text-white link "
            >
              Michael Norris
            </NavLink>
            <NavLink to="/work" className="d-inline p-2  text-white link">
          Projects
            </NavLink>
            <NavLink to="/education" className="d-inline p-2  text-white link">
              Education
            </NavLink>
          </Nav>
        </nav>


      </div>
  
  );
};

export default TopNav;
