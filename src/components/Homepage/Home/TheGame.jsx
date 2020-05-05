
import React from 'react';
import './theGame.css';

class TheGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="theGame__container">
        <div className="animated__entry">
          <img className="imgLogo" src="https://zupimages.net/up/20/16/gwq6.png" alt="Logo Hero Fate" />
        </div>
        <div className="FontAcc">
          <p className="Slogan">Will you change the fate of your hero ?</p>
          <button
            className="buttonPlay"
            onClick={this.props.changeScreen}
            type="button">
            Let's Play !
          </button>
        </div>

      </div>
    );
  }
}

export default TheGame;
