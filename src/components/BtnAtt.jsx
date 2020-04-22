import React, { Component } from 'react';
import './Game.css';

class BtnAtt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interface: 'choix',
    };
  }

  ActivButton = () => {
    this.setState({
      interface: 'button',
    });
  }


  render() {
    return (
      <>
        <div className={this.state.interface === 'button' ? 'affichageON' : 'affichageOFF'}>
          <button type="button">Attack</button>
        </div>
      </>
    )
  }

}

export default BtnAtt;
