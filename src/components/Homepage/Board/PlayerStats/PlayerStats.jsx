import React from 'react';
import './playerStats.css';

class PlayerStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="interface__player">
        <div className="life__container">
          <p className="life__bar">{this.props.playerLife}</p>
        </div>
        <div className="profile__container">
          <img className="player-image" src={this.props.spidey.image.url} alt='Player Avatar' />
        </div>
        <h2 className="playerName">{this.props.spidey.name} </h2>
        <div className="playerstats__container">
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
