import React, { Component, useState } from "react";
import { Switch, Route, Link, useLocation, Redirect } from "react-router-dom";
import "../styles/App.css";
import Home from "./Home";
import About from "./About";
import NoMatch from "./NoMatch";
import LocationDisplay from "./LocationDisplay";

class App extends Component {
  render() {
    return (
      <div id="main">
        <Link to="/about">About</Link> <br />
        {/* <a href="/about">About</a>  */}
        {/* <a href="/">Home</a> */}
        <Link to="/">Home</Link>
        <LocationDisplay />
        <Switch>
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
