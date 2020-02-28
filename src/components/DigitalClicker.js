import React from 'react';
 
class DigitalClicker extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      timesClicked: 0
    };
  }
 
  handleClick = () => {
    this.setState(previousState => {
        return {
            timesClicked: previousState.timesClicked + 1
        }
      }) 
  };
 
  render() {
    return (
      <div>
        <p>Click the button!</p>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}
 
export default DigitalClicker;
