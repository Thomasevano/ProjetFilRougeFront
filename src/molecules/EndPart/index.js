import React from 'react';
import Button from '../../atoms/Button/index';

export default class EndPart extends React.Component {
  render() {
    return (
      <div className="endPart">
        <div className="endPartContent">
          <p>{this.props.text}</p>
          <Button img="data/arrowarrow_button.png" textButton="Participate"/>
        </div>
      </div>
    )
  }
}