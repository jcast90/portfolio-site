import React, { Component } from 'react';

export class Hackathon extends Component {
  render() {
    return (
      <div
        id="hackathon-section"
        className={`portfolio-cards transform ${this.props.portfolioClass}`}
      >
        <div
          className={`app-card ${this.props.appClass}`}
          id="target"
          onClick={this.props.click}
        >
          <h1 className="App-title">Hackathon</h1>
          <h4>ReactJS / NodeJS/ Spotify API / SASS </h4>
          <div className={`card-content ${this.props.cardClass}`}>
            <div className="col-left">
              <h2>Challenge</h2>
              <p>
                The most challenging part was the time constraint on this
                project. With only 72 hours I had to build a fullstack React app
                with two third-party API's. I use a cocktail API and Spotify's
                API to create an app that generates a playlist and cocktail
                based off of the users mood.
              </p>
            </div>
            <div className="col-right">
              <h2>Solution</h2>
              <p>
                To acheive the functionality of this app, I carefully mapped out
                my components and figured out how to pass the corresponding
                props and data down to each one. In order to generate the random
                playlist, I had the user choose a mood. I then stored that
                selection in a variable and passed it back through to Spotify's
                API and used that as a query. Spotify then would return an array
                of 20 playlists matching that mood. Next I created a random
                number generator between the numbers of 0 and 20 and used that
                to randomly generate a playlist for the user.{' '}
              </p>

              <a
                href="https://serene-everglades-94130.herokuapp.com/"
                target="_blank"
              >
                Check out the App{' '}
              </a>
              <a
                href="https://github.com/jcast90/speakeasy-react-hackathon"
                target="_blank"
              >
                Check out the code!{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
