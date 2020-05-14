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
        <div className="counterLife">
          <div className="lifebar">
            <progress className="life__container" id="enemyLife" max={parseFloat(this.props.player.powerstats.power) * 2} value={this.props.playerLife}></progress>
          </div>
          <div>
            <p className="heroLife">{this.props.playerLife} / {parseFloat(this.props.player.powerstats.power) * 2}</p>
          </div>
        </div>
        <img className="player_img" src={this.props.player.image.url} alt='Player Avatar' />
        <h2 className="playerName">{this.props.player.name} </h2>
        <div className="stats__container">
          <ul className="stats__list">
            <li>Initiative : {(parseFloat(this.props.player.powerstats.intelligence) + parseFloat(this.props.player.powerstats.speed))/2} </li>
            <li>Attaque : {parseFloat(this.props.player.powerstats.strength)} </li>
            <li>Résistence : {(parseFloat(this.props.player.powerstats.durability) + parseFloat(this.props.player.powerstats.combat))/2} </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PlayerStats;
