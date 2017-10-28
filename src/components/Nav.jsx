import React, { Component } from 'react';

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closed: true,
      class: '',
      outerNav: '',
      innerNav: '',
      width: '0'
    };

    this.changeNavState = this.changeNavState.bind(this);
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  changeNavState() {
    this.state.closed
      ? this.setState(
          {
            closed: false,
            class: 'open',
            outerNav: 'outer-nav',
            innerNav: ''
          },
          this.openNav
        )
      : this.setState(
          {
            closed: true,
            class: '',
            outerNav: '',
            innerNav: 'inner-nav'
          },
          this.closeNav
        );
  }
  openNav() {
    this.state.closed === false ? this.setState({ width: '100%' }) : null;
  }
  closeNav() {
    this.state.closed === true ? this.setState({ width: '0%' }) : null;
  }

  render() {
    var divWidth = {
      width: this.state.width
    };
    return (
      <div className="test">
        <div id="myNav" className="overlay" style={divWidth}>
          <a href="#" className="closebtn" onClick={this.changeNavState}>
            <div
              id="nav-icon"
              className={`${this.state.innerNav} ${this.state.class}`}
            >
              <span />
              <span />
              <span />
            </div>
          </a>

          <div className="overlay-content">
            <a href="#home" onClick={this.changeNavState}>
              Home
            </a>
            <a href="#work" onClick={this.changeNavState}>
              Work
            </a>
            <a href="#about" onClick={this.changeNavState}>
              About
            </a>
            <a href="#contact" onClick={this.changeNavState}>
              contact
            </a>
          </div>
        </div>
        <a href="#" className="fixed-menu" onClick={this.changeNavState}>
          <div
            id="nav-icon"
            className={`${this.state.outerNav} ${this.state.class}`}
          >
            <span />
            <span />
            <span />
          </div>
        </a>
      </div>
    );
  }
}
