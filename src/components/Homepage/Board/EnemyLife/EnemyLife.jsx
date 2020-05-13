import React from 'react';

class EnemyLife extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="interface__enemy">
        <div className="lifebar">
          <progress className="life__container" id="enemyLife" max={parseFloat(this.props.venom.powerstats.power) * 2} value={this.props.enemyLife}>50%</progress>
        </div>
        <img className="enemy_img" src={this.props.venom.image.url} alt="Enemy Avatar" />
        <h2 className="playerName">{this.props.venom.name} </h2>
        <div className="stats__container">
          <ul className="stats__list">
            <li>Initiative : {(parseFloat(this.props.venom.powerstats.intelligence) + parseFloat(this.props.venom.powerstats.speed))/2} </li>
            <li>Attaque : {parseFloat(this.props.venom.powerstats.strength)} </li>
            <li>Résistence : {(parseFloat(this.props.venom.powerstats.durability) + parseFloat(this.props.venom.powerstats.combat))/2} </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default EnemyLife;
