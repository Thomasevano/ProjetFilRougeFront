import React from 'react'

function Step({number}){
  return(
  <div className="step"><span className="circle"></span><p>Step {number}</p></div>
  )
}

export default Step