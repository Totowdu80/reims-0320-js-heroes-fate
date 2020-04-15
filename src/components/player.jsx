import React from 'react';
import rock from './image/pierre.jpg';
import paper from './image/feuille.jpg';
import scissors from './image/ciseaux.jpg';

const Player = ({ weapon }) => (
  <div className="player">
    <img className="player-image" src={weapon === 'rock' ? rock : weapon === 'paper' ? paper : scissors} alt="Rock Paper Scissors" />
  </div>
);

export default Player;
