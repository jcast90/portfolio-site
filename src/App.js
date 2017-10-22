import React, { Component } from 'react';
import logo from './logo.svg';
import {Hackathon} from './components/portfolio_pieces/Hackathon';
import {Mortgage} from './components/portfolio_pieces/Mortgage';
import {VSTDA} from './components/portfolio_pieces/VSTDA';
import {Wordpress} from './components/portfolio_pieces/Wordpress';
import {About} from './components/About';
import {Skills} from './components/skills';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Portfolio Site</h1>
        </header>
        <div id='hero'></div>
        <div class="banners banner-1">
          <span>Never Stop Learning and Pushing Bounderies</span>
        </div>
        <div id='portfolio'>
          <div class="portfolio-cards">
            <Hackathon/>
          </div>
          <div class="portfolio-cards"> <Mortgage/></div>
          <div class="portfolio-cards"> <VSTDA/></div>
          <div class="portfolio-cards"> <Wordpress/></div>
        </div>
        <div class="banners banner-2">
        <span>Never Be Comfortable</span>
        </div>
        <div id='skills'>
          <Skills />
        </div>
        <div class="banners banner-3">
        <span>Always Be Outside Your Comfort Zone</span>
        </div>
        <div id='about'>
          <About />
        </div>


      </div>
    );
  }
}

export default App;
