import React from 'react';
import './Board.css';
import EnnemyProfils from './EnnemyProfils';

function Board(props) {
  return (
      <div>
        <EnnemyProfils ennemy={props.heroes[0]}/>
      </div>
  );
}

export default Board;
