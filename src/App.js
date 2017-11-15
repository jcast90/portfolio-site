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
      message: '',
      status: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderThankYou = this.renderThankYou.bind(this);
  }
  handleChange(key) {
    return e => this.setState({ [key]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
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
        console.log('Thank you, your data has been sent! :)');
      })
      .catch(err => {
        console.log(err.message);
      });
    this.setState({
      status: '200'
    });
  }
  renderThankYou() {
    return (
      <div className="thanks">
        <div className="content">
          <span className="section-title">Thanks. Chat Soon!</span>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="App">
        <div className="landscape-mode">
          <h3>
            Can you turn your phone around? You'd be a lot cooler if you did.
          </h3>
        </div>
        <Nav />
        <div className="parallax">
          <div id="home" className="parallax__group">
            <div className="parallax__layer parallax__layer--base">
              <div className="content">
                <h1>
                  Explore. Learn. Create<span className="shock-value">.</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="parallax__group skewUp-banner">
            <div className="section-title">My Creations</div>
            <div className="parallax__layer parallax__layer--back">
              <div className="content">Everything is under CTRL</div>
            </div>
          </div>
          <div id="work" className="parallax__group projects">
            {Projects.map((project, index) => {
              return <Project info={project} key={index} />;
            })}
          </div>
          <div className="parallax__group skewDown-banner">
            <div className="parallax__layer parallax__layer--deep">
              <div className="quote">
                <span>Never Stop Learning and Pushing Bounderies</span>
              </div>
            </div>
          </div>
          <div className="parallax__group spacer">
            <div className="parallax__layer parallax__layer--base" />
          </div>
          <div className="parallax__group skewUp-banner">
            <div className="parrallax__group ">
              <div className="parallax__layer parallax__layer--back">
                <div className="content">
                  <span>Always Be Outside Your Comfort Zone</span>
                </div>
              </div>
            </div>
          </div>

          <div id="about" className="parallax__group skewDown-banner about">
            <About />
          </div>

          <div id="contact" className="parallax__group contact">
            <div className="parallax__layer parallax__layer--base">
              {this.state.status === '200' ? (
                this.renderThankYou()
              ) : (
                <Contact click={this.handleSubmit} change={this.handleChange} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
