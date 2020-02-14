import React from 'react';
import './button.scss'

export default class Button extends React.Component {
  render() {
    return (
      <div className="button-container">
        <div className="button">
          <span className="text">{this.props.text}</span>
        </div>
      </div>
    )
  }
}
