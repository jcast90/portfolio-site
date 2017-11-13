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
      <div className="about-section parallax__group">
        <header className="section-title">
          <span>
            About Jonathan<span className="shock-value">.</span>
          </span>
        </header>
        <div className="parallax__layer parallax__layer--fore">
          <div className="image">
            <img src={profile} />
          </div>
        </div>
        <div className="parallax__layer parallax__layer--perp">
          <div className="content">
            <p>
              For the past couple of years I have been teaching myself to code,
              from building static HTML sites to React applications. I have
              definitely struggled and learned the importance of persistence,
              problem solving, and even more so, patience. I am always learning
              new technologies, new programming languages, frameworks, and even
              new recipes in the kitchen.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
