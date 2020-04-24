import React from 'react';

class EnnemyProfils extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const venom = this.props.venom
    return (
      <div>
        <img src={venom.image.url} alt="" />
        <p>Vie = {venom.powerstats.durability * 10}</p>
        <p>Defense = {venom.powerstats.power}</p>
      </div>
    );
  }
}

export default EnnemyProfils;
