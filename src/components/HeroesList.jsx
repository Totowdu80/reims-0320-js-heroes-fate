import React, { Component } from 'react';
import PlayerStats from './PlayerStats';
import PlayerProfils from './PlayerProfil';

class HeroesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const intell = parseInt(this.props.heroes[1].powerstats.intelligence, 10);
    const speed = parseInt(this.props.heroes[1].powerstats.speed, 10);
    const initiative = Math.floor((intell + speed) / 2);

    const durability = parseInt(this.props.heroes[1].powerstats.durability, 10);
    const combat = parseInt(this.props.heroes[1].powerstats.combat, 10);
    const resistance = Math.floor((combat + durability) / 2);
    return (
      <div>
        <div>
        <img className='imgHero' src={this.props.heroes[1].image.url} alt="" />
        </div>
        <div>
          {this.props.heroes[1].name}
        </div>
        <div>
          <p>Life {this.props.heroes[1].powerstats.power * 10 }</p>
        </div>
        <div>
          <p>Initiative {initiative}</p>
        </div>
        <div>
          <p>Strength {this.props.heroes[1].powerstats.strength}</p>
        </div>
        <div>
          <p>Resistance {resistance}</p>
        </div>
      </div>
    );
  }
}

export default HeroesList;
