import React, { Component } from 'react';
import './game.css';

import PlayerStats from '../PlayerStats/PlayerStats';
import EnemyLife from '../EnemyLife/EnemyLife';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberTwo: 0,
      number: 0,
      interface: 0,
      playerLaunch: '',
      iaLaunch: '',
      enemyLife: parseFloat(this.props.heroes[0].powerstats.power) * 2,
      playerLife: parseFloat(this.props.heroes[1].powerstats.power) * 2,
    };
    this.attackturn = this.attackturn.bind(this);
    this.defenseturn = this.defenseturn.bind(this);
  }

  transition = () => {
    this.setState({
      interface: this.state.interface + 1,
    });
  }

  endWin = () => {
    this.setState({
      interface: 6,
    });
  }

  endLose = () => {
    this.setState({
      interface: 7,
    });
  }

  restart = () => {
    this.setState({
      interface: 0,
    });
  }

  attackturn() {
    const playerAttack = parseFloat(this.props.heroes[1].powerstats.strength);
    const enemyDefense = (parseFloat(this.props.heroes[0].powerstats.durability) + parseFloat(this.props.heroes[0].powerstats.combat)) / 2;
    const dicePlayer = Math.floor(Math.random() * (Math.floor(100)));
    const diceIA = Math.floor(Math.random() * (Math.floor(100)));
    let attack = true;
    let critical = true;
    let defense = true;

    if (dicePlayer <= 5) {
      attack = false;
      critical = true;
    } else if (dicePlayer >= 6 && dicePlayer <= 49) {
      attack = false;
      critical = false;
    } else if (dicePlayer >= 50 && dicePlayer <= 94) {
      attack = true;
      critical = false;
    } else {
      attack = true;
      critical = true;
    }

    if (diceIA <= 50) {
      defense = false;
    } else {
      defense = true;
    }

    if (attack === true && critical === true && defense === false) {
      this.setState({
        playerLaunch: 'Attaque Critique',
        iaLaunch: 'Défense ratée',
        enemyLife: this.state.enemyLife - (playerAttack * 2),
        number: dicePlayer,
        numberTwo: diceIA,
        interface: this.state.interface + 1,
      });
    } else if (attack === true && critical === false && defense === false) {
      this.setState({
        playerLaunch: 'Attaque réussie',
        iaLaunch: 'Défense ratée',
        enemyLife: this.state.enemyLife - (playerAttack),
        number: dicePlayer,
        numberTwo: diceIA,
        interface: this.state.interface + 1,
      });
    } else if (attack === true && critical === true && defense === true) {
      this.setState({
        playerLaunch: 'Attaque Critique',
        iaLaunch: 'Défense réussie',
        enemyLife: (this.state.enemyLife + enemyDefense) - (playerAttack * 2),
        number: dicePlayer,
        numberTwo: diceIA,
        interface: this.state.interface + 1,
      });
    } else if (attack === true && critical === false && defense === true) {
      this.setState({
        playerLaunch: 'Attaque réussie',
        iaLaunch: 'Défense réussie',
        enemyLife: (this.state.enemyLife + enemyDefense) - (playerAttack),
        number: dicePlayer,
        numberTwo: diceIA,
        interface: this.state.interface + 1,
      });
    } else {
      this.setState({
        playerLaunch: 'Attaque ratée',
        number: dicePlayer,
        numberTwo: diceIA,
        interface: this.state.interface + 1,
      });
    }
  }

  defenseturn() {
    const enemyAttack = parseFloat(this.props.heroes[0].powerstats.strength);
    const playerDefense = (parseFloat(this.props.heroes[1].powerstats.durability) + parseFloat(this.props.heroes[1].powerstats.combat)) / 2;
    const dicePlayer = Math.floor(Math.random() * (Math.floor(100)));
    const diceIA = Math.floor(Math.random() * (Math.floor(100)));
    let attack = true;
    let critical = true;
    let defense = true;

    if (diceIA <= 5) {
      attack = false;
      critical = true;
    } else if (diceIA >= 6 && diceIA <= 49) {
      attack = false;
      critical = false;
    } else if (diceIA >= 50 && diceIA <= 94) {
      attack = true;
      critical = false;
    } else {
      attack = true;
      critical = true;
    }

    if (dicePlayer <= 50) {
      defense = false;
    } else {
      defense = true;
    }

    if (attack === true && critical === true && defense === false) {
      this.setState({
        playerLife: this.state.playerLife - (enemyAttack * 2),
        number: diceIA,
        numberTwo: dicePlayer,
        interface: this.state.interface + 1,
      });
    } else if (attack === true && critical === false && defense === false) {
      this.setState({
        playerLife: this.state.playerLife - (enemyAttack),
        number: diceIA,
        numberTwo: dicePlayer,
        interface: this.state.interface + 1,
      });
    } else if (attack === true && critical === true && defense === true) {
      this.setState({
        playerLife: (this.state.playerLife + playerDefense) - (enemyAttack * 2),
        number: dicePlayer,
        numberTwo: diceIA,
        interface: this.state.interface + 1,
      });
    } else if (attack === true && critical === false && defense === true) {
      this.setState({
        playerLife: (this.state.playerLife + playerDefense) - (enemyAttack),
        number: dicePlayer,
        numberTwo: diceIA,
        interface: this.state.interface + 1,
      });
    } else {
      this.setState({
        number: dicePlayer,
        numberTwo: diceIA,
        interface: this.state.interface + 1,
      });
    }
  }

  render() {
    return (
      <div>
        <div>
          {this.props.heroes.length > 1 && <EnemyLife venom={this.props.heroes[0]} enemyLife={this.state.enemyLife} />}
        </div>

        <div className="interface__gameplay">
          {this.state.interface === 0
            && (
            <div>
              <p>Your Turn</p>
              <input type="button" className="styled" onClick={this.transition} value="Continue" />
            </div>
            )}

          {this.state.interface === 1
            && (
            <div>
              {/* Attack Choice */}
              <input type="button" className="styled" onClick={this.attackturn} value="Attack 1" />
              <input type="button" className="styled" onClick={this.transition} value="Attack 2" />
              <input type="button" className="styled" onClick={this.transition} value="Attack 3" />
            </div>
            )}

          {this.state.interface === 2
            && (
            <div>
              {/* Résultats */}
              <div>
                <p>{this.state.iaLaunch}</p>
                <p>{this.state.playerLaunch}</p>
              </div>
              <div>
                <button className="dice" type="button">{this.state.numberTwo}</button>
                <button className="dice" type="button">{this.state.number}</button>
              </div>
              <div>
                {this.state.enemyLife <= 0
                  ? <input type="button" className="styled" onClick={this.endWin} value="Finish" />
                  : <input type="button" className="styled" onClick={this.transition} value="Continue" />}
              </div>
            </div>
            )}

          {this.state.interface === 3
            && (
            <div>
              <p>Enemy Turn</p>
              <input type="button" className="styled" onClick={this.transition} value="Continue" />
            </div>
            )}

          {this.state.interface === 4
            && (
            <div>
              {/* Défense Choice */}
              <input type="button" className="styled" onClick={this.defenseturn} value="Defense 1" />
              <input type="button" className="styled" onClick={this.transition} value="Defense 2" />
              <input type="button" className="styled" onClick={this.transition} value="Defense 3" />
            </div>
            )}

          {this.state.interface === 5
            && (
            <div>
              {/* Résultats */}
              <div>
                <p>{this.state.iaLaunch}</p>
                <p>{this.state.playerLaunch}</p>
              </div>
              <div>
                <button className="dice" type="button">{this.state.numberTwo}</button>
                <button className="dice" type="button">{this.state.number}</button>
              </div>
              <div>
                {this.state.playerLife <= 0
                  ? <input type="button" className="styled" onClick={this.endLose} value="Finish" />
                  : <input type="button" className="styled" onClick={this.restart} value="Continue" />}
              </div>
            </div>
            )}

          {this.state.interface === 6
            && (
            <div>
              <p>You Win</p>
              <input type="button" className="styled" onClick={this.restart} value="Continue" />
            </div>
            )}

          {this.state.interface === 7
            && (
            <div>
              <p>You Lose</p>
              <input type="button" className="styled" onClick={this.restart} value="Continue" />
            </div>
            )}
        </div>

        <div>
          {this.props.heroes.length > 1 && <PlayerStats spidey={this.props.heroes[1]} playerLife={this.state.playerLife} />}
        </div>
      </div>
    );
  }
}

export default Game;

/* {this.state.interface === 0
            && (
            <div>
              <p>Your Turn</p>
              <input type="button" className="styled" onClick={this.transition} value="Continue" />
            </div>
            )}

          {this.state.interface === 1
              && (
              <div>
                <input type="button" className="styled" onClick={this.transition} value="Attack 1" />
                <input type="button" className="styled" onClick={this.transition} value="Attack 2" />
                <input type="button" className="styled" onClick={this.transition} value="Attack 3" />
              </div>
              )}

          {this.state.interface === 2
              && (
              <div>
                <div className="dice__plateau">
                  <button className="dice" type="button">{this.state.numberTwo}</button>
                  <button className="dice" type="button">{this.state.number}</button>
                </div>
                <input type="button" className="styled" onClick={this.attackturn} value="Lancez le dé!" />
                -
              </div>
              )}

          {this.state.interface === 3
              && (
              <div>
                <div>
                  <button className="dice" type="button">{this.state.number}</button>
                </div>
                <div>
                  <input type="button" className="styled" onClick={this.transition} value="Continue" />
                </div>
              </div>
              )}

          {this.state.interface === 4
              && (
              <div>
                <input type="button" className="styled" onClick={this.transition} value="Defense 1" />
                <input type="button" className="styled" onClick={this.transition} value="Defense 2" />
                <input type="button" className="styled" onClick={this.transition} value="Defense 3" />
              </div>
              )}

          {this.state.interface === 5
              && (
              <div>
                <div className="dice__plateau">
                  <button className="dice" type="button">{this.state.numberTwo}</button>
                  <button className="dice" type="button">{this.state.number}</button>
                </div>
                <input type="button" className="styled" onClick={this.defenseturn} value="Lancez le dé!" />
                -
              </div>
              )}
*/
