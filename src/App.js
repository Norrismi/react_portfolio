import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Me from "./components/Me/Me";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import NotFound from './components/Nav/NotFound/NotFound'
// import SideNav from './components/Nav/SideNav/SideNav'


function App() {
  return (
 
    <Router>
      {/* <SideNav/> */}
      <Switch>
        <Route path="/Michael_Norris" component={Me} />
        <Route path="/projects" component={Projects} />
        <Route path="/education" component={Education} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
