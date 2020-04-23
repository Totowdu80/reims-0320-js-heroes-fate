import React from 'react';

class EnnemyProfils extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <img src={this.props.ennemy.image.url} />
        <p>Vie = {this.props.ennemy.powerstats.durability * 10}</p>
        <p>Defense = {this.props.ennemy.powerstats.power}</p>
      </div>
    )
  }
}

export default EnnemyProfils;
