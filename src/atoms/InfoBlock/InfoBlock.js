import React from 'react';
import './InfoBlock.scss'

function InfoBlock({infoTitle, infoSubtitle, infoDescription, imgTop}) {
  
  return(
    <div className="info-block">
      {imgTop && <img src={imgTop} alt="image top"/>}
      <h1 className="text info-title">{infoTitle}</h1>
      <h2 className="text info-subtitle">{infoSubtitle}</h2>
      <p className="text info-description" dangerouslySetInnerHTML={{__html:infoDescription}}></p>
    </div>
  )
}

export default InfoBlock