import React from 'react';

class PlayerStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedPlayerLife: this.props.playerLife,
    };
  }

  componentDidUpdate() {
    const { displayedPlayerLife } = this.state;
    const { playerLife } = this.props;
    if (displayedPlayerLife > playerLife) {
      setTimeout(() => this.setState({ displayedPlayerLife: (displayedPlayerLife - 1) }), 15);
    }
  }

  render() {
    return (
      <div className="interface__player">
        <div className="counterLife">
          <div className="lifebar">
            <progress className="life__container" id="enemyLife" max={parseFloat(this.props.player.powerstats.power) * 2} value={this.state.displayedPlayerLife}></progress>
          </div>
          <div>
            <p className="heroLife">{this.props.playerLife} / {parseFloat(this.props.player.powerstats.power) * 2}</p>
          </div>
        </div>
        <img className="player_img" src={this.props.player.image.url} alt='Player Avatar' />
        <h2 className="playerName">{this.props.player.name} </h2>
        <div className="stats__container">
          <ul className="stats__list">
            <li>
              <img className="imageStats__board" src="https://zupimages.net/up/20/20/5rz1.png" alt="" />
              <p>{(parseFloat(this.props.player.powerstats.intelligence) + parseFloat(this.props.player.powerstats.speed))/2}</p> </li>
            <li>
              <img className="imageStats__board" src="https://zupimages.net/up/20/20/3do4.png" alt="" />
              <p>{parseFloat(this.props.player.powerstats.strength)}</p>
            </li>
            <li>
              <img className="imageStats__board" src="https://zupimages.net/up/20/20/nzbe.png" alt="" />
              <p>{(parseFloat(this.props.player.powerstats.durability) + parseFloat(this.props.player.powerstats.combat))/2}</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PlayerStats;
