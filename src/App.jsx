import React from 'react';
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
      allVillains: [],
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
      { universe: 'marvel', heroes: [{ id: 620, nemesisId: 687 }, { id: 346, nemesisId: 655 }, { id: 717, nemesisId: 423 }], villains: [{ id: 687 }, { id: 655 }, { id: 423 }] },
      { universe: 'starwars', heroes: [{ id: 418, nemesisId: 208 }, { id: 555, nemesisId: 639 }, { id: 307, nemesisId: 127 }], villains: [{ id: 208 }, { id: 639 }, { id: 127 }] },
      { universe: 'dc', heroes: [{ id: 70, nemesisId: 370 }, { id: 265, nemesisId: 528 }, { id: 298, nemesisId: 216 }], villains: [{ id: 370 }, { id: 528 }, { id: 216 }] },
      { universe: 'other', heroes: [{ id: 176, nemesisId: 540 }, { id: 389, nemesisId: 287 }, { id: 289, nemesisId: 686 }], villains: [{ id: 540 }, { id: 287 }, { id: 686 }] },
    ];

    for (let i = 0; i < listHeroes.length; i++) {
      const universe = listHeroes[i].universe;

      const heroes = listHeroes[i].heroes;
      for (let j = 0; j < heroes.length; j++) {
        Axios.get(`https://www.superheroapi.com/api.php/10222496537945566/${heroes[j].id}`)
          .then((response) => response.data)
          .then((data) => {
            const allHeroes = [...this.state.allHeroes, { ...data, universe, nemesisId: heroes[j].nemesisId }];
            allHeroes.sort((a, b) => (
              // thx https://www.freecodecamp.org/forum/t/the-sort-method-behaves-different-on-different-browsers/237221
              parseInt(a.id, 10) < parseInt(b.id, 10) ? 1 : -1
            ));
            this.setState({
              allHeroes,
            });
          });
      }
      const villains = listHeroes[i].villains;
      for (let j = 0; j < villains.length; j++) {
        Axios.get(`https://www.superheroapi.com/api.php/10222496537945566/${villains[j].id}`)
          .then((response) => response.data)
          .then((data) => {
            const allVillains = [...this.state.allVillains, { ...data, universe }];
            allVillains.sort((a, b) => (
              // thx https://www.freecodecamp.org/forum/t/the-sort-method-behaves-different-on-different-browsers/237221
              parseInt(a.id, 10) < parseInt(b.id, 10) ? 1 : -1
            ));
            this.setState({
              allVillains,
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

  switchToPlay(heroId) {
    const hero = this.state.allHeroes.find((hero) => parseInt(hero.id) === parseInt(heroId));
    const villain = this.state.allVillains.find((villain) => parseInt(villain.id) === parseInt(hero.nemesisId));
    this.setState({
      currentPage: 'board',
      heroes: [hero, villain],
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
          {this.state.currentPage === 'rules' && <Instruction clickUniverse={this.switchToUniverse} />}
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
