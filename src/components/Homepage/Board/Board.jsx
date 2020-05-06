import React from 'react';
import './board.css';
import Game from './Game/Game';


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      venomLife: 500,
      spideyLife: 500,
    };
  }

  render() {
    return (
      <div>
        <div>
          <Game venomLife={this.state.venomLife} />
        </div>
      </div>  
    )
  }
}


export default Board;
