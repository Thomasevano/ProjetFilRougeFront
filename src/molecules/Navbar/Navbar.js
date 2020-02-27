import React from 'react';
import Logo from '../../atoms/Logo/Logo';
import Menu from '../../atoms/Menu/Menu';
import './Navbar.scss'

function Navbar() {
  return (
    <nav>
      <Menu imgFirstPart="./data/intro-background-eiffelTower.jpg" imgSecondPart="./data/imageParticipate.jpg" imgThirdPart="./data/imageEvaluate.jpg"/>
      <Logo className="menu-logo" leafSymbol="data/greenleaf.svg" title="green paris 2024" logoJo="data/jo-logo.svg"/>
    </nav>
  )
}


export default Navbar