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
        <div className="counterLifeIa">
          <div className="lifebar">
            <progress className="life__container" id="enemyLife" max={parseFloat(this.props.villain.powerstats.power) * 2} value={this.props.enemyLife}></progress>
          </div>
          <div>
            <p className="villainLife">{this.props.enemyLife} / {parseFloat(this.props.villain.powerstats.power) * 2}</p>
          </div>
        </div>
        <img className="enemy_img" src={this.props.villain.image.url} alt="Enemy Avatar" />
        <h2 className="playerName">{this.props.villain.name} </h2>
        <div className="stats__container">
          <ul className="stats__list">
            <li>Initiative : {(parseFloat(this.props.villain.powerstats.intelligence) + parseFloat(this.props.villain.powerstats.speed))/2} </li>
            <li>Attaque : {parseFloat(this.props.villain.powerstats.strength)} </li>
            <li>Résistence : {(parseFloat(this.props.villain.powerstats.durability) + parseFloat(this.props.villain.powerstats.combat))/2} </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default EnemyLife;
