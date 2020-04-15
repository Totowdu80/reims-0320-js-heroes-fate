import React, { Component } from 'react';
import Player from './player';

const weapons = ['rock', 'paper', 'scissors'];

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: weapons[0],
      playerTwo: weapons[0],
      winner: '',
    };
  }

    startGame = () => {
      let counter = 0;
      const gameInterval = setInterval(() => {
        counter += 1;
        this.setState({
          playerTwo: weapons[Math.floor(Math.random() * weapons.length)],
          winner: '',
        });

        if (counter > 5) {
          clearInterval(gameInterval);
          this.setState({
            winner: this.selectWinner(),
          });
        }
      }, 100);
    };

    selectWinner = () => {
      const { playerOne, playerTwo } = this.state;
      if (playerOne === playerTwo) {
        return "It's a tie!";
      } if (
        (playerOne === 'rock' && playerTwo === 'scissors')
        || (playerOne === 'scissors' && playerTwo === 'paper')
        || (playerOne === 'paper' && playerTwo === 'rock')
      ) {
        return 'Hero Wins!';
      }
      return 'Ennemi Wins!';
    };

    selecteWeapon = (weapon) => {
      this.setState({
        playerOne: weapon,
        winner: '',
      });
    };

    render() {
      const { playerOne, playerTwo, winner } = this.state;
      return (
        <>
          <div>
            <Player weapon={playerOne} />
            <Player weapon={playerTwo} />
          </div>
          <div>
            <button className="weaponButton" onClick={() => this.selecteWeapon('rock')} type="button">Rock</button>
            <button className="weaponButton" onClick={() => this.selecteWeapon('paper')} type="button">Paper</button>
            <button className="weaponButton" onClick={() => this.selecteWeapon('scissors')} type="button">Scissors</button>
          </div>
          <div className="winner">
            {winner ? this.selectWinner() : null}
          </div>
          <button type="button" onClick={this.startGame}>Start</button>
        </>
      );
    }
}

export default Game;
