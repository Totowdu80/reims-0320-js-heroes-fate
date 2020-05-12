import React, { Component } from 'react';
import './game.css';

import PlayerStats from '../PlayerStats/PlayerStats'
import EnemyLife from '../EnemyLife/EnemyLife';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberTwo : 0,
      number: 0,
      interface: 'button',
      enemyLife: parseFloat(this.props.heroes[0].powerstats.power) * 2,
      playerLife: parseFloat(this.props.heroes[1].powerstats.power) * 2,
    };
    this.attackturn = this.attackturn.bind(this);
  }

  activButton = () => {
    this.setState({
      interface: 'button',
    });
  }

  transition = () => {
    this.setState({
      interface: 'choix',
    });
  }

  attackturn() {
    const playerAttack = parseFloat(this.props.heroes[1].powerstats.strength)
    const enemyDefense = (parseFloat(this.props.heroes[0].powerstats.durability) + parseFloat(this.props.heroes[0].powerstats.combat))/2
    const dicePlayer = Math.floor(Math.random() * (Math.floor(100)));
    const diceIA = Math.floor(Math.random() * (Math.floor(100)));
    let attack = true
    let critical = true
    let defense = true

    if(dicePlayer <= 5) {
      attack = false
      critical = true
    } else if (dicePlayer >= 6 && dicePlayer <= 49) {
      attack = false
      critical = false
    } else if (dicePlayer >= 50 && dicePlayer <= 94) {
      attack = true
      critical = false
    } else {
      attack = true
      critical = true
    }

    if (diceIA <= 50) {
      defense = false
    } else {
      defense = true
    }

    if (attack === true && critical === true && defense === false) {
      this.setState({
        enemyLife: this.state.enemyLife - (playerAttack * 2),
        number: dicePlayer,
        numberTwo: diceIA,
      }) 
    } else if (attack === true && critical === false && defense === false) {
      this.setState({
        enemyLife: this.state.enemyLife - (playerAttack),
        number: dicePlayer,
        numberTwo: diceIA,
      })
    } else if (attack === true && critical === true && defense === true) {
      this.setState({
        enemyLife: (this.state.enemyLife + enemyDefense) - (playerAttack * 2),
        number: dicePlayer,
        numberTwo: diceIA,
      })
    } else if (attack === true && critical === false && defense === true) {
      this.setState({
        enemyLife: (this.state.enemyLife + enemyDefense) - (playerAttack),
        number: dicePlayer,
        numberTwo: diceIA,
      })
    } else {
      this.setState({
        number: dicePlayer,
        numberTwo: diceIA,
      })
    }
  }



  none = () => {
      this.setState({
        interface: 'none',
      });
    }

    render() {
      return (
        <div className="backgroundAll">
          <div>
            {this.props.heroes.length > 1 && <EnemyLife venom={this.props.heroes[0]} enemyLife={this.state.enemyLife} />}
          </div>

          <div className="interface__gameplay">
            {this.state.interface === 'button' && 
              <div>
                <input type="button" className="styled" onClick={this.transition} value="Attack 1"/>
                <input type="button" className="styled" onClick={this.transition} value="Attack 2"/>
                <input type="button" className="styled" onClick={this.transition} value="Attack 3"/>
              </div>
            }

            {this.state.interface === 'choix' &&
              <div>
                <div className='dice__plateau'>
                <button className='dice' type="button">{this.state.numberTwo}</button>
                <button className='dice' type="button">{this.state.number}</button>
                </div>
                <input type="button" className="styled" onClick={this.attackturn} value="Lancez le dé!"/>-
              </div>
            }

            {this.state.interface === 'resultats' &&
              <div>
                <div>
                <button className='dice' type="button">{this.state.number}</button>
                </div>
                <div>
                <input type="button" className="styled" onClick={this.none} value="Continue" />
                </div>
              </div>
            }
          </div>

          <div>
            {this.props.heroes.length > 1 && <PlayerStats spidey={this.props.heroes[1]} playerLife={this.state.playerLife} />}
          </div>
        </div>
      );
    }
}

export default Game;
