import React from 'react';

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
