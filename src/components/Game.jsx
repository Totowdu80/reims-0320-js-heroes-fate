import React, { Component } from 'react';
import Player from './player';
import './Game.css';

const weapons = ['rock', 'paper', 'scissors'];

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: weapons[0],
      playerTwo: weapons[0],
      winner: '',
      interface: 'choix',
    };
  }

    startGame = () => {
      let counter = 0;
      const gameInterval = setInterval(() => {
        counter += 1;
        this.setState({
          interface: 'resultats',
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
          <div className={this.state.interface === 'choix' ? 'affichageON' : 'affichageOFF'}>
            <div>
              <input type="image" src="https://zupimages.net/up/20/16/vmt5.jpg" className="weaponButton" onClick={() => this.selecteWeapon('rock')} alt="" />
              <input type="image" src="https://zupimages.net/up/20/16/vjv7.jpg" className="weaponButton" onClick={() => this.selecteWeapon('paper')} alt="" />
              <input type="image" src="https://zupimages.net/up/20/16/dfvh.jpg" className="weaponButton" onClick={() => this.selecteWeapon('scissors')} alt="" />
            </div>
            <button type="button" onClick={this.startGame}>Start</button>
          </div>
          <div className={this.state.interface === 'resultats' ? 'affichageON' : 'affichageOFF'}>
            <div className="winner">
              <Player weapon={playerTwo} />
              {winner ? this.selectWinner() : null}
              <Player weapon={playerOne} />
            </div>
          </div>
        </>
      );
    }
}

export default Game;
