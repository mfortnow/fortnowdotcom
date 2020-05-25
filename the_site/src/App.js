import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from "react-router-dom";
import GirlsStuff from './girlsstuff';
import Home from './home';
import About from './about';



export default function App() {
  return (
    <Router>
      <div>
        <p>
          yoo
        </p>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/girls_stuff">
            <GirlsStuff />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
