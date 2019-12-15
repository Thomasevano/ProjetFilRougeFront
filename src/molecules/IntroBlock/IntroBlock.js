import React from 'react'
import Step from '../../atoms/Step/Step'

function IntroBlock({title}) {

  return(
    <div className="">
      <Step number="1"/>
      <h1>{title}</h1>
    </div>
  )
}

export default IntroBlock