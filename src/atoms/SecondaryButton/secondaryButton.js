import React from 'react';

export default class SecondaryButton extends React.Component {
  render() {
    return (
      <div className="secondaryButton"> 
        <div className="buttonContainer">
          <span className="text">{this.props.text}</span>
          <img src={this.props.img} alt="arrow right"></img>
        </div>   
        
      </div>
    )
  }
}