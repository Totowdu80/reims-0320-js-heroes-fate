import React, { Component } from 'react';
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
        <div><EnnemyProfils venom={this.props.heroes[0]} /></div>
        <div><PlayerStats venom={this.props.heroes[0]} /></div>
        <div><Game /></div>
        <div><EnnemyProfils venom={this.props.heroes[0]} /></div>
        <div><PlayerStats venom={this.props.heroes[0]} /></div>
      </div>
    );
  }
}


export default Board;
