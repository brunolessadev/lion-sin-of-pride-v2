import type { Character } from '../data/costumes';

const baseName = 'Gilthunder';
const baseId = baseName.toLowerCase();

const chance60 = `Chance de surgir: <span class='status'>60%</span></br>`;
const chance30 = `Chance de surgir: <span class='status'>30%</span></br>`;
const chance10 = `Chance de surgir: <span class='status'>10%</span></br>`;

/* Não esqueça de mudar o nome da export const name para o nome do personagem */
export const gilthunder: Character = {
  id: baseId,
  name: baseName,
  costumes: [
    {
      id: `${baseId}-1`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777411592/imgi_46_icon_Gil_Thunder_002_jmehra.webp',
      costumeName: 'Raio Penetrante',
      descriptions: {
        1: `${chance60} Cada acerto aumenta o <span class='statusHab'>Dano de Relâmpago</span> em <span class='status'>1%</span> por <span class='status'>10s</span>. (Máximo: <span class='status'>20%</span>)`,

        2: `${chance30} Cada acerto aumenta o <span class='statusHab'>Dano de Relâmpago</span> em <span class='status'>1.3%</span> por <span class='status'>10s</span>. (Máximo: <span class='status'>26%</span>)`,

        3: `${chance10} Cada acerto aumenta o <span class='statusHab'>Dano de Relâmpago</span> em <span class='status'>1.6%</span> por <span class='status'>10s</span>. (Máximo: <span class='status'>32%</span>)`,
      },
    },

    {
      id: `${baseId}-2`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777411592/imgi_40_icon_Gil_Thunder_003_qf3gbo.webp',
      costumeName: 'Choque Irruptivo',
      descriptions: {
        1: `${chance60} Ativar uma <span class='statusHab'>Irrupção</span> aumenta a duração de <span class='statusHab'>Choque</span> do inimigo em <span class='status'>6s</span> e recupera o <span class='statusHab'>Medidor de Alternância</span> em <span class='status'>1200</span>. (Recarga: <span class='status'>20s</span>)`,

        2: `${chance30} Ativar uma <span class='statusHab'>Irrupção</span> aumenta a duração de <span class='statusHab'>Choque</span> do inimigo em <span class='status'>8s</span> e recupera o <span class='statusHab'>Medidor de Alternância</span> em <span class='status'>1600</span>. (Recarga: <span class='status'>20s</span>)`,

        3: `${chance10} Ativar uma <span class='statusHab'>Irrupção</span> aumenta a duração de <span class='statusHab'>Choque</span> do inimigo em <span class='status'>10s</span> e recupera o <span class='statusHab'>Medidor de Alternância</span> em <span class='status'>2000</span>. (Recarga: <span class='status'>20s</span>)`,
      },
    },
    {
      id: `${baseId}-3`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777411592/imgi_31_icon_Gil_Thunder_004_yoatvy.webp',
      costumeName: 'Proteção de Para-raios',
      descriptions: {
        1: `${chance60} <span class='status'>20%</span> de chance de reduzir a recarga da <span class='statusHab'>Perícia Normal</span> em <span class='status'>60%</span> e aumentar a <span class='statusHab'>Defesa</span> de todos os heróis aliados em <span class='status'>20%</span> por <span class='status'>15s</span> quando atingido por um inimigo <span class='statusHab'>Provocado</span>. (Recarga: <span class='status'>30s</span>)`,

        2: `${chance30} <span class='status'>20%</span> de chance de reduzir a recarga da <span class='statusHab'>Perícia Normal</span> em <span class='status'>80%</span> e aumentar a <span class='statusHab'>Defesa</span> de todos os heróis aliados em <span class='status'>25%</span> por <span class='status'>15s</span> quando atingido por um inimigo <span class='statusHab'>Provocado</span>. (Recarga: <span class='status'>30s</span>)`,

        3: `${chance10} <span class='status'>20%</span> de chance de reduzir a recarga da <span class='statusHab'>Perícia Normal</span> em <span class='status'>100%</span> e aumentar a <span class='statusHab'>Defesa</span> de todos os heróis aliados em <span class='status'>30%</span> por <span class='status'>15s</span> quando atingido por um inimigo <span class='statusHab'>Provocado</span>. (Recarga: <span class='status'>30s</span>)`,
      },
    },
  ],
};