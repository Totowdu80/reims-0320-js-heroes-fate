import React from 'react';
import './Board.css';
import PlayerStats from './PlayerStats';
import Game from './Game';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <EnnemyProfils ennemy={props.heroes[0]}/>
        <Game />
        <PlayerStats heroes={this.props.heroes} />
      </div>
    )
  }
}


export default Board;
