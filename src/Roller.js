import React, { Component } from "react";
import Die from "./Die";
class Roller extends Component {
  static defaultProps = {
    sides: ["die1", "die2", "die3", "die4", "die5", "die6"],
  };
  constructor(props) {
    super(props);
    this.state = {
      die1: "one",
      die2: "two",
      die3: "three",
      die4: "four",
      die5: "five",
      die6: "six",
    };
  }
  RandomfaceGenerator() {}
  render() {
    return (
      <div>
        <Die face={this.state.die1} />
        <Die face={this.state.die2} />
        <button onClick="this.RandomFaceGenerator">Roll The Dice</button>
      </div>
    );
  }
}
export default Roller;
