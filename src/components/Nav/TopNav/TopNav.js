import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const TopNav = () => {
  return (
    <nav class="navbar bg-dark">
      <Nav class="navbar-nav">
        <NavLink
          exact
          to="/Michael_Norris"
          className="d-inline p-2 bg-dark text-white d-none"
        >
          Michael Norris
        </NavLink>
        <NavLink to="/work" className="d-inline p-2 bg-dark text-white">
          Work
        </NavLink>
        <NavLink to="/education" className="d-inline p-2 bg-dark text-white">
          Education
        </NavLink>
      </Nav>
    </nav>
  );
};

export default TopNav;
