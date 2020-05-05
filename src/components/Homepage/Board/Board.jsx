import React from 'react';
import './board.css';
import Game from './Game/Game';


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      venomLife: 500,
      spideyLife: 500,
    };
  }

  render() {
    return (
      <div>
        <div>
          <div className="interface__player">
            <div className="life__container">
              <p className="life__bar">{this.state.venomLife}</p>
              <p className="life__bar"></p>
            </div>
            <div className="profile__container">
              <img className="profile__img" src="" alt='' />
            </div>
            <div className="playerstats__container">
              <h2>Nom : </h2>
              <ul className="stats__list">
                <li>Intelligence : </li>
                <li>Force : </li>
                <li>Vitesse : </li>
                <li>Puissance : </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <Game venomLife={this.state.venomLife} />
        </div>
        <div>
          <div className="interface__player">
            <div className="life__container">
              <p className="life__bar"></p>
              <p className="life__bar"></p>
            </div>
            <div className="profile__container">
              <img className="profile__img" src="" alt='' />
            </div>
            <div className="playerstats__container">
              <h2>Nom : </h2>
              <ul className="stats__list">
                <li>Intelligence : </li>
                <li>Force : </li>
                <li>Vitesse : </li>
                <li>Puissance : </li>
              </ul>
            </div>
          </div>
        </div>  
      </div>  
    )
  }
}


export default Board;
