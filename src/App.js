import React, { Component } from 'react';
import axios from 'axios';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Skills } from './components/skills';
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
        <div className="parallax">
          <div id="home" class="parallax__group">
            <div class="parallax__layer parallax__layer--base">
              <div class="content">
                <h1>
                  Explore. Learn. Create<span className="shock-value">.</span>
                </h1>
              </div>
            </div>
          </div>
          <div class="parallax__group skewUp-banner">
            <div class="section-title">My Creations</div>
            <div class="parallax__layer parallax__layer--back">
              <div class="content">Cool Quote</div>
            </div>
          </div>
          <div className="parallax__group projects">
            {Projects.map(project => {
              return <Project info={project} key={project.title} />;
            })}
          </div>
          <div className="parallax__group skewDown-banner">
            <div className="parallax__layer parallax__layer--deep">
              <div className="quote">
                <span>Never Stop Learning and Pushing Bounderies</span>
              </div>
            </div>
          </div>
          <div class="parallax__group spacer">
            <div class="parallax__layer parallax__layer--base" />
          </div>
          <div class="parallax__group skewUp-banner">
            <div class="parrallax__group ">
              <div class="parallax__layer parallax__layer--back">
                <div class="content">
                  <span>Always Be Outside Your Comfort Zone</span>
                </div>
              </div>
            </div>
          </div>
          <div class="parallax__group spacer">
            <div class="parallax__layer parallax__layer--base">
              <div class="content">
                <Skills />
              </div>
            </div>
          </div>
          <div class="parallax__group skewDown-banner">
            <About />
          </div>

          <div class="parallax__group contact">
            <div class="parallax__layer parallax__layer--base">
              <div class="content">
                <Contact click={this.handleSubmit} change={this.handleChange} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
