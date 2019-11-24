import React from 'react';

export default class Button extends React.Component {
  render() {
    return (
      <div className="button">
        <img src={this.props.img}></img>
      </div>
    )
  }
}