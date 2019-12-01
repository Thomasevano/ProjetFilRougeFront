import React from 'react';

export default class Button extends React.Component {
  render() {
    return (
      <div className="primaryButton">
        <div className="button">
          <img src={this.props.img} alt="image du bouton"></img>
        </div>
        <p>{this.props.textButton}</p>
      </div>
    )
  }
}