
import React from 'react';
import './accueil.css';

function Accueil() {
  return (
    <div className="FontAcc">
      <img className="imgLogo" src="https://zupimages.net/up/20/16/gwq6.png" alt="Logo Hero Fate" />
      <p className="Slogan">Will you change the fate of your hero ?</p>
      <button className="ButtonPlay" type="button">Play now !</button>
    </div>
  );
}

export default Accueil();
