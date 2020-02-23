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
          { this.props.textButton && 
          <SecondaryButton img="data/arrowSecondaryButton.svg" text={this.props.textButton} pageTo={this.props.pageTo}/>}
          {this.props.firstLogo && this.props.secondLogo && this.props.thirdLogo &&
            <div className="social">
              <img src={this.props.firstLogo} alt="icone social"></img>
              <img src={this.props.secondLogo} alt="icone social"></img>
              <img src={this.props.thirdLogo} alt="icone social"></img>
            </div>
          }
        </div>
      </div>
    )
  }
}