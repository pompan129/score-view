import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TeamView from "./team-view-components/team-view";
import ViewData from "./team-view-components/data";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <TeamView
          teamId="277"
          teamName="Cool Team Name Here"
          ViewData={ViewData}
          challengeData={ViewData.ChallengeData}
          teamScores={ViewData.TeamScoresMulti[277]}
        />
      </div>
    );
  }
}

export default App;
