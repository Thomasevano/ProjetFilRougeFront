import React from 'react';
import Button from '../../atoms/Button/Button';

export default class EndPart extends React.Component {
  render() {
    return (
      <div className="endPart">
        <div className="endPartContent">
          <p>{this.props.text}</p>
          <Button img="data/arrow_button.svg" text="Participate"/>
        </div>
      </div>
    )
  }
}