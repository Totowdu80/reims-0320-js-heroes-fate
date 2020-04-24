import React from 'react';
import './PlayerStats.css';

class PlayerStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <body>
        <div>
          <ul>
            <li>Nom :</li>
            <li>Intelligence : </li>
            <li>Force : </li>
            <li>Vitesse : </li>
            <li>Puissance : </li>
          </ul>
        </div>
      </body>
    );
  }
}

export default PlayerStats;
