import React, { Component } from 'react';
import { Polar } from 'react-chartjs-2';
import Chart from 'chart.js';

const data = {
  datasets: [
    {
      data: [10, 8, 9, 7, 5, 6, 5, 7],
      backgroundColor: [
        '#D35836',
        '#2F50DC',
        '#F6DE59',
        '#61D5FB',
        '#8DBB39',
        '#000',
        '#3F823C',
        '#CCCCCC'
      ],
      label: 'My Skills' // for legend
    }
  ],
  labels: [
    'HTML',
    'CSS',
    'Javascript ES6',
    'React/Redux/Router',
    'Node/Axios',
    'Express',
    'MongoDB',
    'VIM'
  ]
};

export class Skills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(data.options);
    return (
      <div className="skills-section parallax__group ">
        <header className="section-title">
          <span>
            My skills<span className="shock-value">.</span>
          </span>
        </header>
        <div className="parallax__layer parallax__layer--fore">
          <div className=" content">
            <Polar data={data} />
          </div>
        </div>
      </div>
    );
  }
}
