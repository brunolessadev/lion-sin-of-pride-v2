import type { Character } from '../data/costumes';

const baseName = 'Elaine';
const baseId = baseName.toLowerCase();

const chance60 = `Chance de surgir: <span class='status'>60%</span></br>`;
const chance30 = `Chance de surgir: <span class='status'>30%</span></br>`;
const chance10 = `Chance de surgir: <span class='status'>10%</span></br>`;


export const elaine: Character = {
  id: baseId,
  name: baseName,
  costumes: [
    {
      id: `${baseId}-1`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777398646/1-elaine-skin1_ibklk9.webp',
      costumeName: 'Ruflar Veloz',
      descriptions: {
        1: `${chance60} <span class='status'>20%</span> de chance de recuperar o <span class='statusHab'>Medidor de Alternância</span> em <span class='status'>1000</span>, ou <span class='status'>80%</span> de chance de aumentar o <span class='statusHab'>Medidor de Irrupção</span> do inimigo em <span class='status'>200</span> ao usar a <span class='statusHab'>Perícia de Alternância</span>. (Recarga: <span class='status'>20s</span>)`,

        2: `${chance30} <span class='status'>20%</span> de chance de recuperar o <span class='statusHab'>Medidor de Alternância</span> em <span class='status'>1250</span>, ou <span class='status'>80%</span> de chance de aumentar o <span class='statusHab'>Medidor de Irrupção</span> do inimigo em <span class='status'>250</span> ao usar a <span class='statusHab'>Perícia de Alternância</span>. (Recarga: <span class='status'>20s</span>)`,

        3: `${chance10} <span class='status'>20%</span> de chance de recuperar o <span class='statusHab'>Medidor de Alternância</span> em <span class='status'>1500</span>, ou <span class='status'>80%</span> de chance de aumentar o <span class='statusHab'>Medidor de Irrupção</span> do inimigo em <span class='status'>300</span> ao usar a <span class='statusHab'>Perícia de Alternância</span>. (Recarga: <span class='status'>20s</span>)`,
      },
    },

    {
      id: `${baseId}-2`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777398647/1-elaine-skin2_glnbyx.webp',
      costumeName: 'Pressa da Tormenta',
      descriptions: {
        1: `${chance60} Cada impulso de <span class='statusHab'>Dano Crítico</span> obtido reduz a recarga da <span class='statusHab'>Perícia Normal</span> em <span class='status'>1s</span> e aumenta o <span class='statusHab'>Ataque de Ar</span> em <span class='status'>16%</span> por <span class='status'>5s</span>. (Máximo: <span class='status'>48%</span>)`,

        2: `${chance30} Cada impulso de <span class='statusHab'>Dano Crítico</span> obtido reduz a recarga da <span class='statusHab'>Perícia Normal</span> em <span class='status'>2s</span> e aumenta o <span class='statusHab'>Ataque de Ar</span> em <span class='status'>20%</span> por <span class='status'>5s</span>. (Máximo: <span class='status'>60%</span>)`,

        3: `${chance10} Cada impulso de <span class='statusHab'>Dano Crítico</span> obtido reduz a recarga da <span class='statusHab'>Perícia Normal</span> em <span class='status'>3s</span> e aumenta o <span class='statusHab'>Ataque de Ar</span> em <span class='status'>24%</span> por <span class='status'>5s</span>. (Máximo: <span class='status'>72%</span>)`,
      },
    },
    {
      id: `${baseId}-3`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777398647/1-elaine-skin3_mekbgd.webp',
      costumeName: 'Onda de Bênção',
      descriptions: {
        1: `${chance60} Ativar uma <span class='statusHab'>Irrupção</span> recupera o <span class='statusHab'>Medidor de Magia</span> em <span class='status'>1500</span> e aumenta o dano de <span class='statusHab'>Perícia de Alternância</span> em <span class='status'>30%</span> de todos os heróis aliados por <span class='status'>20s</span>. (Recarga: <span class='status'>20s</span>)`,

        2: `${chance30} Ativar uma <span class='statusHab'>Irrupção</span> recupera o <span class='statusHab'>Medidor de Magia</span> em <span class='status'>1750</span> e aumenta o dano de <span class='statusHab'>Perícia de Alternância</span> em <span class='status'>40%</span> de todos os heróis aliados por <span class='status'>20s</span>. (Recarga: <span class='status'>20s</span>)`,

        3: `${chance10} Ativar uma <span class='statusHab'>Irrupção</span> recupera o <span class='statusHab'>Medidor de Magia</span> em <span class='status'>2000</span> e aumenta o dano de <span class='statusHab'>Perícia de Alternância</span> em <span class='status'>50%</span> de todos os heróis aliados por <span class='status'>20s</span>. (Recarga: <span class='status'>20s</span>)`,
      },
    },
  ],
};