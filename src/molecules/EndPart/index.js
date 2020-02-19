import React from 'react';
import SecondaryButton from '../../atoms/SecondaryButton/secondaryButton';
import Step from '../../atoms/Step/Step';
import './styles.scss'

export default class EndPart extends React.Component {
  
  render() {
    return (
      <div className="endPart">
        <div className="endPartContent">
          <Step stepNumber={this.props.subTitle} object="rectangle"/>
          <h2>{this.props.title}</h2>
          <SecondaryButton img="data/arrowSecondaryButton.svg" text={this.props.textButton} pageTo={this.props.pageTo}/>
        </div>
      </div>
    )
  }
}