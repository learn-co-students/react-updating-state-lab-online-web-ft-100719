import React, { Component } from 'react';

export default class DigitalClicker extends Component {
  constructor() {
    super()

    this.state = {
      timesClicked: 0,
    }
  }

  handleButtonClick = () => {
    this.setState(previousState => ({
      timesClicked: previousState.timesClicked + 1
    }))
  }

  render() {
    return (
      <button onClick={this.handleButtonClick}>{this.state.timesClicked}</button>
    )
  }
}
