import React from 'react';
import './App.css';
import Game from './components/Game';
import Board from './components/Board';

function App() {
  return (
    <div>
      <header>
        <Game />
        <Board />
      </header>
    </div>
  );
}

export default App;
