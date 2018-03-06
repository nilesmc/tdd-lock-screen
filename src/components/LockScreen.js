import React, { Component } from 'react';
import ClockDisplay from "./ClockDisplay";

class LockScreen extends Component {
  render() {
    return (
      <div className="LockScreen"
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          backgroundColor: "black",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}>
        <ClockDisplay />
      </div>
    );
  }
}

export default LockScreen;
