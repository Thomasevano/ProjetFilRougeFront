import React from 'react';

export default class Visual extends React.Component {
  render() {
    return (
      <div className="visual">
        <img className={this.props.position} src={this.props.img} alt="visuel du texte associé"></img>
      </div>
    )
  }
}