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
          <button onClick={this.props.clickChoice} type='button' className="buttonSw" />
        </div>
        <div>
          <button onClick={this.props.clickChoice} type='button' className="buttonMarvel" />
        </div>
        <div>
          <button onClick={this.props.clickChoice} type='button' className="buttonDc" />
        </div>
        <div>
          <img className="batman" src="https://zupimages.net/up/20/20/u2wi.png" alt="batman" />
        </div>
        <div>
          <img className="spider" src="https://purepng.com/public/uploads/medium/purepng.com-spider-manspider-manspidermansuperherocomic-bookmarvel-comicscharacterstan-lee-1701528654990oleyd.png" alt="batman" />
        </div>
        <div>
          <img className="yoda" src="https://zupimages.net/up/20/20/dcm4.png" alt="batman" />
        </div>
        <div>
          <p className="pChoose">Choose a Universe !</p>
        </div>
      </div>
    );
  }
}

export default Universe;
