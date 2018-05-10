import React, { Component } from "react";
//import ViewData from "./data";
import ChallengeSection from "./challenge-section";

/*  Class to display scoreboard for a single team
*   props: teamName - string
*          teanInfo - array of team scores for various challenges
*          challenges - array of challenge objects
*/

class TeamView extends Component {
  render() {
    const scores = this.props.teamScores;
    const challengeData = this.props.challengeData;

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
        {challengeData.map(challenge => {
          return (
            <ChallengeSection
              challengeData={challenge}
              key={challenge.id}
              challengeId={challenge.id}
              scores={scores}
            />
          );
        })}
      </div>
    );
  }
}

export default TeamView;
