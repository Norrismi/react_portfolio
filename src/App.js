import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Me from "./components/Me/Me";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import NotFound from './components/Nav/NotFound/NotFound'
import TopNav from './components/Nav/TopNav/TopNav'


function App() {
  return (
 
    <Router>
      <TopNav/>
      <Switch>
        <Route path="/Michael_Norris" component={Me} />
        <Route path="/work" component={Work} />
        <Route path="/education" component={Education} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
