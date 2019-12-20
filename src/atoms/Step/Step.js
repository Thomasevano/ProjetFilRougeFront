import React from 'react'

function Step({stepNumber, object}){
  return(
  <div className="step"><span className={object}></span><p className="step-text">{stepNumber}</p></div>
  )
}

export default Step