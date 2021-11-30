import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import './App.css';

// Home
// Contact
// About Us
// Career
// Blog

function HomePage(){
  return (
    <div>Our Home Page</div>
  )
}

function ContactPage(){
  return (
    <div>Our Contact Page</div>
  )
}

function AboutUsPage(){
  return(
    <div>Our About Us Page</div>
  )
}


function App(){
  return(
    <Router>
      <div>
        {/* Navbar */}
        <nav>
          <Link to="/">Home</Link>
        </nav>

        {/* Routes */}
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutUsPage />
          </Route>
        </Switch>

      </div>
    </Router>
  )
}

export default App;