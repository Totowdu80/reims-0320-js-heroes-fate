import React, { Component } from 'react';
import '../App.css';

class HeroesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="choicePage">
        {this.props.heroes.map((hero) => {
          const intell = parseInt(hero.powerstats.intelligence, 10);
          const speed = parseInt(hero.powerstats.speed, 10);
          const initiative = Math.floor((intell + speed) / 2);
          const durability = parseInt(hero.powerstats.durability, 10);
          const combat = parseInt(hero.powerstats.combat, 10);
          const resistance = Math.floor((combat + durability) / 2);
          return (
            <div onClick={() => this.props.clickPlay(hero.id)} className="heroChoice">
              <div>
                <img className="imgHero" src={hero.image.url} alt="" />
                <p className="heroName">{hero.name}</p>
              </div>
              <div className="heroStats">
                <div>
                  <img className="imageStats" src="https://zupimages.net/up/20/20/52fc.png" alt="" />
                  <p className="stats">{hero.powerstats.power * 10 }</p>
                </div>
                <div>
                  <img className="imageStats" src="https://zupimages.net/up/20/20/o60y.png" alt="" /> 
                  <p className="stats">{initiative}</p>
                </div>
                <div>
                  <img className="imageStats" src="https://zupimages.net/up/20/20/9q1j.png" alt="" />
                  <p className="stats">{hero.powerstats.strength}</p>
                </div>
                <div>
                  <img className="imageStats" src="https://zupimages.net/up/20/20/f8xz.png" alt="" />
                  <p className="stats">{resistance}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default HeroesList;
