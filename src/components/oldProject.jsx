import React, { Component } from 'react';

export class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      appClassName: '',
      portfolioClassName: '',
      cardContentClassName: 'hidden',
      clickFlipper: 'false',
      flipped: ''
    };
    this.changeClickedState = this.changeClickedState.bind(this);
    this.cardFlipper = this.cardFlipper.bind(this);
  }
  changeClickedState(e) {
    if (e.target.id === 'card-click') {
      this.state.clicked
        ? this.setState({
            clicked: false,
            appClassName: '',
            portfolioClassName: '',
            cardContentClassName: 'hidden'
          })
        : this.setState({
            clicked: true,

            appClassName: 'transform-active',
            portfolioClassName: 'transform-position',
            cardContentClassName: ''
          });
    } else {
      console.log('this works');
    }

    console.log(e.target);
  }
  cardFlipper(e) {
    this.state.clickFlipper
      ? this.setState({
          clickFlipper: false,
          flipped: 'flipped'
        })
      : this.setState({
          clickFlipper: true,
          flipped: ''
        });
  }

  render() {
    var backgroundImg = {
      backgroundImage: `url(${this.props.info.img})`,
      backgroundRepeat: 'none',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    };
    return (
      <div
        className={`portfolio-cards transform ${this.state.portfolioClassName}`}
        style={backgroundImg}
      >
        <div
          className={`app-card ${this.state.appClassName}`}
          id="card-click"
          onClick={this.changeClickedState}
          data-parent={this.props.info.title}
        >
          <div className={`card-content ${this.state.cardContentClassName}`}>
            <h1 className="App-title">{this.props.info.title}</h1>
            <div className="flip-container">
              <div
                className={`flipper ${this.state.flipped}`}
                onClick={this.cardFlipper}
              >
                <div className="col">
                  <div className="front">
                    <h2>Challenge</h2>
                    <p>{this.props.info.challenge}</p>
                  </div>
                </div>
                <div className="back">
                  <div className="col">
                    <h2>Solution</h2>
                    <p>{this.props.info.solution}</p>

                    <div className="links">
                      <a href={this.props.info.links.site} target="_blank">
                        Check out the App
                      </a>
                      {this.props.info.links.github.length > 0 ? (
                        <a href={this.props.info.links.github} target="_blank">
                          Check out the code!
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
