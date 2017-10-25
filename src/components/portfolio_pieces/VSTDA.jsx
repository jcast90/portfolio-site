import React, { Component } from 'react';

export class VSTDA extends Component {
  render() {
    return (
      <div className={`portfolio-cards transform ${this.props.portfolioClass}`}>
        <div
          className={`app-card ${this.props.appClass}`}
          onClick={this.props.click}
        >
          <h1 className="App-title">VSTDA</h1>
          <h2>ReactJS / Bootstrap </h2>
          <div className={`card-content ${this.props.cardClass}`}>
            <div className="col-left">
              <h2>Challenge</h2>
              <p>
                For this project, I had to create a simple todo App. It sounded
                simple enough, however, I needed to build it using React and add
                specific functionality to it. The main functionality was for the
                user to be able to add an item, delete an item, and edit an
                item. This being one of my first React projects, there were a
                lot of challenges that presented themselves. The main one being
                how many components do I make and how do I pass the props down
                to the right component.
              </p>
            </div>
            <div className="col-right">
              <h2>Solution</h2>
              <p>
                Although there was a lot of struggle on this project, I
                definitely learned a lot about React. My first mistake was
                trying to break it down into way too many components, I had to
                take a step back and compile it down to fewer components.
                Another topic I became familiar with was how states and props
                work with several components and how to properly pass them down.
                Overall this was a fun project to work with and helped me
                understand the world of React a lot more.{' '}
              </p>

              <a
                href="https://desolate-stream-60822.herokuapp.com/"
                target="_blank"
              >
                Check out the App
              </a>
              <a
                href="https://github.com/jcast90/startnow-react100-vstda"
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
