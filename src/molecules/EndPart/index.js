import React from 'react';
import SecondaryButton from '../../atoms/SecondaryButton/secondaryButton';
import Step from '../../atoms/Step/Step';

export default class EndPart extends React.Component {
  render() {
    return (
      <div className="endPart">
        <div className="endPartContent">
          <Step stepNumber="Next step" object="rectangle"/>
          <h2>{this.props.title}</h2>
          <SecondaryButton img="data/arrowSecondaryButton.svg" text="Go to Step 2"/>
        </div>
      </div>
    )
  }
}