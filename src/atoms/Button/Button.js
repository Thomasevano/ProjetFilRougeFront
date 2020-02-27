import React from 'react';
import './button.scss'
import { Link } from 'react-router-dom';

export default class Button extends React.Component {
  render() {
    return (
      <div className="button-container">
        <div className="button">
          <Link to="/sensitization" style={{ textDecoration: 'none' }} className="text">
            {this.props.text}
          </Link>
        </div>
      </div>
    )
  }
}
