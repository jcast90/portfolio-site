import React, { Component } from 'react';
import profile from '../assets/profile-pic.jpg';

export class About extends Component {
  render() {
    return (
      <div className="about-section parallax__group">
        <header className="section-title">
          <span>
            About Jonathan<span className="shock-value">.</span>
          </span>
        </header>
        <div className="parallax__layer parallax__layer--fore">
          <div className="image">
            <img src={profile} alt="profile-pic" />
          </div>
        </div>
        <div className="parallax__layer parallax__layer--perp">
          <div className="content">
            <p>
              Born in Alabama, raised in Uruguay. When I'm not coding I'm
              cooking, in fact, I was trained as a chef before I found my
              passion for coding. Also, sometimes I have a mohawk.
            </p>
            <span> Some Things I'm Good At:</span>
            <ul>
              <li>JS ES6</li>
              <li>React</li>
              <li>Node</li>
              <li>Sass</li>
              <a href="#contact">
                <li>& more...</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
