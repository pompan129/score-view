import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TeamView from "./team-view-components/team-view";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <TeamView teamId="277" teamName="Cool Team Name Here" />
      </div>
    );
  }
}

export default App;
