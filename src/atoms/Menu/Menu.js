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
            <li><Step/><a href="#" className="anchor">Link</a></li>
            <li><Step/><a href="#" clasNames="anchor">Link</a></li>
            <li><Step/><a href="#" className="anchor">Link</a></li>
          </ul>
        </div>
      </aside>
    </div>
  )
}

export default Menu