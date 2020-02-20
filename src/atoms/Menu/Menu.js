import React from 'react';
import Step from '../Step/Step'
import './Menu.scss'

function Menu() {

  //Lock scroll when menu is open
  const handleClick = (e) => {
    const bodyEl = document.querySelector("body")
    if (e.target.checked == true) {
      bodyEl.style.overflow = "hidden"
    } else {
      bodyEl.style.overflow = "unset"
    }
  }
  
  return (
    <div className="menu">
      <input onClick={handleClick} type="checkbox" id="burger-menu"/>
      <label htmlFor="burger-menu">
        <span className="bar top"></span>
        <span className="bar middle"></span>
        <span className="bar bottom"></span>
      </label>
      <aside>
        <div className="section">
          <ul className="list">
            <li><Step object="circle" stepNumber="Step 1"/><a href="/sensitization" className="anchor">Become aware of our impact</a></li>
            <li><Step object="circle" stepNumber="Step 2"/><a href="/participate" className="anchor">Participate</a></li>
            <li><Step object="circle" stepNumber="Step 3"/><a href="/evaluate" className="anchor">Evaluate</a></li>
          </ul>
        </div>
      </aside>
    </div>
  )
}

export default Menu