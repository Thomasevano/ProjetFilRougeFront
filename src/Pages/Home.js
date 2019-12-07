import React from 'react';
import Logo from '../atoms/Logo/Logo';
import Button from '../atoms/Button/Button';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Logo className="home-logo" leafSymbol="data/greenleaf.svg" title="green paris 2024" logoJo="data/jo-logo.svg"/>
      <p className="intro-text">100 ans après sa dernière édition, La Ville Lumière s’est fixé comme ambition d’organiser des Jeux Olympiques à impact environnemental positif.
        <br/>Un grand défi au coeur des préocupations actuelles.
        <br/><br/>Et si vous pouviez, vous aussi, en être le premier acteur ?
      </p>
      <Link to="/step1" style={{ textDecoration: 'none' }}>
        <Button img="data/arrow_button.svg" text="start"/>
      </Link>
      
    </div>
  )
}

export default Home