import React from 'react';
import './App.css';
import Axios from 'axios';

import Game from './components/Game';
import Board from './components/Board';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
    };
  }

  componentDidMount() {
    const listHeroes = [
      620,
      687,
    ];

    for (let i = 0; i < listHeroes.length; i++) {
      Axios.get(`https://www.superheroapi.com/api.php/10222496537945566/${listHeroes[i]}`)
        .then((response) => response.data)
        .then((data) => {
          this.setState({
            heroes: [...this.state.heroes, data],
          });
        });
    }
  }

  render() {
    return (
      <div>
        <header>
          <Game />
          <Board heroes={this.state.heroes} />
        </header>
      </div>
    );
  }
}

export default App;
