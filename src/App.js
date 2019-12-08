import React from 'react';
import './App.scss';
import EndPart from './molecules/EndPart/index';
import TextImage from './molecules/TextImage/index';
import Button from './atoms/Button/Button';
import Logo from './atoms/Logo/Logo';

function App() {
  return (
    <div className="App">
      <Logo className="home-logo" leafSymbol="data/greenleaf.svg" title="green paris 2024" logoJo="data/jo-logo.svg"/>
      <p className="intro-text">100 ans après sa dernière édition, La Ville Lumière s’est fixé comme ambition d’organiser des Jeux Olympiques à impact environnemental positif.
        <br/>Un grand défi au coeur des préocupations actuelles.
        <br/><br/>Et si vous pouviez, vous aussi, en être le premier acteur ?
      </p>
      <Button img="data/arrow_button.svg" text="start"/>
      <section className="visualText">
        <TextImage position="right" img="https://i.pinimg.com/280x280_RS/fe/9f/07/fe9f07c709cb15a0f3fd58f4fa0afaec.jpg" alt="visuel accompagnent le text (a modifié suivant l'image)"/>
      </section>
      <section className="visualText">
        <TextImage position="left" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQmr_SddYu02sFRnc0uC1smvToN8JWmvdoxZhIVUJeG_EKKRxnkA&s" alt="visuel accompagnent le text (a modifié suivant l'image)"/>
      </section>
      <EndPart text="A platea sit mi senectus nec egestas eget. Tincidunt massa velit vitae volutpat viverra nunc. Leo ipsum egestas quis lacus accumsan ?"/>
    </div>

  );
}

export default App;
