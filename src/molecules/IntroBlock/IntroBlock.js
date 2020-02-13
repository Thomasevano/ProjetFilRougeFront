import React from 'react'
import Step from '../../atoms/Step/Step'
import InfoBlock from '../InfoBlock/InfoBlock';
import './IntroBlock.scss'

function IntroBlock({img, alt, title, stepNumber, infoTitle, infoSubtitle, infoDescription}) {

  return(
    <div className="introBlock">
      <div className="intro-image">
        <img src={img} alt={alt}/>
      </div>
      <div className="title-block">
        <Step stepNumber={stepNumber} object="circle"/>
        <h1 className="title">{title}</h1>
        <InfoBlock infoTitle={infoTitle} infoSubtitle={infoSubtitle} infoDescription={infoDescription}/>
      </div>
    </div>
  )
}


export default IntroBlock