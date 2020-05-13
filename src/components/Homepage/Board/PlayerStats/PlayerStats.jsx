import React from 'react';

class PlayerStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="interface__player">
        <div className="lifebar">
          <progress className="life__container" id="enemyLife" max={parseFloat(this.props.spidey.powerstats.power) * 2} value={this.props.playerLife}>50%</progress>
        </div>
        <img className="player_img" src={this.props.spidey.image.url} alt='Player Avatar' />
        <h2 className="playerName">{this.props.spidey.name} </h2>
        <div className="stats__container">
          <ul className="stats__list">
            <li>Initiative : {(parseFloat(this.props.spidey.powerstats.intelligence) + parseFloat(this.props.spidey.powerstats.speed))/2} </li>
            <li>Attaque : {parseFloat(this.props.spidey.powerstats.strength)} </li>
            <li>Résistence : {(parseFloat(this.props.spidey.powerstats.durability) + parseFloat(this.props.spidey.powerstats.combat))/2} </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PlayerStats;
