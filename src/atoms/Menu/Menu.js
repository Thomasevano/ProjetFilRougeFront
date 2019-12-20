import React from 'react';
import Step from '../Step/Step'

function Menu() {
  return (
    <div className="menu">
      <input type="checkbox" id="burger-menu"/>
      <label for="burger-menu">
        <span className="bar top"></span>
        <span className="bar middle"></span>
        <span className="bar bottom"></span>
      </label>
      <aside>
        <div className="section">
          <ul className="list">
            <li><Step number="1"/><a href="#" className="anchor">Become aware of our impact</a></li>
            <li><Step number="2"/><a href="#" className="anchor">Participate</a></li>
            <li><Step number="3"/><a href="#" className="anchor">Evaluate</a></li>
          </ul>
        </div>
      </aside>
    </div>
  )
}

export default Menu