import React from 'react';
import './instruction.css';

function Instruction() {
  return (
    <div>
      <h1 className="titleInstruction"> Bienvenue dans Heroes Fate,</h1>
      <p>
        C'est un jeu de combat entre un héros et une vague de super méchant,
        Une fois votre Univers choisi, vous aurez le choix entre plusieurs 
        Héros correspondent a cette univers
      <p>
        Vous avez choisi votre héros maintenant entrer dans le combat, le combattant ayan le plus de rapidité commence son attaque ensuite vous choisiez un moyen de vous défendre face a cette attaque
        après c'est a vous d'attaquer et a lui de ce défendre, a tour jusqu'à ce que l'un des deux n'est plus de point de vie
      </p>
      <p>
        Pour la phases d'attaque vous avez le choix entre trois type attaque différente, qui font plus ou moins de dégâts de la plus forte a la moins forte
        sachant que si vous choisissez l'attaque la plus forte vous avez moins de chance de réussite que si vous prenez une attaque moins puissante.
        tout ceci vous seras décris dans un tableau en dessus des instruction
      </p>
      <p>
        Pour la phases de défense même principe, vous avez le choix entre deux type de défense différente, qui permette soit d'esquiver complètement l'attaque, sois d'affaiblir les dommage de celle ci
        sachant que comme l'attaque si vous choisissez l'esquive complète vous avez moins de chance de réussite donc vous pouvez vous loupez et prendre l'attaque de plein fouet
        comme le reste dans le tableau si dessous vous verrez entièrement les caractéristique de chaque défense
      </p>
        Après avoir choisi votre attaque ou votre défense en fonction du tour, pour savoir si celle ci sera réussi ou non vous devrez lancé un dés a 100 faces qui vous permettra avec de la chance ou non de donnez suite a votre attaque ou votre défense
      </p>
    </div>
  );
}

export default Instruction;
