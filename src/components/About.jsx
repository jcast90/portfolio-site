import React, { Component } from 'react';

export class About extends Component {
  render() {
    return (
      <div className="about-section">
        <header className="App-header">
          <h1 className="App-title">About</h1>
        </header>
        <div className="about-content">
          <div className="image-circle-border" />
          <p>
            For the past two years I have been teaching myself to code, from
            building Wordpress and HTML sites to Javascript applications. I have
            definitely struggled and learned the importance of persistence,
            problem solving, and even more so, patience. I am always learning
            new technologies, new programming languages, frameworks, and even
            new recipes in the kitchen. Being an avid learner, I feel as though
            this is the career path for me.
          </p>
        </div>
        <div className="contact-form">
          <h2>Let's Work Together, shoot me a message!</h2>
          <input type="text" />Name
          <input type="text" />Email
          <input type="text" />Subject
          <textarea type="text" />
          <button type="submit">Send me some e-mail!</button>
        </div>
      </div>
    );
  }
}
