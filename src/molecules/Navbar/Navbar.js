import React from 'react';
import Logo from '../../atoms/Logo/Logo';
import Menu from '../../atoms/Menu/Menu';

function Navbar() {
  return (
    <nav>
      <Menu/>
      <Logo className="menu-logo" leafSymbol="data/greenleaf.svg" title="green paris 2024" logoJo="data/jo-logo.svg"/>
    </nav>
  )
}

export default Navbar