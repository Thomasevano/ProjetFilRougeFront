import React from 'react';

export default class Button extends React.Component {
  render() {
    return (
      <div className="button-container">
        <div className="button">
          <img src={this.props.img} alt="arrow left"></img>
        </div>
        <span className="text">{this.props.text}</span>
      </div>
      
    )
  }
}