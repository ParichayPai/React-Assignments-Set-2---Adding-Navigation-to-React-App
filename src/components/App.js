import React, { Component, useState } from "react";
import { Switch, Route, Link, useLocation } from "react-router";
import "../styles/App.css";
import Home from "./Home";
import About from "./About";
import LocationDisplay from "./LocationDisplay";

class App extends Component {
  render() {
    return (
      <div id="main">
        {/* <Link to="/about">About</Link>*/}
        <a href="/about">About</a> <br />
        <a href="/">Home</a>
        <LocationDisplay />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
