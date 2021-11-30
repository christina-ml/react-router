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
    <div>The Home Page</div>
  )
}

function ContactPage(){
  return (
    <div>The Contact Us Page</div>
  )
}

function AboutUsPage(){
  return(
    <div>The About Us Page</div>
  )
}


function App(){
  return(
    <Router>
      <div>
        {/* Navbar */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>

        {/* Routes */}
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutUsPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch>

      </div>
    </Router>
  )
}

export default App;