import React from "react";
import SideNav from "../Nav/SideNav/SideNav";

const Education = () => {
  return (
    <div className="page-container">
      <div className="navbar sticky-top bg-dark left-side ">
        <SideNav />
      </div>

      <div className="me-container right-side">
        <br />
        Hello from Education
      </div>
    </div>
  );
};

export default Education;
