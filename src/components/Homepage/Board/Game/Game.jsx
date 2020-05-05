import React, { Component } from 'react';
import './game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      interface: 'button',
    };
//    this.doDamage = this.doDamage.bind(this);
    this.attackturn = this.attackturn.bind(this);
  }

  

  componentDidUpdate(prevProps, prevState) {
    /*if (this.state.number !== prevState.number) {
      this.doDamage();
    }*/
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
  
  /*doDamage() {
    const random = 100;
    console.log("Lancés = " + this.state.number)

    if(random <= 5) {
      console.log("Lancés :" + random)
      console.log("Critical fail")
    } else if (random >= 6 && random <= 79) {
      console.log("Lancés :" + random)
      console.log("Attaque ratée")
    } else if (random >= 80 && random <= 94) {
      console.log("Lancés :" + random)
      console.log("Attaque réussie")
      this.setState({
        venomLife: this.props.venomLife - (55),
      })
    } else {
      console.log("Lancés :" + random)
      console.log("Attaque critique")
      this.setState({
        venomLife: this.props.venomLife - (55 * 2),
      }) 
    }
    this.setState({number : random});
  }*/

  attackturn() {
    const dicePlayer = Math.floor(Math.random() * (Math.floor(100)));
    const diceIA = Math.floor(Math.random() * (Math.floor(100)));
    let attack = true
    let critical = true
    let defense = true

    if(dicePlayer <= 5) {
      attack = false
      critical = true
    } else if (dicePlayer >= 6 && dicePlayer <= 79) {
      attack = false
      critical = false
    } else if (dicePlayer >= 80 && dicePlayer <= 94) {
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
        venomLife: this.props.venomLife - (55 * 2),
        number: dicePlayer,
      }) 
    } else if (attack === true && critical === false && defense === false) {
      this.setState({
        venomLife: this.props.venomLife - (55),
        number: dicePlayer,
      })
    } else if (attack === true && critical === true && defense === true) {
      this.setState({
        venomLife: (this.props.venomLife + 50) - (55 * 2),
        number: dicePlayer,
      })
    } else if (attack === true && critical === false && defense === true) {
      this.setState({
        venomLife: (this.props.venomLife + 50) - (55),
        number: dicePlayer,
      })
    } else {
      this.setState({
        number: dicePlayer,
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
        <div>

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
                <div>
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
        </div>
      );
    }
}

export default Game;
