import React from 'react';
import './enemyLife.css';
import '../Game/game.css';

class EnemyLife extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="interface__ennemi">
        <div className="life__container">
          <p className="life__bar">{this.props.enemyLife}</p>
        </div>
        <div className="profile__container">
          <img className="ennemi-image" src={this.props.venom.image.url} alt='Enemy Avatar' />
        </div>
        <div className="playerstats__container">
          <h2>{this.props.venom.name} </h2>
          <ul className="stats__list">
            <li>Initiative : {(parseFloat(this.props.venom.powerstats.intelligence) + parseFloat(this.props.venom.powerstats.speed))/2} </li>
            <li>Attaque : {parseFloat(this.props.venom.powerstats.strength)} </li>
            <li>Résistence : {(parseFloat(this.props.venom.powerstats.durability) + parseFloat(this.props.venom.powerstats.combat))/2} </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default EnemyLife;
