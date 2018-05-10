import React, { Component } from "react";
//import ViewData from "./data";
import ChallengeSection from "./challenge-section";

/*  Class to display scoreboard for a single team
*   props: teamName - string
*          teanInfo - array of team scores for various challenges
*          challenges - array of challenge objects
*/

class TeamView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accordians: {},
      expanded: false
    };
  }

  expandAll() {
    const accordians = this.state.accordians;
    const showOrHide = this.state.expanded ? "hide" : "show";

    for (const key in accordians) {
      if (accordians.hasOwnProperty(key)) {
        accordians[key].collapse(showOrHide);
      }
    }
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const scores = this.props.teamScores;
    const challengeData = this.props.challengeData;
    const accordianObject = this.state.accordians;

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
        <div style={{ textAlign: "right" }}>
          <a
            onClick={() => this.expandAll()}
            style={{
              marginRight: "15px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            {this.state.expanded ? "Collapse " : "Expand "}All
          </a>
        </div>
        <div />
        {challengeData.map(challenge => {
          return (
            <ChallengeSection
              challengeData={challenge}
              key={challenge.id}
              challengeId={challenge.id}
              scores={scores}
              accordianObject={accordianObject}
            />
          );
        })}
      </div>
    );
  }
}

export default TeamView;
