import React, { Component } from 'react';

export class Mortgage extends Component {
  render() {
    return (
      <div
        id="mortgage-section"
        className={`portfolio-cards transform ${this.props.portfolioClass}`}
      >
        <div
          className={`app-card ${this.props.appClass}`}
          onClick={this.props.click}
        >
          <h1 className="App-title">Change Calculator</h1>
          <h4>ReactJS / Bootstrap </h4>
          <div className={`card-content ${this.props.cardClass}`}>
            <div className="col-left">
              <h2>Challenge</h2>
              <p>
                My task for this project was to create a change calculator that
                determined if the amount received matched the amount owed. If
                not, then a display would alert the customer how much money they
                owed or were due.
              </p>
            </div>
            <div className="col-right">
              <h2>Solution</h2>
              <p>
                To achieve this, I had to also calculate how much change would
                be given in cents and dollars.
              </p>

              <a
                href="https://desolate-stream-60822.herokuapp.com/"
                target="_blank"
              >
                Check out the App
              </a>
              <a
                href="https://github.com/jcast90/startnow-react100-mortgage"
                target="_blank"
              >
                Check out the code!
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
