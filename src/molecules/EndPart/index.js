import React from 'react';
import SecondaryButton from '../../atoms/SecondaryButton/secondaryButton';

export default class EndPart extends React.Component {
  render() {
    return (
      <div className="endPart">
        <div className="endPartContent">
          <div className="endSubtitle">
            <div className="endSubtitleRectangle"></div>
            <p>Next Step</p>
          </div>
          <h2>{this.props.title}</h2>
          <SecondaryButton img="data/arrowSecondaryButton.svg" text="Go to Step 2"/>
        </div>
      </div>
    )
  }
}