import React from 'react';
import './Board.css';
import PlayerStats from './PlayerStats';
import Game from './Game';
import EnnemyProfils from './EnnemyProfils';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <EnnemyProfils venom={this.props.heroes[0]} />
        <Game />
        <EnnemyProfils venom={this.props.heroes[0]} />
      </div>
    );
  }
}


export default Board;
