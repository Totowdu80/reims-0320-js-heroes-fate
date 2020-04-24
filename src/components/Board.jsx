import React, { Component } from 'react';
import './Board.css';
import Game from './Game';
import PlayerProfil from './PlayerProfil';
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
        <div><EnnemyProfils ennemy={props.heroes[0]} /></div>
        <div><PlayerProfil heroes={this.props.heroes} /></div>
        <div><Game /></div>
        <div><PlayerProfil heroes={this.props.heroes} /></div>
      </div>
    );
  }
}

export default Board;
