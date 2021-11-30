import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import './App.css';

function TestComp(){
  return (
    <div>Test Component that's returning JSX</div>
  )
}

function App(){
  return(
    <Router>
      <div>
        {/* Navbar */}
        <Link to="/test">Test Link</Link>

        {/* Routes */}
        <Switch>
          <Route path="/test">
            <TestComp />
          </Route>
        </Switch>

      </div>
    </Router>
  )
}

export default App;