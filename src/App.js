import React, { Component } from 'react';
import './App.scss';
import Masthead from './components/Masthead'
import Navigation from './components/Navigation';
import Work from './components/SectionWork';
import Music from './components/SectionMusic';
import Paintings from './components/SectionPaintings';
import Contact from './components/SectionContact';
import Footer from './components/SectionFooter';

class App extends Component {
  constructor(props) {
    super(props)
    this.contactRef = React.createRef();
    this.workRef = React.createRef();
    this.musicRef = React.createRef();
    this.paintingRef = React.createRef();
  }
  render() {
    return (
      <div className="App">
        <Masthead workRef={this.workRef} musicRef={this.musicRef}  />
        <Navigation workRef={this.workRef} musicRef={this.musicRef} paintingRef={this.paintingRef}  contactRef={this.contactRef} />
        <Work refPass={this.workRef} />
        <Music refPass={this.musicRef} />
        <Paintings refPass={this.paintingRef} />
        <Contact refPass={this.contactRef} />
        <Footer />
      </div>
    );
  }
}

export default App;
