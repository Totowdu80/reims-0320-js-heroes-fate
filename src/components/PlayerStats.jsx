import React from 'react';
import './PlayerStats.css';

class PlayerStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const player = this.props.venom
    return (
      <body>
        <div>
          <ul>
            <li>
              Nom : {player.name}
            </li>
            <li>
              Intelligence : {player.powerstats.intelligence}
            </li>
            <li>
              Force : {player.powerstats.strength}
            </li>
            <li>
              Vitesse : {player.powerstats.speed}
            </li>
            <li>
              Puissance : {player.powerstats.power}
            </li>
          </ul>
        </div>
      </body>
    );
  }
}

export default PlayerStats;
