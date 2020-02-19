import React from 'react';
import { Link } from 'react-router-dom';
import './secondaryButton.scss'

export default class SecondaryButton extends React.Component {
  
  render() {
    return (
      <div>
      {!this.props.outside && <Link to={this.props.pageTo} style={{ textDecoration: 'none' }}>
        <div className="secondaryButton"> 
          <div className="buttonContainer">
            <span className="text">{this.props.text}</span>
            <img src={this.props.img} alt="arrow right"></img>
          </div>   
        </div>
      </Link>}
      {this.props.outside && <a href={this.props.outside} style={{ textDecoration: 'none' }}>
        <div className="secondaryButton"> 
          <div className="buttonContainer">
            <span className="text">{this.props.text}</span>
            <img src={this.props.img} alt="arrow right"></img>
          </div>   
        </div>
      </a>}
      </div>
    )
  }
}