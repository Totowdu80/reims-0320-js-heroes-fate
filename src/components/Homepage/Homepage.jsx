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
            <p className="Slogan">Will you change the fate of your hero ?</p>
            <div className="button__container">
              <button
                className="homeButton"
                onClick={this.props.clickRules}
                type="button"
              >
                How to play
              </button>
              <button
                className="homeButton"
                onClick={this.props.clickUniverse}
                type="button"
              >
                <span>Play</span>
              </button>
            </div>
          </section>

          <img className="separation__img" src="https://rocketleague.media.zestyio.com/rl_rp6_down-arrow_7917.png" alt="" />
          <section className="sectionTwo">
            <div className="sectionTwo__leftcontainer">
              <div className="sectionTwo__textcontainer">
                <h2>Bienvenue sur Heroes Fate</h2>
                <p className="Slogan">Choisis ton univers, ton héros et pars jouer des parties endiablées pour venir à bout de tes pires ennemis</p>
                <div className="block__container">
                  <div className="littleBlock">
                    <button onClick={this.props.clickUniverse} type="button" >Choose your universe !</button>
                    <button onClick={this.props.clickChoice} type="button">choose your hero !</button>
                    <div className="littleBlock__text">
                      <p>Différents Univers ...</p>
                      <p>Un choix varié d'univers allant de Marvel à DC en passant par Star Wars</p>
                    </div>
                  </div>
                  <div className="littleBlock">
                    <img  className="littleBlock__img" src="https://thumbor-gc.tomandco.uk/unsafe/trim/fit-in/342x342/center/middle/smart/filters:upscale():fill(white):sharpen(0.5,0.5,true)/https://shop.eaglemoss.com/static/media/catalog/product/i/m/abyswe045_3.jpg" alt="" />
                    <div className="littleBlock__text">
                      <p>... pour différents héros</p>
                      <p>Un choix varié d'univers allant de Marvel à DC en passant par Star Wars</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sectionTwo__rightcontainer">
              <img className="img_righcontainer" src="https://zupimages.net/up/20/20/1ycs.png" alt="" />
            </div>
          </section>
          
          <section className="sectionThree">
          <div className="sectionThree__leftcontainer">
              <div className="sectionThree__textcontainer">
                <h2>Bienvenue sur Heroes Fate</h2>
                <p className="Slogan">Choisis ton univers, ton héros et pars jouer des parties endiablées pour venir à bout de tes pires ennemis</p>
                <div className="block__container">
                  <div className="littleBlock">
                    <button onClick={this.props.clickUniverse} type="button" >Choose your universe !</button>
                    <button onClick={this.props.clickChoice} type="button">choose your hero !</button>
                    <div className="littleBlock__text">
                      <p>Différents Univers ...</p>
                      <p>Un choix varié d'univers allant de Marvel à DC en passant par Star Wars</p>
                    </div>
                  </div>
                  <div className="littleBlock">
                    <img  className="littleBlock__img" src="https://thumbor-gc.tomandco.uk/unsafe/trim/fit-in/342x342/center/middle/smart/filters:upscale():fill(white):sharpen(0.5,0.5,true)/https://shop.eaglemoss.com/static/media/catalog/product/i/m/abyswe045_3.jpg" alt="" />
                    <div className="littleBlock__text">
                      <p>... pour différents héros</p>
                      <p>Un choix varié d'univers allant de Marvel à DC en passant par Star Wars</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sectionThree__rightcontainer">
              <img className="img_righcontainer" src="https://zupimages.net/up/20/20/1ycs.png" alt="" />
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
