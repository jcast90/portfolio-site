import React, { Component } from 'react';

export class About extends Component {
  render() {
    return (
      <div className="about-section">
        <header className="App-header">
          <h1>
            About<span className="shock-value">.</span>
          </h1>
        </header>
        <div className="about-content">
          <div className="about-item image-wrapper">
            <div className="image-circle-border" />
          </div>
          <div className="about-item content-wrapper">
            <p>
              For the past two years I have been teaching myself to code, from
              building Wordpress and HTML sites to Javascript applications. I
              have definitely struggled and learned the importance of
              persistence, problem solving, and even more so, patience. I am
              always learning new technologies, new programming languages,
              frameworks, and even new recipes in the kitchen. Being an avid
              learner, I feel as though this is the career path for me.
            </p>
          </div>
        </div>
        <div className="diagonal-divs">
          <div className="banners banner-3">
            <span>Always Be Outside Your Comfort Zone</span>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <h1>
            Let's Work Together, shoot me a message<span className="shock-value">!</span>
          </h1>
          <form className="contact-form">
            <div className="group">
              <input
                className="input-item name-input"
                placeholder="What's your name?"
                type="text"
              />
            </div>
            <div className="group">
              <input
                className="input-item name-input"
                placeholder="What's your email?"
                type="text"
              />
            </div>

            <div className="group">
              <textarea
                className="textarea-item"
                placeholder="What do you want to talk about?"
                type="text"
              />
            </div>
          </form>
          <button className="submit-button" type="submit">
            Send me some e-mail!
          </button>
        </div>
      </div>
    );
  }
}
