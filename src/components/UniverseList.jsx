import React, { Component } from 'react';
import './UniverseList.css';
import '../App.css';

class Universe extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="backUniverse">
        <div>
          <button onClick={() => this.props.clickChoice('starwars')} type='button' className="buttonSw" />
        </div>
        <div>
          <button onClick={() => this.props.clickChoice('marvel')} type='button' className="buttonMarvel" />
        </div>
        <div>
          <button onClick={() => this.props.clickChoice('dc')} type='button' className="buttonDc" />
        </div>
        <div>
          <button onClick={() => this.props.clickChoice('other')} type='button' className="buttonOther" />
        </div>
        <div>
          <img className="batman" src="https://zupimages.net/up/20/20/u2wi.png" alt="batman" />
        </div>
        <div>
          <img className="spider" src="https://purepng.com/public/uploads/medium/purepng.com-spider-manspider-manspidermansuperherocomic-bookmarvel-comicscharacterstan-lee-1701528654990oleyd.png" alt="spiderman" />
        </div>
        <div>
          <img className="yoda" src="https://zupimages.net/up/20/20/dcm4.png" alt="yoda" />
        </div>
        <div>
          <img className="goku" src="https://zupimages.net/up/20/20/vnfv.png" alt="goku" />
        </div>
        <div>
          <p className="pChoose">Choisis un Univers !</p>
        </div>
      </div>
    );
  }
}

export default Universe;
