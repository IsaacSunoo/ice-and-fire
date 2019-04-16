import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Houses from '../../containers/Houses';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          <Houses />
        </div>
      </div>
    );
  }
}

export default App;
