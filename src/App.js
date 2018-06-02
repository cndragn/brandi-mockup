import React, { Component } from 'react';
import {Navigation} from './components/Nav';
import {Jumbotron} from './components/Jumbotron';
import {Features} from './components/Features';
import {Works} from './components/Works';
import {Team} from './components/Team';
import {Facts} from './components/Facts';
import {Contact} from './components/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      < Navigation />
      < Jumbotron />
      < Features />
      < Works />
      < Team />
      < Facts />
      < Contact />
      </div>
    );
  }
}

export default App;
