import React from 'react';
import logo from './logo.svg';
import './App.scss';
import EndPart from './molecules/EndPart/index';
import TextImage from './molecules/TextImage/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Hello mes petites beautées</h1>
      </header>
      <section className="dev-virgil">
        <EndPart text="A platea sit mi senectus nec egestas eget. Tincidunt massa velit vitae volutpat viverra nunc. Leo ipsum egestas quis lacus accumsan ?"/>
        <TextImage />
      </section>
    </div>
  );
}

export default App;
