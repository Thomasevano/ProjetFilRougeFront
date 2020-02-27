import React from 'react';
import Step from '../Step/Step'
import { Link } from 'react-router-dom';
import './Menu.scss'

function Menu({imgFirstPart, imgSecondPart, imgThirdPart}) {

  //Lock scroll when menu is open
  const handleClick = (e) => {
    const bodyEl = document.querySelector("body")
    if (e.target.checked === true) {
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
            <li>
              {imgFirstPart && <img src={imgFirstPart} alt="illustartion part"></img>}
              <div className="menuContent">
                <Step object="circle" stepNumber="Step 1"/>
                <a href="/sensitization" className="anchor">Become aware of our impact</a>
              </div>
            </li>
            <li>
              {imgSecondPart && <img src={imgSecondPart} alt="illustartion part"></img>}
              <div className="menuContent">
                <Step object="circle" stepNumber="Step 2"/>
                <a href="/participate" className="anchor">Participate</a>
              </div>
            </li>
            <li>
              {imgThirdPart && <img src={imgThirdPart} alt="illustartion part"></img>}
              <div className="menuContent">
                <Step object="circle" stepNumber="Step 3"/>
                <a href="/evaluate" className="anchor">Evaluate</a>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  )
}

export default Menu