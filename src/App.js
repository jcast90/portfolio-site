import React, { Component } from 'react';
import { About } from './components/About';
import { Skills } from './components/skills';
import { pushRotate as Menu } from 'react-burger-menu';
import './App.css';
import { Projects } from './components/Projects.jsx';
import { Project } from './components/Project.jsx';

console.log(Projects);
class App extends Component {
  constructor(props) {
    super(props);
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
            <h1>
              My Creations<span className="shock-value">.</span>
            </h1>
            <div id="portfolio-cards-wrapper">
              {Projects.map(project => {
                return <Project info={project} key={project.title} />;
              })}
            </div>
          </div>
          <div className="diagonal-divs">
            <div className="banners banner-2">
              <span>Never Be Comfortable</span>
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
