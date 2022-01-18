import React, { Component } from "react";
import Die from "./Die";
import "./Roller1.css";
class Roller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sides: ["one", "two", "three", "four", "five", "six"],
      side1: "one",
      side2: "one",
      rolling: false,
    };
    this.RandomFaceGenerator = this.RandomFaceGenerator.bind(this);
  }
  RandomFaceGenerator() {
    let random1 = Math.floor(Math.random() * 6);
    let random2 = Math.floor(Math.random() * 6);
    this.setState({
      side1: this.state.sides[random1],
      side2: this.state.sides[random2],
      rolling: true,
    });
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }

  render() {
    return (
      <div className="Roller">
        <div className="Dieonly">
          <Die face={this.state.side1} roll={this.state.rolling} />
          <Die face={this.state.side2} roll={this.state.rolling} />
        </div>
        <button
          onClick={this.RandomFaceGenerator}
          disabled={this.state.rolling}
        >
          {this.state.rolling ? "Rolling...." : "Roll The Dice"}
        </button>
      </div>
    );
  }
}
export default Roller;
