import React, { Component } from 'react';
import '../App.css';

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
      <div className="choicePage">
        <div onClick={this.props.clickPlay} className="heroChoice">
          <div>
            <img className='imgHero' src={this.props.heroes[1].image.url} alt="" />
            <p className="heroName">{this.props.heroes[1].name}</p>
          </div>
          <div className="heroStats">
            <div>
              <img className="imageStats" src="https://zupimages.net/up/20/20/52fc.png" alt="" />
              <p className="stats">{this.props.heroes[1].powerstats.power * 10 }</p>
            </div>
            <div>
              <img className="imageStats" src="https://zupimages.net/up/20/20/o60y.png" alt="" /> 
              <p className="stats">{initiative}</p>
            </div>
            <div>
              <img className="imageStats" src="https://zupimages.net/up/20/20/9q1j.png" alt="" />
              <p className="stats">{this.props.heroes[1].powerstats.strength}</p>
            </div>
            <div>
              <img className="imageStats" src="https://zupimages.net/up/20/20/f8xz.png" alt="" />
              <p className="stats">{resistance}</p>
            </div>
          </div>
        </div>

        <div onClick={this.props.clickPlay} className="heroChoice">
          <div>
            <img className='imgHero' src={this.props.heroes[0].image.url} alt="" />
            <p className="heroName">{this.props.heroes[0].name}</p>
          </div>
          <div className="heroStats">
            <div>
              <img className="imageStats" src="https://zupimages.net/up/20/20/52fc.png" alt="" />
              <p className="stats">{this.props.heroes[0].powerstats.power * 10 }</p>
            </div>
            <div>
              <img className="imageStats" src="https://zupimages.net/up/20/20/o60y.png" alt="" /> 
              <p className="stats">{initiative}</p>
            </div>
            <div>
              <img className="imageStats" src="https://zupimages.net/up/20/20/9q1j.png" alt="" />
              <p className="stats">{this.props.heroes[0].powerstats.strength}</p>
            </div>
            <div>
              <img className="imageStats" src="https://zupimages.net/up/20/20/f8xz.png" alt="" />
              <p className="stats">{resistance}</p>
            </div>
          </div>
        </div>

        <div onClick={this.props.clickPlay} className="heroChoice">
          <div>
            <img className='imgHero' src={this.props.heroes[1].image.url} alt="" />
            <p className="heroName">{this.props.heroes[1].name}</p>
          </div>
          <div className="heroStats">
            <div>
              <img className="imageStats" src="https://zupimages.net/up/20/20/52fc.png" alt="" />
              <p className="stats">{this.props.heroes[1].powerstats.power * 10 }</p>
            </div>
            <div>
              <img className="imageStats" src="https://zupimages.net/up/20/20/o60y.png" alt="" /> 
              <p className="stats">{initiative}</p>
            </div>
            <div>
              <img className="imageStats" src="https://zupimages.net/up/20/20/9q1j.png" alt="" />
              <p className="stats">{this.props.heroes[1].powerstats.strength}</p>
            </div>
            <div>
              <img className="imageStats" src="https://zupimages.net/up/20/20/f8xz.png" alt="" />
              <p className="stats">{resistance}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroesList;
