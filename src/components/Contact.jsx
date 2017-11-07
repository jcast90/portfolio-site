import React, { Component } from 'react';

export class Contact extends Component {
  render() {
    return (
      <div className="contact-form-wrapper">
        <h1>
          Let's Work Together, shoot me a message<span className="shock-value">!</span>
        </h1>
        <form className="contact-form">
          <div className="group">
            <input
              className="input-item name-input"
              placeholder="Hey, what's your name?"
              type="text"
              onChange={this.props.change('name')}
            />
          </div>
          <div className="group">
            <input
              className="input-item name-input"
              placeholder="What's that contact info? Specifically, Email please."
              type="text"
              onChange={this.props.change('email')}
            />
          </div>

          <div className="group">
            <textarea
              className="textarea-item"
              placeholder="Code..llamas...potential job? The sky's the limit, let's talk."
              type="text"
              onChange={this.props.change('message')}
            />
          </div>
        </form>
        <button
          className="submit-button"
          type="submit"
          onClick={this.props.click}
        >
          Send me some e-mail!
        </button>
      </div>
    );
  }
}
