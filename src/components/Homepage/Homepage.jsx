import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div>
          <section className="sectionOne">
            <img className="imgLogo" src="https://zupimages.net/up/20/20/te5i.png" alt="Logo Hero Fate" />
            <p className="slogan">Changerez vous le destin de votre héros ?</p>
            <div className="button__container">
              <button
                className="homeButton"
                onClick={this.props.clickRules}
                type="button"
              >
                Comment jouer ?
              </button>
              <button
                className="homeButton"
                onClick={this.props.clickUniverse}
                type="button"
              >
                <span>Jouer</span>
              </button>
            </div>
          </section>

          <img className="separation__img" src="https://rocketleague.media.zestyio.com/rl_rp6_down-arrow_7917.png" alt="" />
          <section className="sectionTwo">
            <div className="sectionTwo__leftcontainer">
              <div className="sectionTwo__textcontainer">
                <h2 className="articleTitle">Bienvenue sur Heroes Fate</h2>
                <p>
                  Heroes Fate est un jeu de plateau dans lequel vous incarnez un héros et revivez son histoire à travers différents combats
                </p>
                <p>Choisissez votre héros, enfilez votre plus beau costume et lancez vous dans l'aventure</p>
              </div>
            </div>
            <div className="sectionTwo__rightcontainer">
              <img className="img_rightcontainer" src="https://www.dlf.pt/png/big/6/68463_darth-png.png" alt="" />
            </div>
          </section>
          <section className="sectionThree">
            <div className="sectionThree__leftcontainer">
              <img className="img_leftcontainer" src="https://zupimages.net/up/20/20/nt4c.png" alt="" />
            </div>
            <div className="sectionThree__rightcontainer">
              <div className="sectionThree__textcontainer">
                <h2 className="articleTitle">Les nouveautés à venir</h2>
                <ul>
                  <h3>Prochaine mise à jour :</h3>
                  <li>Toujours plus d'univers</li>
                  <li>De nouveaux héros à jouer</li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <div className="footer__container">
              <ul>
                <img src="https://zupimages.net/up/20/20/te5i.png" alt="" />
              </ul>
              <ul>
                <h2>Liens Sociaux</h2>
                <li><a href="https://www.linkedin.com/in/anthony-lucci-62b8a911a/">Anthony Lucci</a>
                <img src="https://zupimages.net/up/20/20/8pdo.png" alt="linkedin icone" /></li>
                <li><a href="https://www.linkedin.com/in/julien-nicaise-64b0641a4/">Julien Nicaise</a>
                <img src="https://zupimages.net/up/20/20/8pdo.png" alt="linkedin icone" /></li>
                <li><a href="https://www.linkedin.com/in/c%C3%A9cyl-lang-b21948194/">Cécyl Lang </a>
                <img src="https://zupimages.net/up/20/20/8pdo.png" alt="linkedin icone" /></li>
              </ul>
              <ul>
                <h2>Liens Wild</h2>
                <li><a href="https://www.wildcodeschool.com/fr-FR">Wild Code School</a></li>
              </ul>
              <ul>
                <h2>Ressources</h2>
                <li><a href="https://superheroapi.com/">API Super-Héros</a></li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Homepage;
