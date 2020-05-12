import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Axios from 'axios';
import './App.css';

import Homepage from './components/Homepage/Homepage';
import Instruction from './components/Homepage/Instructions/instruction';
import Game from './components/Homepage/Board/Game/Game';
import HeroesList from './components/HeroesList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
      currentPage: 'homepage',
    };
    this.switchToRules = this.switchToRules.bind(this);
    this.switchToPlay = this.switchToPlay.bind(this);
    this.switchToChoice = this.switchToChoice.bind(this);
  }

  componentDidMount() {
    const listHeroes = [
      687,
      620,
    ];

    for (let i = 0; i < listHeroes.length; i++) {
      Axios.get(`https://www.superheroapi.com/api.php/10222496537945566/${listHeroes[i]}`)
        .then((response) => response.data)
        .then((data) => {
          const heroes = [...this.state.heroes, data];
          heroes.sort((a, b) => (
            // thx https://www.freecodecamp.org/forum/t/the-sort-method-behaves-different-on-different-browsers/237221
            parseInt(a.id, 10) < parseInt(b.id, 10) ? 1 : -1
          ));
          this.setState({
            heroes,
          });
        });
    }
  }

  switchToRules() {
    this.setState({
      currentPage: 'rules',
    });
  }

  switchToPlay() {
    this.setState({
      currentPage: 'board',
    });
  }

  switchToChoice() {
    this.setState({
      currentPage: 'choice',
    });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.currentPage === 'homepage' && <Homepage clickRules={this.switchToRules} clickPlay={this.switchToPlay} clickChoice={this.switchToChoice} />}
        </div>
        <div>
          {this.state.currentPage === 'choice' && <HeroesList heroes={this.state.heroes} />}
        </div>
        <div>
          {this.state.currentPage === 'rules' && (
          <Router>
            <div>
              <nav>
                <ul className="navbar">
                  <li><NavLink activeClassName="active" to="/rules">Instructions</NavLink></li>
                  <li><NavLink activeClassName="active" to="/legalmention">Mentions Légales</NavLink></li>
                </ul>
              </nav>

              <Switch>

                <Route exact path="/rules">
                  <Instruction />
                </Route>

                <Route path="/legalmention">
                  <p>Here will be something</p>
                </Route>

              </Switch>
            </div>
          </Router>
          )}
        </div>

        <div>
          {this.state.currentPage === 'board' && (
            this.state.heroes.length > 1 && <Game heroes={this.state.heroes} />) }
        </div>


      </div>
    );
  }
}

export default App;