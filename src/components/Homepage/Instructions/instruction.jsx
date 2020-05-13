import React from 'react';
import './instruction.css';

function Instruction() {
  return (
    <div className="rulescontainer">
      <h1 className="titleInstruction"> Bienvenue dans Heroes Fate</h1>
      <div className="rulesintro">
        <p>
          Heroes Fate est un jeu de combat dans lequel vous incarnez un héros et revivez son histoire.
      </p>
        <p>
          Dans un premier temps, vous allez devoir choisir entre plusieurs univers et une fois cela fait, un seconde choix se fera sur votre héros.
      </p>
        <p>
          Vous avez bien choisi votre univers et votre héro ? Très bien, le jeu peut alors commencer !
        </p>
      </div>

      <h2 className="subtitlerules">Présentation de l'interface de jeu</h2>

      <div className="rulesintracontainer">
        <p>
          Avant toute chose, jetons un oeil à ce qui s'affiche sur votre écran :
          </p>
        <p>
          En haut de ce dernier, vous pouvez apercevoir la partie d'interface concernant votre ennemi : son nom, son avatar, ses points de vie ainsi que ses différentes statistiques
          </p>
        <p>
          Au centre de votre écran se trouve le plateau de jeu, dans lequel toutes les actions principales vont se dérouler et dans lequel vont s'enchainer des tours endiablés de combat
          entre votre héro et son ennemi.
          </p>
        <p>
          Enfin, au bas de votre écran se trouve, la partie d'interface de votre héro qui, tout comme votre ennemi, présentera son nom, son avatar, sa vie ainsi que ses stats
          </p>
      </div>
      <div>
        <img className="imgPlateau" src="https://zupimages.net/up/20/20/a9ky.png" alt="Plateau du jeu avec zone pré selectioner " />
      </div>


      <h2 className="subtitlerules">Phase de combats</h2>

      <div className="rulesintracontainer">
        <p>
          Passons maintenant au coeur du jeu, les combats !
        </p>
        <p>
          Les combats se découpent en 2 phases par tour : une première phase qui sera l'attaque et la deuxième qui sera la défense.
        </p>
        <p>
          La stats d'initiative déterminera qui du joueur ou de l'ennemi attaquera le premier : celui avec la stats la plus haute sera le premier à attaquer
        </p>
        <p>
          Une fois cela déterminé, le combat peut commencer, le premier joueur entre alors en phase d'attaque et accède ainsi à une interface lui proposant 3 attaques : attaque faible,
          attaque normale et attaque puissante, chacune ayant leurs propres caratéristiques. Plus une attaque fera de dégâts, moins elle aura de chance de réussir.
        </p>
        <p>
          Une fois l'attaque choisie par le joueur, un dé est alors lancé permettant de calculer la réussite de celle ci et c'est alors au joueur adverse de choisir sa défense, définit sur
          3 choix différents tout comme l'attaque avec également un taux de réussite dépend des dégâts bloqués. Tout comme l'attaque, une fois le choix fait, un dé est alors lancé afin de définir
          si oui ou non la défense est réussie ou pas.
        </p>
        <div>
          <img className="imgPlateau" src="https://zupimages.net/up/20/20/s7f3.png" alt="choix d'attaque" />
        </div>
        <p>
          Une fois ces choix fait par chacun des joueurs et les dés lancés, le combat commence alors et si réussite il y a alors l'attaquant infligera des dégats au défenseur dépendant de sa réussite
          également.
        </p>
        <div className="instrucPart1">

          <p>
            Une fois cette phase terminée, les rôles sont inversés, le défenseur devient attaquant et l'attaquant devient défenseur, et les combats s'enchainent ainsi de suite jusqu'à ce qu'un des deux
            joueurs atteignent 0 points de vie. Le joueur à 0 sera alors déclaré perdant et son adversaire remportera la partie !
          </p>
          <div>
            <img className="imgPlateau" src="https://zupimages.net/up/20/20/483w.png" alt="lancer de dée" />
          </div>
        </div>
        <div>
          <p className="outro">Tout cela semble clair pour vous ? Alors lancez vous et allez ré-écrire l'histoire de votre héro préféré !</p>
        </div>
      </div>
    </div>
  );
}

export default Instruction;
