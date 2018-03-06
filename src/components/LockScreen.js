import React, { Component } from 'react';
import ClockDisplay from "./ClockDisplay";

class LockScreen extends Component {
  render() {
    return (
      <div className="LockScreen">
        <ClockDisplay />
      </div>
    );
  }
}

export default LockScreen;
