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
            <div className="sectionTwo__container">
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
              <img className="sectionTwo__img" src="https://purepng.com/public/uploads/medium/purepng.com-spider-manspider-manspidermansuperherocomic-bookmarvel-comicscharacterstan-lee-1701528654990oleyd.png" alt="Logo Hero Fate" />
            </div>
          </section>
          <section>
            <div className="footer__container">
              <ul>
                <img src="https://zupimages.net/up/20/20/te5i.png" alt="" />
              </ul>
              <ul>
                <h2>Liens Sociaux</h2>
                <li><a href="https://example.com">Anthony Lucci</a></li>
                <li><a href="https://example.com">Julien Nicaise</a></li>
                <li><a href="https://example.com">Cécyl Lang</a></li>
              </ul>
              <ul>
                <h2>Liens Wild</h2>
                <li>Logo Heroes Fate</li>
              </ul>
              <ul>
                <h2>Ressources</h2>
                <li>API Super-Héros</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Homepage;
