import React from 'react';
import './board.css';
import Game from './Game/Game';


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div>
          <Game venom={this.props.heroes[0]} spidey={this.props.heroes[1]} />
        </div>
      </div>
    );
  }
}


export default Board;
