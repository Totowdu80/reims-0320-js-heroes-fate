import React, { Component } from 'react';
import './game.css';

import PlayerStats from '../PlayerStats/PlayerStats';
import EnemyLife from '../EnemyLife/EnemyLife';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberIA: 0,
      numberPlayer: 0,
      interface: 0,
      playerLaunch: '',
      iaLaunch: '',
      enemyLife: parseFloat(this.props.heroes[1].powerstats.power) * 2,
      playerLife: parseFloat(this.props.heroes[0].powerstats.power) * 2,
    };
    this.lowAtt = this.lowAtt.bind(this);
    this.mediumAtt = this.mediumAtt.bind(this);
    this.highAtt = this.highAtt.bind(this);
    this.lowDef = this.lowDef.bind(this);
    this.mediumDef = this.mediumDef.bind(this);
    this.highDef = this.highDef.bind(this);
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

  lowAtt() {
    const playerAttack = parseFloat(this.props.heroes[0].powerstats.strength);
    const enemyDefense = (parseFloat(this.props.heroes[1].powerstats.durability) + parseFloat(this.props.heroes[1].powerstats.combat)) / 2;
    const dicePlayer = Math.floor(Math.random() * (Math.floor(100)));
    const diceIA = Math.floor(Math.random() * (Math.floor(100)));
    let attack = true;
    let attCritical = true;
    let defense = true;
    let defCritical = true;

    if (dicePlayer <= 5) {
      attack = false;
      attCritical = true;
    } else if (dicePlayer >= 6 && dicePlayer <= 19) {
      attack = false;
      attCritical = false;
    } else if (dicePlayer >= 20 && dicePlayer <= 94) {
      attack = true;
      attCritical = false;
    } else {
      attack = true;
      attCritical = true;
    }

    if (diceIA <= 5) {
      defense = false;
      defCritical = true;
    } else if (diceIA >= 6 && diceIA <= 49) {
      defense = false;
      defCritical = false;
    } else if (diceIA >= 50 && diceIA <= 94) {
      defense = true;
      defCritical = false;
    } else {
      defense = true;
      defCritical = true;
    }

    let damage = 0;
    let attLaunch = 'Attaque ratée';
    let defLaunch = 'Défense ratée';

    if (attack === true) {
      if (attCritical === true) {
        if (defense === true) {
          if (defCritical === true) { /* Attaque Critique mais Défense Critique, reste bonus à appliquer */
            damage = enemyDefense - (playerAttack * 2);
            attLaunch = 'Attaque Critique';
            defLaunch = 'Défense Critique';
          } else { /* Attaque Critique, Défense Normale */
            damage = enemyDefense - (playerAttack * 2);
            attLaunch = 'Attaque Critique';
            defLaunch = 'Défense réussie';
          }
        } else { /* Attaque Critque, aucune défense */
          damage = -(playerAttack * 2);
          attLaunch = 'Attaque Critique';
          defLaunch = 'Défense Ratée';
        }
      } else if (defense === true) {
        if (defCritical === true) { /* Attaque non critique, Défense critique (bonus de def à rajouter) */
          damage = enemyDefense - playerAttack;
          attLaunch = 'Attaque réussie';
          defLaunch = 'Défense Critique';
        } else { /* Attaque non critique, Défense non critique */
          damage = enemyDefense - playerAttack;
          attLaunch = 'Attaque réussie';
          defLaunch = 'Défense réussie';
        }
      } else { /* Attaque non critique, Pas de défense */
        damage = -playerAttack;
        attLaunch = 'Attaque réussie';
        defLaunch = 'Défense ratée';
      }
    }

    this.setState({
      enemyLife: this.state.enemyLife + Math.min(damage, 0),
      numberPlayer: dicePlayer,
      numberIA: diceIA,
      interface: this.state.interface + 1,
      playerLaunch: attLaunch,
      iaLaunch: defLaunch,
    });
  }

  mediumAtt() {
    const playerAttack = parseFloat(this.props.heroes[0].powerstats.strength);
    const enemyDefense = (parseFloat(this.props.heroes[1].powerstats.durability) + parseFloat(this.props.heroes[1].powerstats.combat)) / 2;
    const dicePlayer = Math.floor(Math.random() * (Math.floor(100)));
    const diceIA = Math.floor(Math.random() * (Math.floor(100)));
    let attack = true;
    let attCritical = true;
    let defense = true;
    let defCritical = true;

    if (dicePlayer <= 5) {
      attack = false;
      attCritical = true;
    } else if (dicePlayer >= 6 && dicePlayer <= 49) {
      attack = false;
      attCritical = false;
    } else if (dicePlayer >= 50 && dicePlayer <= 94) {
      attack = true;
      attCritical = false;
    } else {
      attack = true;
      attCritical = true;
    }

    if (diceIA <= 5) {
      defense = false;
      defCritical = true;
    } else if (diceIA >= 6 && diceIA <= 49) {
      defense = false;
      defCritical = false;
    } else if (diceIA >= 50 && diceIA <= 94) {
      defense = true;
      defCritical = false;
    } else {
      defense = true;
      defCritical = true;
    }

    let damage = 0;
    let attLaunch = 'Attaque ratée';
    let defLaunch = 'Défense ratée';

    if (attack === true) {
      if (attCritical === true) {
        if (defense === true) {
          if (defCritical === true) { /* Attaque Critique mais Défense Critique, reste bonus à appliquer */
            damage = enemyDefense - (playerAttack * 2);
            attLaunch = 'Attaque Critique';
            defLaunch = 'Défense Critique';
          } else { /* Attaque Critique, Défense Normale */
            damage = enemyDefense - (playerAttack * 2);
            attLaunch = 'Attaque Critique';
            defLaunch = 'Défense réussie';
          }
        } else { /* Attaque Critque, aucune défense */
          damage = -(playerAttack * 2);
          attLaunch = 'Attaque Critique';
          defLaunch = 'Défense Ratée';
        }
      } else if (defense === true) {
        if (defCritical === true) { /* Attaque non critique, Défense critique (bonus de def à rajouter) */
          damage = enemyDefense - playerAttack;
          attLaunch = 'Attaque réussie';
          defLaunch = 'Défense Critique';
        } else { /* Attaque non critique, Défense non critique */
          damage = enemyDefense - playerAttack;
          attLaunch = 'Attaque réussie';
          defLaunch = 'Défense réussie';
        }
      } else { /* Attaque non critique, Pas de défense */
        damage = -playerAttack;
        attLaunch = 'Attaque réussie';
        defLaunch = 'Défense ratée';
      }
    }

    this.setState({
      enemyLife: this.state.enemyLife + Math.min(damage, 0),
      numberPlayer: dicePlayer,
      numberIA: diceIA,
      interface: this.state.interface + 1,
      playerLaunch: attLaunch,
      iaLaunch: defLaunch,
    });
  }

  highAtt() {
    const playerAttack = parseFloat(this.props.heroes[0].powerstats.strength);
    const enemyDefense = (parseFloat(this.props.heroes[1].powerstats.durability) + parseFloat(this.props.heroes[1].powerstats.combat)) / 2;
    const dicePlayer = Math.floor(Math.random() * (Math.floor(100)));
    const diceIA = Math.floor(Math.random() * (Math.floor(100)));
    let attack = true;
    let attCritical = true;
    let defense = true;
    let defCritical = true;

    if (dicePlayer <= 5) {
      attack = false;
      attCritical = true;
    } else if (dicePlayer >= 6 && dicePlayer <= 79) {
      attack = false;
      attCritical = false;
    } else if (dicePlayer >= 80 && dicePlayer <= 94) {
      attack = true;
      attCritical = false;
    } else {
      attack = true;
      attCritical = true;
    }

    if (diceIA <= 5) {
      defense = false;
      defCritical = true;
    } else if (diceIA >= 6 && diceIA <= 49) {
      defense = false;
      defCritical = false;
    } else if (diceIA >= 50 && diceIA <= 94) {
      defense = true;
      defCritical = false;
    } else {
      defense = true;
      defCritical = true;
    }

    let damage = 0;
    let attLaunch = 'Attaque ratée';
    let defLaunch = 'Défense ratée';

    if (attack === true) {
      if (attCritical === true) {
        if (defense === true) {
          if (defCritical === true) { /* Attaque Critique mais Défense Critique, reste bonus à appliquer */
            damage = enemyDefense - (playerAttack * 2);
            attLaunch = 'Attaque Critique';
            defLaunch = 'Défense Critique';
          } else { /* Attaque Critique, Défense Normale */
            damage = enemyDefense - (playerAttack * 2);
            attLaunch = 'Attaque Critique';
            defLaunch = 'Défense réussie';
          }
        } else { /* Attaque Critque, aucune défense */
          damage = -(playerAttack * 2);
          attLaunch = 'Attaque Critique';
          defLaunch = 'Défense Ratée';
        }
      } else if (defense === true) {
        if (defCritical === true) { /* Attaque non critique, Défense critique (bonus de def à rajouter) */
          damage = enemyDefense - playerAttack;
          attLaunch = 'Attaque réussie';
          defLaunch = 'Défense Critique';
        } else { /* Attaque non critique, Défense non critique */
          damage = enemyDefense - playerAttack;
          attLaunch = 'Attaque réussie';
          defLaunch = 'Défense réussie';
        }
      } else { /* Attaque non critique, Pas de défense */
        damage = -playerAttack;
        attLaunch = 'Attaque réussie';
        defLaunch = 'Défense ratée';
      }
    }

    this.setState({
      enemyLife: this.state.enemyLife + Math.min(damage, 0),
      numberPlayer: dicePlayer,
      numberIA: diceIA,
      interface: this.state.interface + 1,
      playerLaunch: attLaunch,
      iaLaunch: defLaunch,
    });
  }

  lowDef(thresholds) {
    const enemyAttack = parseFloat(this.props.heroes[1].powerstats.strength);
    const playerDefense = (parseFloat(this.props.heroes[0].powerstats.durability) + parseFloat(this.props.heroes[0].powerstats.combat)) / 2;
    const dicePlayer = Math.floor(Math.random() * (Math.floor(100)));
    const diceIA = Math.floor(Math.random() * (Math.floor(100)));
    let attack = true;
    let attCritical = true;
    let defense = true;
    let defCritical = true;

    if (diceIA <= 5) {
      attack = false;
      attCritical = true;
    } else if (diceIA >= 6 && diceIA <= 49) {
      attack = false;
      attCritical = false;
    } else if (diceIA >= 50 && diceIA <= 94) {
      attack = true;
      attCritical = false;
    } else {
      attack = true;
      attCritical = true;
    }

    if (dicePlayer <= thresholds.low) {
      defense = false;
      defCritical = true;
    } else if (dicePlayer > thresholds.low && dicePlayer < thresholds.medium) {
      defense = false;
      defCritical = false;
    } else if (dicePlayer >= thresholds.medium && dicePlayer < thresholds.high) {
      defense = true;
      defCritical = false;
    } else {
      defense = true;
      defCritical = true;
    }

    let damage = 0;
    let attLaunch = 'Attaque ratée';
    let defLaunch = 'Défense ratée';

    if (attack === true) {
      if (attCritical === true) {
        if (defense === true) {
          if (defCritical === true) { /* Attaque Critique mais Défense Critique, reste bonus à appliquer */
            damage = playerDefense - (enemyAttack * 2);
            attLaunch = 'Attaque Critique';
            defLaunch = 'Défense Critique';
          } else { /* Attaque Critique, Défense Normale */
            damage = playerDefense - (enemyAttack * 2);
            attLaunch = 'Attaque Critique';
            defLaunch = 'Défense réussie';
          }
        } else { /* Attaque Critque, aucune défense */
          damage = -(enemyAttack * 2);
          attLaunch = 'Attaque Critique';
          defLaunch = 'Défense Ratée';
        }
      } else if (defense === true) {
        if (defCritical === true) { /* Attaque non critique, Défense critique (bonus de def à rajouter) */
          damage = playerDefense - enemyAttack;
          attLaunch = 'Attaque réussie';
          defLaunch = 'Défense Critique';
        } else { /* Attaque non critique, Défense non critique */
          damage = playerDefense - enemyAttack;
          attLaunch = 'Attaque réussie';
          defLaunch = 'Défense réussie';
        }
      } else { /* Attaque non critique, Pas de défense */
        damage = -enemyAttack;
        attLaunch = 'Attaque réussie';
        defLaunch = 'Défense ratée';
      }
    }

    this.setState({
      playerLife: this.state.playerLife + Math.min(damage, 0),
      numberPlayer: dicePlayer,
      numberIA: diceIA,
      interface: this.state.interface + 1,
      playerLaunch: defLaunch,
      iaLaunch: attLaunch,
    });
  }

  mediumDef() {
    const enemyAttack = parseFloat(this.props.heroes[1].powerstats.strength);
    const playerDefense = (parseFloat(this.props.heroes[0].powerstats.durability) + parseFloat(this.props.heroes[0].powerstats.combat)) / 2;
    const dicePlayer = Math.floor(Math.random() * (Math.floor(100)));
    const diceIA = Math.floor(Math.random() * (Math.floor(100)));
    let attack = true;
    let attCritical = true;
    let defense = true;
    let defCritical = true;

    if (diceIA <= 5) {
      attack = false;
      attCritical = true;
    } else if (diceIA >= 6 && diceIA <= 49) {
      attack = false;
      attCritical = false;
    } else if (diceIA >= 50 && diceIA <= 94) {
      attack = true;
      attCritical = false;
    } else {
      attack = true;
      attCritical = true;
    }

    if (dicePlayer <= 5) {
      defense = false;
      defCritical = true;
    } else if (dicePlayer >= 6 && dicePlayer <= 49) {
      defense = false;
      defCritical = false;
    } else if (dicePlayer >= 50 && dicePlayer <= 94) {
      defense = true;
      defCritical = false;
    } else {
      defense = true;
      defCritical = true;
    }

    let damage = 0;
    let attLaunch = 'Attaque ratée';
    let defLaunch = 'Défense ratée';

    if (attack === true) {
      if (attCritical === true) {
        if (defense === true) {
          if (defCritical === true) { /* Attaque Critique mais Défense Critique, reste bonus à appliquer */
            damage = playerDefense - (enemyAttack * 2);
            attLaunch = 'Attaque Critique';
            defLaunch = 'Défense Critique';
          } else { /* Attaque Critique, Défense Normale */
            damage = playerDefense - (enemyAttack * 2);
            attLaunch = 'Attaque Critique';
            defLaunch = 'Défense réussie';
          }
        } else { /* Attaque Critque, aucune défense */
          damage = -(enemyAttack * 2);
          attLaunch = 'Attaque Critique';
          defLaunch = 'Défense Ratée';
        }
      } else if (defense === true) {
        if (defCritical === true) { /* Attaque non critique, Défense critique (bonus de def à rajouter) */
          damage = playerDefense - enemyAttack;
          attLaunch = 'Attaque réussie';
          defLaunch = 'Défense Critique';
        } else { /* Attaque non critique, Défense non critique */
          damage = playerDefense - enemyAttack;
          attLaunch = 'Attaque réussie';
          defLaunch = 'Défense réussie';
        }
      } else { /* Attaque non critique, Pas de défense */
        damage = -enemyAttack;
        attLaunch = 'Attaque réussie';
        defLaunch = 'Défense ratée';
      }
    }

    this.setState({
      playerLife: this.state.playerLife + Math.min(damage, 0),
      numberPlayer: dicePlayer,
      numberIA: diceIA,
      interface: this.state.interface + 1,
      playerLaunch: defLaunch,
      iaLaunch: attLaunch,
    });
  }

  highDef() {
    const enemyAttack = parseFloat(this.props.heroes[1].powerstats.strength);
    const playerDefense = (parseFloat(this.props.heroes[0].powerstats.durability) + parseFloat(this.props.heroes[0].powerstats.combat)) / 2;
    const dicePlayer = Math.floor(Math.random() * (Math.floor(100)));
    const diceIA = Math.floor(Math.random() * (Math.floor(100)));
    let attack = true;
    let attCritical = true;
    let defense = true;
    let defCritical = true;

    if (diceIA <= 5) {
      attack = false;
      attCritical = true;
    } else if (diceIA >= 6 && diceIA <= 49) {
      attack = false;
      attCritical = false;
    } else if (diceIA >= 50 && diceIA <= 94) {
      attack = true;
      attCritical = false;
    } else {
      attack = true;
      attCritical = true;
    }

    if (dicePlayer <= 5) {
      defense = false;
      defCritical = true;
    } else if (dicePlayer >= 6 && dicePlayer <= 79) {
      defense = false;
      defCritical = false;
    } else if (dicePlayer >= 80 && dicePlayer <= 94) {
      defense = true;
      defCritical = false;
    } else {
      defense = true;
      defCritical = true;
    }

    let damage = 0;
    let attLaunch = 'Attaque ratée';
    let defLaunch = 'Défense ratée';

    if (attack === true) {
      if (attCritical === true) {
        if (defense === true) {
          if (defCritical === true) { /* Attaque Critique mais Défense Critique, reste bonus à appliquer */
            damage = playerDefense - (enemyAttack * 2);
            attLaunch = 'Attaque Critique';
            defLaunch = 'Défense Critique';
          } else { /* Attaque Critique, Défense Normale */
            damage = playerDefense - (enemyAttack * 2);
            attLaunch = 'Attaque Critique';
            defLaunch = 'Défense réussie';
          }
        } else { /* Attaque Critque, aucune défense */
          damage = -(enemyAttack * 2);
          attLaunch = 'Attaque Critique';
          defLaunch = 'Défense Ratée';
        }
      } else if (defense === true) {
        if (defCritical === true) { /* Attaque non critique, Défense critique (bonus de def à rajouter) */
          damage = playerDefense - enemyAttack;
          attLaunch = 'Attaque réussie';
          defLaunch = 'Défense Critique';
        } else { /* Attaque non critique, Défense non critique */
          damage = playerDefense - enemyAttack;
          attLaunch = 'Attaque réussie';
          defLaunch = 'Défense réussie';
        }
      } else { /* Attaque non critique, Pas de défense */
        damage = -enemyAttack;
        attLaunch = 'Attaque réussie';
        defLaunch = 'Défense ratée';
      }
    }

    this.setState({
      playerLife: this.state.playerLife + Math.min(damage, 0),
      numberPlayer: dicePlayer,
      numberIA: diceIA,
      interface: this.state.interface + 1,
      playerLaunch: defLaunch,
      iaLaunch: attLaunch,
    });
  }

  render() {
    return (
      <div className="backgroundAll">
        <div>
          {this.props.heroes.length > 1 && <EnemyLife villain={this.props.heroes[1]} enemyLife={this.state.enemyLife} />}
        </div>

        <div className="interface__gameplay">
          {this.state.interface === 0
            && (
            <div className="textslide__container">
              <p className="text__slideleft">Your</p>
              <p className="text__slideright"> Turn</p>
              <input type="button" className="continueButton" onClick={this.transition} value="Continue" />
            </div>
            )}

          {this.state.interface === 1
            && (
            <div>
              {/* Attack Choice */}
              <input type="button" className="gameButton" onClick={this.lowAtt} value="Attack 1" />
              <input type="button" className="gameButton" onClick={this.mediumAtt} value="Attack 2" />
              <input type="button" className="gameButton" onClick={this.highAtt} value="Attack 3" />
            </div>
            )}

          {this.state.interface === 2
            && (
            <div className="result__container">
              {/* Résultats */}
              <div className="textresult__container">
                <p className="textresult">{this.state.iaLaunch}</p>
                <p className="textresult">{this.state.playerLaunch}</p>
              </div>
              <div className="dice__container">
                <button className="dice" type="button">{this.state.numberIA}</button>
                <button className="dice" type="button">{this.state.numberPlayer}</button>
              </div>
              <div>
                {this.state.enemyLife <= 0
                  ? <input type="button" className="gameButton" onClick={this.endWin} value="Finish" />
                  : <input type="button" className="continueButton" onClick={this.transition} value="Continue" />}
              </div>
            </div>
            )}

          {this.state.interface === 3
            && (
            <div>
              <p>Enemy Turn</p>
              <input type="button" className="continueButton" onClick={this.transition} value="Continue" />
            </div>
            )}

          {this.state.interface === 4
            && (
            <div>
              {/* Défense Choice */}
              <input type="button" className="gameButton" onClick={() => this.lowDef({ low: 5, medium: 20, high: 95 })} value="Defense 1" />
              <input type="button" className="gameButton" onClick={this.mediumDef} value="Defense 2" />
              <input type="button" className="gameButton" onClick={this.highDef} value="Defense 3" />
            </div>
            )}

          {this.state.interface === 5
            && (
            <div className="result__container">
              {/* Résultats */}
              <div className="textresult__container">
                <p className="textresult">{this.state.iaLaunch}</p>
                <p className="textresult">{this.state.playerLaunch}</p>
              </div>
              <div className="dice__container">
                <button className="dice" type="button">{this.state.numberIA}</button>
                <button className="dice" type="button">{this.state.numberPlayer}</button>
              </div>
              <div>
                {this.state.playerLife <= 0
                  ? <input type="button" className="gameButton" onClick={this.endLose} value="Finish" />
                  : <input type="button" className="continueButton" onClick={this.restart} value="Continue" />}
              </div>
            </div>
            )}

          {this.state.interface === 6
            && (
            <div>
              <p>You Win</p>
              <input type="button" className="continueButton" onClick={this.restart} value="Continue" />
            </div>
            )}

          {this.state.interface === 7
            && (
            <div>
              <p>You Lose</p>
              <input type="button" className="continueButton" onClick={this.restart} value="Continue" />
            </div>
            )}
        </div>

        <div>
          {this.props.heroes.length > 1 && <PlayerStats player={this.props.heroes[0]} playerLife={this.state.playerLife} />}
        </div>
      </div>
    );
  }
}

export default Game;
