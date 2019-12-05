import React from 'react';

function Logo({className, leafSymbol, title, logoJo }) {
  return (
    <div className={className}>
      <img className="leafSymbol" src={leafSymbol} alt=""/>
      <h1 className="title">{title}</h1>
      <img src={logoJo} alt="" className="logo-jo"/>
    </div>
  )
}

export default Logo