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
    this.switchToHome = this.switchToHome.bind(this);
  }

  componentDidMount() {
    const listHeroes = [
      { universe: 'marvel', heroes: [{ id: 620, nemesisId: 687 }, { id: 346, nemesisId: 655 }, { id: 717, nemesisId: 423 }], villains: [{ id: 687 }, { id: 655 }, { id: 423 }] },
      { universe: 'starwars', heroes: [{ id: 418, nemesisId: 208 }, { id: 555, nemesisId: 639 }, { id: 307, nemesisId: 127 }], villains: [{ id: 208 }, { id: 639 }, { id: 127 }] },
      { universe: 'dc', heroes: [{ id: 70, nemesisId: 370 }, { id: 265, nemesisId: 528 }, { id: 298, nemesisId: 216 }], villains: [{ id: 370 }, { id: 528 }, { id: 216 }] },
    ];

    const heroesIds = listHeroes.reduce((ids, universe) => [
      ...ids,
      ...universe.heroes.map((hero) => hero.id),
    ], []);
    const heroesUrl = `https://heroes-api-wrapper.herokuapp.com/heroes?heroIds=${heroesIds.join(',')}`;

    Axios.get(heroesUrl)
      .then((response) => response.data)
      .then((data) => {
        const allHeroes = data.map((hero) => ({
          ...hero,
          universe: listHeroes.find(
            (universe) => universe.heroes.findIndex(
              (candidate) => parseInt(candidate.id, 10) === parseInt(hero.id, 10),
            ) !== -1,
          ).universe,
          nemesisId: listHeroes.reduce(
            (found, universe) => found ?? universe.heroes.find(
              (candidate) => parseInt(candidate.id, 10) === parseInt(hero.id, 10),
            ), null,
          ).nemesisId,
        }));
        allHeroes.sort((a, b) => (
          // thx https://www.freecodecamp.org/forum/t/the-sort-method-behaves-different-on-different-browsers/237221
          parseInt(a.id, 10) < parseInt(b.id, 10) ? 1 : -1
        ));
        this.setState({
          allHeroes,
        });
      });

    const villainsIds = listHeroes.reduce((ids, universe) => [
      ...ids,
      ...universe.villains.map((villain) => villain.id),
    ], []);
    const villainsUrl = `https://heroes-api-wrapper.herokuapp.com/heroes?heroIds=${villainsIds.join(',')}`;

    Axios.get(villainsUrl)
      .then((response) => response.data)
      .then((data) => {
        const allVillains = data;
        allVillains.sort((a, b) => (
          // thx https://www.freecodecamp.org/forum/t/the-sort-method-behaves-different-on-different-browsers/237221
          parseInt(a.id, 10) < parseInt(b.id, 10) ? 1 : -1
        ));
        this.setState({
          allVillains,
        });
      });
  }

  switchToHome() {
    this.setState({
      currentPage: 'homepage',
    });
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
            this.state.heroes.length > 1 && <Game heroes={this.state.heroes} clickHome={this.switchToHome} />) }
        </div>
      </div>
    );
  }
}

export default App;
