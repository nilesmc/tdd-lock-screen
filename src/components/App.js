import React, { Component } from 'react';
import LockScreen from './LockScreen';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Lockscreen</h1>
        </header>
        <LockScreen />
      </div>
    );
  }
}

export default App;
