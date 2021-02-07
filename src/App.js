import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Author from "./components/Author/Author";
import Education from "./components/Education/Education";
import Projects from './components/Projects/Projects'
import NotFound from './components/Nav/NotFound/NotFound'



function App() {
  return (
 
    <Router>
      {/* <SideNav/> */}
      <Switch>
        <Route path="/education" component={Education} />
        <Route path="/projects" component={Projects} />
        <Route exact path="/" component={Author} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
