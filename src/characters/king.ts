import type { Character } from '../data/costumes';

const baseName = 'King';
const baseId = baseName.toLowerCase();

const chance60 = `Chance de surgir: <span class='status'>60%</span></br>`;
const chance30 = `Chance de surgir: <span class='status'>30%</span></br>`;
const chance10 = `Chance de surgir: <span class='status'>10%</span></br>`;


export const king: Character = {
  id: baseId,
  name: baseName,
  costumes: [
    {
      id: `${baseId}-1`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777398617/1-king-skin1_omre7s.webp',
      costumeName: 'Resiliência Aprimorada',
      descriptions: {
        1: `${chance60} Se os <span class='statusHab'>Pontos de Magia</span> forem <span class='status'>5</span> ou mais ao usar o <span class='statusHab'>Ataque Especial</span>, as durações de <span class='statusHab'>Vantagens</span> aumentam em <span class='status'>30%</span> por <span class='status'>15s</span>. 
        (Recarga: <span class='status'>25s</span>)`,

        2: `${chance30} Se os <span class='statusHab'>Pontos de Magia</span> forem <span class='status'>5</span> ou mais ao usar o <span class='statusHab'>Ataque Especial</span>, as durações de <span class='statusHab'>Vantagens</span> aumentam em <span class='status'>35%</span> por <span class='status'>15s</span>. 
        (Recarga: <span class='status'>25s</span>)`,

        3: `${chance10} Se os <span class='statusHab'>Pontos de Magia</span> forem <span class='status'>5</span> ou mais ao usar o <span class='statusHab'>Ataque Especial</span>, as durações de <span class='statusHab'>Vantagens</span> aumentam em <span class='status'>40%</span> por <span class='status'>15s</span>. 
        (Recarga: <span class='status'>25s</span>)`,
      },
    },

    {
      id: `${baseId}-2`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777398617/1-king-skin2_zh25gg.webp',
      costumeName: 'Rei Ganancioso',
      descriptions: {
        1: `${chance60} Cada acerto aumenta a <span class='statusHab'>Chance de Crítico</span> em <span class='status'>1.2%</span> por <span class='status'>20s</span>. (Máximo: <span class='status'>12%</span>)
        Ganhar <span class='statusHab'>Floração Plena</span> aumenta o <span class='statusHab'>Dano Sagrado</span> em <span class='status'>60%</span> por <span class='status'>10s</span>. (Recarga: <span class='status'>20s</span>)`,

        2: `${chance30} Cada acerto aumenta a <span class='statusHab'>Chance de Crítico</span> em <span class='status'>1.6%</span> por <span class='status'>20s</span>. (Máximo: <span class='status'>16%</span>)
        Ganhar <span class='statusHab'>Floração Plena</span> aumenta o <span class='statusHab'>Dano Sagrado</span> em <span class='status'>70%</span> por <span class='status'>10s</span>. (Recarga: <span class='status'>20s</span>)`,


        3: `${chance10} Cada acerto aumenta a <span class='statusHab'>Chance de Crítico</span> em <span class='status'>2%</span> por <span class='status'>20s</span>. (Máximo: <span class='status'>20%</span>)
        Ganhar <span class='statusHab'>Floração Plena</span> aumenta o <span class='statusHab'>Dano Sagrado</span> em <span class='status'>80%</span> por <span class='status'>10s</span>. (Recarga: <span class='status'>20s</span>)`,

      },
    },
    {
      id: `${baseId}-3`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777398617/1-king-skin3_mftbmo.webp',
      costumeName: 'Apoio da Floresta',
      descriptions: {
        1: `${chance60} Cada acerto em um inimigo afetado por impulso de <span class='statusHab'>Dano Sofrido</span> aumenta a <span class='statusHab'>Eficiência de Barreira</span> em <span class='status'>10%</span> por <span class='status'>10s</span>. (Máximo: <span class='status'>50%</span>)`,

        2: `${chance30} Cada acerto em um inimigo afetado por impulso de <span class='statusHab'>Dano Sofrido</span> aumenta a <span class='statusHab'>Eficiência de Barreira</span> em <span class='status'>13%</span> por <span class='status'>10s</span>. (Máximo: <span class='status'>65%</span>)`,

        3: `${chance10} Cada acerto em um inimigo afetado por impulso de <span class='statusHab'>Dano Sofrido</span> aumenta a <span class='statusHab'>Eficiência de Barreira</span> em <span class='status'>16%</span> por <span class='status'>10s</span>. (Máximo: <span class='status'>80%</span>)`,
      },
    },
  ],
};