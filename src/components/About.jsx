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
        <header className="section-title">
          <span>
            About Jonathan<span className="shock-value">.</span>
          </span>
        </header>
        <div class="parallax__layer parallax__layer--perp">
          <div className="content">
            <div className="image">
              <img src={profile} />
            </div>
          </div>
        </div>
        <div class="parallax__layer parallax__layer--fore">
          <div className="content">
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
      </div>
    );
  }
}
