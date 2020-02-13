import React from 'react';
import './logo.scss'

function Logo({className, leafSymbol, title, logoJo }) {
  return (
    <div className={className}>
      <img className="leafSymbol" src={leafSymbol} alt="symbol"/>
      <h1 className="title">{title}</h1>
      <img src={logoJo} alt="" className="logo-jo"/>
    </div>
  )
}

export default Logo