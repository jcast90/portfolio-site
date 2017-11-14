import React, { Component } from 'react';
// import { Polar } from 'react-chartjs-2';
// import Chart from 'chart.js';
//TODO- Remove Chart and chartJS Dependencies

export class Skills extends Component {
  constructor(props) {
    super(props);
  }
  renderChart() {}
  render() {
    return (
      <div className="parallax__group">
        <header className="section-title">
          <span>
            My skills<span className="shock-value">.</span>
          </span>
        </header>
        <div className="parallax__layer parallax__layer--perp">
          <div className="skills-left">
            <ul>
              <li>
                <span class="html5" />
                <em>HTML 5</em>
              </li>
              <li>
                <span class="css3" />
                <em>CSS 3</em>
              </li>
              <li>
                <span class="javascript" />
                <em>Javascript ES6</em>
              </li>
              <li>
                <span class="react" />
                <em>React/Redux</em>
              </li>
            </ul>
          </div>

          <div className="skills-right">
            <ul>
              <li>
                <span class="node" />
                <em>Node/Axios</em>
              </li>
              <li>
                <span class="express" />
                <em>Express</em>
              </li>
              <li>
                <span class="mongo" />
                <em>MongoDB</em>
              </li>
              <li>
                <span class="vim" />
                <em>VIM</em>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
