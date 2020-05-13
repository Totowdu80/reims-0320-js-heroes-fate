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
import UniverseList from './components/UniverseList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allHeroes: [],
      heroes: [],
      currentPage: 'homepage',
      wantedUniverse: 'marvel',
    };
    this.switchToRules = this.switchToRules.bind(this);
    this.switchToPlay = this.switchToPlay.bind(this);
    this.switchToChoice = this.switchToChoice.bind(this);
    this.switchToUniverse = this.switchToUniverse.bind(this);
  }

  componentDidMount() {
    const listHeroes = [
      { universe: 'marvel', ids: [687, 620] },
      { universe: 'starwars', ids: [729, 418] },
      { universe: 'dc', ids: [70, 144] },
    ];

    for (let i = 0; i < listHeroes.length; i++) {
      const universe = listHeroes[i].universe;
      const ids = listHeroes[i].ids;
      for (let j = 0; j < ids.length; j++) {
        Axios.get(`https://www.superheroapi.com/api.php/10222496537945566/${ids[j]}`)
          .then((response) => response.data)
          .then((data) => {
            const allHeroes = [...this.state.allHeroes, { ...data, universe }];
            allHeroes.sort((a, b) => (
              // thx https://www.freecodecamp.org/forum/t/the-sort-method-behaves-different-on-different-browsers/237221
              parseInt(a.id, 10) < parseInt(b.id, 10) ? 1 : -1
            ));
            this.setState({
              allHeroes,
            });
          });
      }
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

  switchToChoice(props) {
    this.setState({
      wantedUniverse: props,
      currentPage: 'choice',
    });
  }

  switchToUniverse() {
    this.setState({
      currentPage: 'universe',
    });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.currentPage === 'homepage' && <Homepage clickRules={this.switchToRules} clickPlay={this.switchToPlay} clickChoice={this.switchToChoice} clickUniverse={this.switchToUniverse} />}
        </div>
        <div>
          {this.state.currentPage === 'choice' && <HeroesList heroes={this.state.allHeroes.filter((hero) => hero.universe === this.state.wantedUniverse)} clickPlay={this.switchToPlay} />}
        </div>
        <div>
          {this.state.currentPage === 'universe' && <UniverseList clickChoice={this.switchToChoice} />}
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
            <Game heroes={this.state.heroes} />) }
        </div>


      </div>
    );
  }
}

export default App;
