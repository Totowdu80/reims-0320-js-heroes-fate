import React from 'react';
import './App.css';
import Game from './components/Game';
import Board from './components/Board';
import Home from './components/Home';

function App() {
  return (
    <div>
      <header>
        <Home />
        <Game />
        <Board />
      </header>
    </div>
  );
}

export default App;
