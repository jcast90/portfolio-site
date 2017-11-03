import React, { Component } from 'react';
import axios from 'axios';
import { About } from './components/About';
import { Skills } from './components/skills';
// import { pushRotate as Menu } from 'react-burger-menu';
import './App.css';
import { Projects } from './components/Projects.jsx';
import { Project } from './components/Project.jsx';
import { Nav } from './components/Nav';

console.log(Projects);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(key) {
    return e => this.setState({ [key]: e.target.value });
  }
  handleSubmit() {
    axios({
      method: 'POST',
      url: '/contact',
      data: {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      }
    })
      .then(response => {
        console.log('data sent');
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  render() {
    return (
      <div className="App">
        <Nav />
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
          <About click={this.handleSubmit} change={this.handleChange} />
        </div>
      </div>
    );
  }
}

export default App;
