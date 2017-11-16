import React, { Component } from 'react';

export class Project extends Component {
  render() {
    return (
      <div className="parallax__group">
        <div className=" parallax__layer--perp">
          <div className="image">
            <a href={this.props.info.links.site} target="_blank">
              <img src={this.props.info.img} alt="HomePage" />
              <img src={this.props.info.img2} alt="Secondary Page" />
            </a>
            <div className="links">
              <a
                className="links"
                href={this.props.info.links.site}
                target="_blank"
              >
                Check out the App
              </a>
              {this.props.info.links.github.length > 0 ? (
                <a
                  className="links"
                  href={this.props.info.links.github}
                  target="_blank"
                >
                  Check out the code!
                </a>
              ) : null}
            </div>
          </div>
        </div>
        <div className="parallax__layer parallax__layer--fore">
          <div className="content">
            <a href={this.props.info.links.site} target="_blank">
              <h1 className="title">{this.props.info.title}</h1>
            </a>
            <h2>Challenge</h2>
            <p>{this.props.info.challenge}</p>

            <h2>Solution</h2>
            <p>{this.props.info.solution}</p>
            <div className="mobile-links-wrapper">
              <a
                className="mobile-links"
                href={this.props.info.links.site}
                target="_blank"
              >
                Check out the App
              </a>
              {this.props.info.links.github.length > 0 ? (
                <a
                  className="mobile-links"
                  href={this.props.info.links.github}
                  target="_blank"
                >
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
