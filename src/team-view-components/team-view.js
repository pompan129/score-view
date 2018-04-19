import React, { Component } from "react";
import ViewData from "./data";
import ChallengeSection from "./challenge-section";

/*  Class to display scoreboard for a single team
*   props: teamName - string
*          team info  - array of team scores for various challenges
*          challenges - array of challenge objects
*/

class TeamView extends Component {
  render() {
    console.log("ViewData:", ViewData); //todo
    const teanInfo = ViewData.TeamScores[this.props.teamId];
    console.log("teamInfo=", teanInfo); //todo
    const scores = ViewData.TeamScoresMulti[this.props.teamId];
    return (
      <div className="team-view">
        <h1>{this.props.teamName}</h1>
        <div>
          <ul className="breadcrumb" style={{ textAlign: "left" }}>
            <li>
              <a href="https://scoreboard.c-stem.ucdavis.edu">Home</a>
            </li>
            <li className="active">Team Score</li>
          </ul>
        </div>
        {ViewData.ChallengeData.map(challenge => {
          return (
            <ChallengeSection
              challengeData={challenge}
              key={challenge.id}
              scores={scores}
            />
          );
        })}
      </div>
    );
  }
}

export default TeamView;
