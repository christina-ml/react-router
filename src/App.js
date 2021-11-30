import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import './App.css';

function TestComp(){
  return (
    <div>Test Component that's returning JSX</div>
  )
}

function TestTwoComp(){
  return (
    <div>Test 2 Component</div>
  )
}

function App(){
  return(
    <Router>
      <div>
        {/* Navbar */}
        <Link to="/test">Test Link</Link>
        <Link to="/test-two">Test 2 Link</Link>

        {/* Routes */}
        <Switch>
          <Route path="/test">
            <TestComp />
          </Route>
          <Route path="/test-two">
            <TestTwoComp />
          </Route>
        </Switch>

      </div>
    </Router>
  )
}

export default App;