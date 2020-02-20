import React from 'react';
import './App.scss';
import Routes from './Pages/Route';

const WinSize = () => {
  if (window.innerWidth < 568) {
    return (
      <div className='wrongSize'>
        <div className="wrongSizeContent">
          <p>Votre résolution d'écran ne permet pas un affichage optimal de notre expérience. Veuillez tourner votre appareil en format paysage.</p>
        </div>
      </div>
    )
  }
  return false
}

function App() {
  return (
    <div className="App">
      <Routes/>
      <WinSize />
    </div>
  );
}

export default App;