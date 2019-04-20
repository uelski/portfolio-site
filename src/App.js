import React, { Component } from 'react';
import './App.scss';
import Masthead from './components/Masthead'
import Navigation from './components/Navigation';
import Work from './components/SectionWork';
import Music from './components/SectionMusic';
import Paintings from './components/SectionPaintings';
import Contact from './components/SectionContact';
import Footer from './components/SectionFooter';
import Bio from './components/Bio';

class App extends Component {
  constructor(props) {
    super(props)
    this.contactRef = React.createRef();
    this.workRef = React.createRef();
    this.musicRef = React.createRef();
    this.paintingRef = React.createRef();
    this.bioRef = React.createRef();
  }
  render() {
    return (
      <div className="App">
        <Masthead workRef={this.workRef} musicRef={this.musicRef} bioRef={this.bioRef}  />
        <Navigation workRef={this.workRef} musicRef={this.musicRef} bioRef={this.bioRef} paintingRef={this.paintingRef}  contactRef={this.contactRef} />
        <Bio refPass={this.bioRef} />
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
