import React, { Component } from 'react';

export class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      appClassName: '',
      portfolioClassName: '',
      cardContentClassName: 'hidden'
    };
    this.clickCardGrow = this.clickCardGrow.bind(this);
    this.changeClickedState = this.changeClickedState.bind(this);
  }
  changeClickedState() {
    this.state.clicked
      ? this.setState({ clicked: false })
      : this.setState({ clicked: true });

    this.clickCardGrow();
  }

  clickCardGrow() {
    if (this.state.clicked === false) {
      this.setState({
        appClassName: 'transform-active',
        portfolioClassName: 'transform-position',
        cardContentClassName: ''
      });
    } else {
      this.setState({
        appClassName: '',
        portfolioClassName: '',
        cardContentClassName: 'hidden'
      });
    }
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
          onClick={this.changeClickedState}
        >
          <h1 className="App-title">{this.props.info.title}</h1>
          <div className={`card-content ${this.state.cardContentClassName}`}>
            <div className="col">
              <h2>Challenge</h2>
              <p>{this.props.info.challenge}</p>
            </div>
            <div className="col">
              <h2>Solution</h2>
              <p>{this.props.info.solution}</p>
            </div>
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
    );
  }
}
