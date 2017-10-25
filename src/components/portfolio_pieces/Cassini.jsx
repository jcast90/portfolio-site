import React, { Component } from 'react';

export class Cassini extends Component {
  render() {
    return (
      <div
        id="cassini-section"
        className={`portfolio-cards transform ${this.props.portfolioClass}`}
      >
        <div
          className={`app-card ${this.props.appClass}`}
          onClick={this.props.click}
        >
          <h1 className="App-title">Cassini: A Responsive Framework</h1>
          <h4 className="light-text">
            HTML / CSS / SASS / JavaScript / jQuery / Gulp
          </h4>
          <div className={`card-content ${this.props.cardClass}`}>
            <div className="col-left">
              <h2>Challenge</h2>
              <p>
                This was a class project in which we had to create a responsive
                framework. The challenge here was figuring out how to create a
                framework that would be responsive for all devices but also be
                light weight.
              </p>
            </div>
            <div className="col-right">
              <h2>Solution</h2>
              <p>
                Creating a responsive framework was a lot harder than I
                imagined. I was the team lead on this project and designated
                everyone with tasks and made sure deadlines were met. I was in
                charge of actually making it responsive. To do this, I had to
                figure out the various breakpoints and then create a grid system
                that would work on all devices. Not only did I have to create a
                responsive grid, but I also had to create a JavaScript plugin
                and CSS components. In about 30 days we had a responsive
                framework built, the next step was to build the support page
                using WordPress. Here is a link to our support page:{' '}
                <a href="www.cassini.site" target="_blank">
                  www.cassini.site
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
