import React, { Component } from 'react';
import './App.scss';
import Masthead from './components/Masthead'
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Masthead />
        <Navigation />
      </div>
    );
  }
}

export default App;
