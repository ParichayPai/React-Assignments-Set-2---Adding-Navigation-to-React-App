// import React, { Component, useState } from "react";
// import { Switch, Route, Link, useLocation, Redirect } from "react-router-dom";
// import "../styles/App.css";
// import Home from "./Home";
// import About from "./About";
// import NoMatch from "./NoMatch";
// import LocationDisplay from "./LocationDisplay";

// class App extends Component {
//   render() {
//     return (
//       <div id="main">
//         <Link to="/about">About</Link> <br />
//         <Link to="/">Home</Link>
//         <LocationDisplay data-testid="location-display" />
//         <Switch>
//           <Route path="/about" component={About} />
//           <Route exact path="/" component={Home} />
//           <Route component={NoMatch} />
//         </Switch>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component, useState } from "react";
import { Route, Switch, useLocation, Link } from "react-router-dom";
import "../styles/App.css";
export function LocationDisplay() {
  let location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
}
function Home() {
  return (
    <>
      <div>You are home</div>
    </>
  );
}
function About() {
  return (
    <>
      <div>You are on the about page</div>
    </>
  );
}

class App extends Component {
  render() {
    return (
      <div id="main">
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route path="/" component={() => <div>No match</div>} />
        </Switch>
        <LocationDisplay />
      </div>
    );
  }
}

export default App;
