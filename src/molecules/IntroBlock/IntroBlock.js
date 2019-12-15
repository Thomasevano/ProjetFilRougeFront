import React from 'react'
import Step from '../../atoms/Step/Step'

function IntroBlock({title}) {

  return(
    <div className="introBlock">
      <p className="step-background">1</p>
      <Step number="1"/>
      <h1 className="title">{title}</h1>
    </div>
  )
}

export default IntroBlock