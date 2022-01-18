import React, { Component } from "react";
import "./Die.css";
class Dice extends Component {
  render() {
    return (
      <li
        className={`Die fas fa-dice-${this.props.face} ${
          this.props.roll ? "shaking" : ""
        }`}
      />
    );
  }
}
export default Dice;
