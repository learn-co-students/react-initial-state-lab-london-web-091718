// your Bomb code here!

import React, { Component } from "react";

export default class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: this.props.initialCount
    };
  }

  render() {
    return this.state.secondsLeft ? (
      <h1>{this.state.secondsLeft} seconds left before I go boom!</h1>
    ) : (
      <h1>Boom!</h1>
    );
  }
}
