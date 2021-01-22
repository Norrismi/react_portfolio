import React from "react";
import Projects from "../Projects/Projects";


const Utility = (data) => {
 
   const projectData= [
      {
        id: "1",
        title: "Crypto Marketcap app",
        description:
          "React.js app that will help you keep up-to-date with the latest market cap of crypto currencies",
      },
      {
        id: "2",
        title: "Dean Productions",
        description:
          "Firebase realtime database for contact and message submissions",
      },
      {
        id: "3",
        title: "Your Weather",
        description:
          "***LIST API*** to retreive weather and weather metrics around the world",
      },
    ];


  return <Projects projectData={data} />;
};

export default Utility;