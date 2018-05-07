import React, { Component } from "react";
const $ = window.$;
/*  Class to display scoreboard element for a single Challenge
*   for a single team
*
*   props:challengeData - array of challenge objects
*/

class ChallengeSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      final: 0
    };
  }
  componentDidMount() {
    const _this = this;
    this.$node = $(this.refs.accordian);
    this.$node.on("hide.bs.collapse", function() {
      _this.setState({
        open: false
      });
    });
    this.$node.on("show.bs.collapse", function() {
      _this.setState({
        open: true
      });
    });
  }

  toggleAccordianState() {
    this.setState({ open: !this.state.open });
  }

  convertTimestamp(timestamp) {
    let ampm = "am";
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    let date = new Date(timestamp * 1000);
    // Hours part from the timestamp
    let hours = date.getHours();
    if (hours > 12) {
      hours = hours - 12;
      ampm = "pm";
    }
    // Minutes part from the timestamp
    let minutes = "0" + date.getMinutes();

    return `(${hours}:${minutes.substr(-2)}${ampm})`;
  }

  totalScore(scores) {
    console.log("scores-", scores);
    return Object.keys(scores).reduce((acc, curr) => acc + scores[curr], 0);
  }

  getFinalScore(rows) {
    const ts = this.totalScore;
    const maxScore = rows.reduce((max, row) => {
      const newScore = row.abort ? 0 : ts(row.scores);
      return Math.max(max, newScore);
    }, 0);

    return maxScore;
  }

  displayScores(scores) {
    return [0, 1, 2, 3, 4, 5].map((item, index, array) => {
      return (
        <td key={index}>
          {scores
            ? scores[index + 1] === undefined ? "-" : scores[index + 1]
            : "-"}
        </td>
      );
    });
  }

  displaySingleRun({ run, order, numRuns, finalScore }) {
    const total = run.scores ? this.totalScore(run.scores) : 0;

    return (
      <tr key={run.timestamp}>
        <td>{`Run #${order} ${this.convertTimestamp(run.timestamp)}`}</td>
        {run.abort ? (
          <td colSpan="6" style={{ color: "#ccc", backgroundColor: "#f7f7f7" }}>
            Abort
          </td>
        ) : (
          this.displayScores(run.scores)
        )}
        <td>{total}</td>
        {order === 1 ? (
          <td rowSpan={numRuns} style={{ verticalAlign: "middle" }}>
            <h3>{finalScore}</h3>
          </td>
        ) : null}
      </tr>
    );
  }

  displayRuns({ runs, finalScore }) {
    //filter out data from other challenges
    /*  let rows = runs.filter(run => {
      return run.chalId === this.props.challengeData.id;
    });*/

    //if no runs return
    if (!runs.length) {
      return (
        <tr>
          <td style={{ color: "#ccc", backgroundColor: "#f7f7f7" }} colSpan="8">
            No Record
          </td>
        </tr>
      );
    }
    //otherwise figure final score & create row for each run
    const rows = runs.map((run, index, array) => {
      return this.displaySingleRun({
        run,
        order: index + 1,
        numRuns: array.length + 1,
        finalScore
      });
    });

    return rows;
  }

  render() {
    const runs = this.props.scores.filter(run => {
      return run.chalId === this.props.challengeData.id;
    });
    const finalScore = this.getFinalScore(runs);

    return (
      <div>
        <div
          style={{
            textAlign: "left",
            padding: "5px",
            backgroundColor: " #f2f2f2",
            borderBottom: "1px solid #ccc"
          }}
        >
          <span
            style={{ marginRight: "5px" }}
            className={
              "glyphicon " +
              (this.state.open ? "glyphicon-minus " : "glyphicon-plus ")
            }
          />
          <a
            href={`#table${this.props.challengeId}`}
            data-toggle="collapse"
            style={{ fontWeight: "bold", fontSize: "1em" }}
          >
            {this.props.challengeData.display_name}
          </a>

          <span className="pull-right">
            {finalScore}/{this.props.challengeData.points}
            {"  Points"}
          </span>
        </div>
        <div
          id={`table${this.props.challengeId}`}
          className="collapse"
          ref="accordian"
        >
          <table
            className="table table-bordered"
            style={{ marginBottom: "0" }}
            id="demo"
          >
            <tbody>
              <tr>
                <th>Score Elements </th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>Total</th>
                <th>Score</th>
              </tr>
              {this.displayRuns({ runs, finalScore })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ChallengeSection;
