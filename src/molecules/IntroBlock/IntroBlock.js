import React from 'react'
import Step from '../../atoms/Step/Step'
import InfoBlock from '../InfoBlock/InfoBlock';

function IntroBlock({img, alt, title}) {

  return(
    <div className="introBlock">
      <div className="intro-image">
        <img src={img} alt={alt}/>
      </div>
      <div className="title-block">
        <Step stepNumber="Step 1" object="circle"/>
        <h1 className="title">{title}</h1>
        <InfoBlock/>
      </div>
    </div>
  )
}

export default IntroBlock