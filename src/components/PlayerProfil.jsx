import React, { Component } from 'react';
import './PlayerProfil.css';

class PlayerProfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
        return(
          <div className='container'>
            <p className='life'>{this.props.heroes[0].powerstats.durability * 10}</p>
            <img className='imgHero' src={this.props.heroes[0].image.url} alt=""/>
            <p className='armor'>{this.props.heroes[0].powerstats.power}</p>
          </div>
        );
    }
}

export default PlayerProfil;
