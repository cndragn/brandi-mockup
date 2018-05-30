import React, { Component } from 'react';
import {Navigation} from './components/Nav';
import {Jumbotron} from './components/Jumbotron';
import {Features} from './components/Features';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      < Navigation />
      < Jumbotron />
      < Features />
        <header className="App-header">
        
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
