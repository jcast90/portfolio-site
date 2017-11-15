import React, { Component } from 'react';

export class Contact extends Component {
  render() {
    return (
      <div className="contact-form-wrapper">
        <span className="section-title">
          Shoot me a message<span className="shock-value">.</span>
        </span>
        <form className="contact-form ">
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
              placeholder="What's your email address?"
              type="text"
              onChange={this.props.change('email')}
            />
          </div>

          <div className="group">
            <textarea
              className="textarea-item"
              placeholder="What do you want to talk about?"
              type="text"
              onChange={this.props.change('message')}
            />
          </div>
          <button
            className="submit-button"
            type="submit"
            onClick={this.props.click}
          >
            Send me some e-mail!
          </button>
        </form>
      </div>
    );
  }
}