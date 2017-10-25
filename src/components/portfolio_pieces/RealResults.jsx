import React, { Component } from 'react';

export class RealResults extends Component {
  render() {
    return (
      <div
        id="real-results-section"
        className={`portfolio-cards transform ${this.props.portfolioClass}`}
      >
        <div
          className={`app-card ${this.props.appClass}`}
          onClick={this.props.click}
        >
          <h1 className="App-title">Real Results</h1>
          <h4>UI/UX / Graphic Design / Custom WordPress / CSS</h4>
          <div className={`card-content ${this.props.cardClass}`}>
            <div className="col-left">
              <h2>Challenge</h2>
              <p>
                I was approached to re-design a personal trainers website. The
                challenge was to take his current site and come up with a new
                modern look and feel for his industry.
              </p>
            </div>
            <div className="col-right">
              <h2>Solution</h2>
              <p>
                To do this, I researched some of his competitors to come up with
                a more modern design. For starters, his old site was dark with a
                typewriter font choice and there was no organization. One of the
                challenges was organizing all the content properly and then
                coming up with a color scheme. After going back and forth with
                wireframes and designs, we finally settled on one. This new
                design is more organized, has a better user experience, and is
                pleasant to look at.
              </p>

              <a href="http://edityourbody.com/" target="_blank">
                New Site{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
