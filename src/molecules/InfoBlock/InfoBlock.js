import React from 'react';

function InfoBlock({infoTitle, infoSubtitle, infoDescription}) {
  
  return(
    <div className="info-block">
      <h1 className="text info-title">{infoTitle}</h1>
      <h2 className="text info-subtitle">{infoSubtitle}</h2>
      <p className="text info-description">{infoDescription}</p>
    </div>
  )
}

export default InfoBlock