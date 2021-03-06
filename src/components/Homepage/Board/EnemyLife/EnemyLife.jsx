import React from 'react';

class EnemyLife extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedEnemyLife: this.props.enemyLife,
    };
  }

  componentDidUpdate() {
    const { displayedEnemyLife } = this.state;
    const { enemyLife } = this.props;
    if (displayedEnemyLife > enemyLife) {
      setTimeout(() => this.setState({ displayedEnemyLife: (displayedEnemyLife - 1) }), 15);
    }
  }

  render() {
    return (
      <div className="interface__enemy">
        <div className="counterLifeIa">
          <div className="lifebar">
          <progress className="life__container" id="enemyLife" max={parseFloat(this.props.villain.powerstats.power) * 2} value={this.state.displayedEnemyLife}></progress>
          </div>
          <div>
            <p className="villainLife">{this.props.enemyLife} / {parseFloat(this.props.villain.powerstats.power) * 2}</p>
          </div>
        </div>
        <img className="enemy_img" src={this.props.villain.image.url} alt="Enemy Avatar" />
        <h2 className="playerName">{this.props.villain.name} </h2>
        <div className="stats__container">
          <ul className="stats__list">
            <li>
              <img className="imageStats__board" src="https://zupimages.net/up/20/20/5rz1.png" alt="" />
              <p>{(parseFloat(this.props.villain.powerstats.intelligence) + parseFloat(this.props.villain.powerstats.speed))/2}</p>
            </li>
            <li>
              <img className="imageStats__board" src="https://zupimages.net/up/20/20/3do4.png" alt="" />
              <p>{parseFloat(this.props.villain.powerstats.strength)}</p>
            </li>
            <li>
              <img className="imageStats__board" src="https://zupimages.net/up/20/20/nzbe.png" alt="" />
              <p>{(parseFloat(this.props.villain.powerstats.durability) + parseFloat(this.props.villain.powerstats.combat))/2}</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default EnemyLife;
