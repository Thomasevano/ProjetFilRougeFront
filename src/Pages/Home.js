import React from 'react';
import Logo from '../atoms/Logo/Logo';
import Button from '../atoms/Button/Button';
import { Link } from 'react-router-dom';

function Home() {
  
  return (
    <div className="home">
      <div className="home-container">
        <Logo className="home-logo" leafSymbol="data/greenleaf.svg" title="green paris 2024" logoJo="data/jo-logo.svg"/>
        <p className="intro-text">100 years after its last edition, The City of Lights has set the goal of organizing the first environmentally-friendly Olympic Games.
        <br></br>A great challenge at the center of our current concerns.
        <br></br><br></br>And if you could, too, be the first actor of this positive impact ?.
        </p>
        <Link to="/sensitization" style={{ textDecoration: 'none' }}>
          <Button text="Start the experience"/>
        </Link>
      </div>
    </div>
  )
}

export default Home