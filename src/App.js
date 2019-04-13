import React, { Component } from 'react';
import './App.scss';
import Masthead from './components/Masthead'
import Navigation from './components/Navigation';
import Work from './components/SectionWork';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Masthead />
        <Navigation />
        <Work />
      </div>
    );
  }
}

export default App;
