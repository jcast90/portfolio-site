import React, { Component } from 'react';
import logo from './logo.svg';
import { Hackathon } from './components/portfolio_pieces/Hackathon';
import { VSTDA } from './components/portfolio_pieces/VSTDA';
import { Cassini } from './components/portfolio_pieces/Cassini';
import { RealResults } from './components/portfolio_pieces/RealResults';
import { About } from './components/About';
import { Skills } from './components/skills';
import { pushRotate as Menu } from 'react-burger-menu';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      appClassName: '',
      portfolioClassName: '',
      cardContentClassName: 'hidden'
    };
    this.clickCardGrow = this.clickCardGrow.bind(this);
    this.changeClickedState = this.changeClickedState.bind(this);
  }
  changeClickedState(id) {
    alert(id);
    this.state.clicked
      ? this.setState({ clicked: false })
      : this.setState({ clicked: true });

    this.clickCardGrow();
  }

  clickCardGrow() {
    if (this.state.clicked === false) {
      this.setState({
        appClassName: 'transform-active',
        portfolioClassName: 'transform-position',
        cardContentClassName: ''
      });
    } else {
      this.setState({
        appClassName: '',
        portfolioClassName: '',
        cardContentClassName: 'hidden'
      });
    }
  }
  render() {
    return (
      <div id="outer-container" className="App">
        <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="work" className="menu-item" href="#portfolio">
            Work
          </a>
          <a id="about" className="menu-item" href="#skills">
            Skills
          </a>
          <a id="about" className="menu-item" href="#about">
            About
          </a>
          <a id="contact" className="menu-item" href="#about">
            Contact
          </a>
        </Menu>
        <main id="page-wrap">
          <div id="hero">
            <h1>
              Explore. Learn. Create<span className="shock-value">.</span>
            </h1>
          </div>
          <div className="diagonal-divs">
            <div className="banners banner-1">
              <span>Never Stop Learning and Pushing Bounderies</span>
            </div>
          </div>
          <div className="portfolio-wrapper" id="portfolio">
            <h1>My Creations</h1>
            <div id="portfolio-cards-wrapper">
              <Hackathon
                click={this.changeClickedState}
                appClass={this.state.appClassName}
                portfolioClass={this.state.portfolioClassName}
                cardClass={this.state.cardContentClassName}
              />
              <VSTDA
                click={this.changeClickedState}
                appClass={this.state.appClassName}
                portfolioClass={this.state.portfolioClassName}
                cardClass={this.state.cardContentClassName}
              />
              <Cassini
                click={this.changeClickedState}
                appClass={this.state.appClassName}
                portfolioClass={this.state.portfolioClassName}
                cardClass={this.state.cardContentClassName}
              />
              <RealResults
                click={this.changeClickedState}
                appClass={this.state.appClassName}
                portfolioClass={this.state.portfolioClassName}
                cardClass={this.state.cardContentClassName}
              />
            </div>
          </div>
          <div className="diagonal-divs">
            <div className="banners banner-2">
              <span>Never Be Comfortable</span>
            </div>
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div className="diagonal-divs">
            <div className="banners banner-3">
              <span>Always Be Outside Your Comfort Zone</span>
            </div>
          </div>
          <div id="about">
            <About />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
