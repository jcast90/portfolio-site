import React, { Component } from 'react';
import profile from '../assets/profile-pic2.jpg';

export class About extends Component {
  render() {
    var background = {
      backgroundImage: `url(${profile})`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundRepeat: 'none'
    };
    return (
      <div className="about-section">
        <header className="App-header">
          <h1>
            About Jonathan<span className="shock-value">.</span>
          </h1>
        </header>
        <div className="about-content">
          <div className="about-item image-wrapper">
            <div className="image">
              {' '}
              <img src={profile} />
            </div>
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
                placeholder="Hey, what's your name?"
                type="text"
                onChange={this.props.change('name')}
              />
            </div>
            <div className="group">
              <input
                className="input-item name-input"
                placeholder="What's that contact info? Specifically, Email please."
                type="text"
                onChange={this.props.change('email')}
              />
            </div>

            <div className="group">
              <textarea
                className="textarea-item"
                placeholder="Code..llamas...potential job? The sky's the limit, let's talk."
                type="text"
                onChange={this.props.change('message')}
              />
            </div>
          </form>
          <button
            className="submit-button"
            type="submit"
            onClick={this.props.click}
          >
            Send me some e-mail!
          </button>
        </div>
      </div>
    );
  }
}
