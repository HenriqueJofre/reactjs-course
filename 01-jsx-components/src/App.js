import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Footer } from './components';

function App() {
  const element = <h1>Hello, my name is Henrique Jofre</h1>;

  const name = "Henrique Jofre";
  const setName = <h1>What is your name? My name is {name}</h1>

  const world = React.createElement("h1", null, "Hello,", " ", "World!", " Let's, go to learn ReactJS");

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            {world}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>

      <div>
        <h1>This is a second element</h1>
      </div>

      <Footer />
    </>
  );
}

export default App;
