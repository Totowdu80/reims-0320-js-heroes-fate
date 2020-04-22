import React from 'react';
import './App.css';
import Game from './components/Game';
import Board from './components/Board';
import BtnAtt from './components/BtnAtt';

function App() {
  return (
    <div>
      <header>
        <BtnAtt />
        <Game />
        <Board />
      </header>
    </div>
  );
}

export default App;
