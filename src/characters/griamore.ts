import type { Character } from '../data/costumes';

const baseName = 'Griamore';
const baseId = baseName.toLowerCase();

const chance60 = `Chance de surgir: <span class='status'>60%</span></br>`;
const chance30 = `Chance de surgir: <span class='status'>30%</span></br>`;
const chance10 = `Chance de surgir: <span class='status'>10%</span></br>`;

/* Não esqueça de mudar o nome da export const name para o nome do personagem */
export const griamore: Character = {
  id: baseId,
  name: baseName,
  costumes: [
    {
      id: `${baseId}-1`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777411593/imgi_46_icon_Griamore_002_nzg4fu.webp',
      costumeName: 'Forma Resiliente',
      descriptions: {
        1: `${chance60} Aumenta a <span class='statusHab'>Defesa</span> em <span class='status'>16%</span> e a <span class='statusHab'>Eficiência de Barreira</span> em <span class='status'>20%</span>.`,

        2: `${chance30} Aumenta a <span class='statusHab'>Defesa</span> em <span class='status'>18%</span> e a <span class='statusHab'>Eficiência de Barreira</span> em <span class='status'>25%</span>.`,

        3: `${chance10} Aumenta a <span class='statusHab'>Defesa</span> em <span class='status'>20%</span> e a <span class='statusHab'>Eficiência de Barreira</span> em <span class='status'>30%</span>.`,
      },
    },

    {
      id: `${baseId}-2`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777411592/imgi_31_icon_Griamore_003_cyjvcd.webp',
      costumeName: 'statusName',
      descriptions: {
        1: `${chance60} description`,

        2: `${chance30} description`,

        3: `${chance10} description`,
      },
    },
    {
      id: `${baseId}-3`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777411593/imgi_40_icon_Griamore_004_apq4wv.webp',
      costumeName: 'Escudo Fiável',
      descriptions: {
        1: `${chance60} <span class='status'>10%</span> de chance de aumentar a <span class='statusHab'>Defesa</span> de todos os heróis aliados em <span class='status'>40%</span> e gerar <span class='statusHab'>Barreiras</span> equivalentes a <span class='status'>20%</span> dos <span class='statusHab'>PV Máximos</span> por <span class='status'>4s</span> quando um herói aliado sofre um golpe. 
        Se uma <span class='statusHab'>Barreira</span> já estiver ativa, a duração do efeito é estendida em <span class='status'>4s</span>. (Recarga: <span class='status'>10s</span>)`,

        2: `${chance30} <span class='status'>10%</span> de chance de aumentar a <span class='statusHab'>Defesa</span> de todos os heróis aliados em <span class='status'>50%</span> e gerar <span class='statusHab'>Barreiras</span> equivalentes a <span class='status'>25%</span> dos <span class='statusHab'>PV Máximos</span> por <span class='status'>5s</span> quando um herói aliado sofre um golpe. 
        Se uma <span class='statusHab'>Barreira</span> já estiver ativa, a duração do efeito é estendida em <span class='status'>5s</span>. (Recarga: <span class='status'>10s</span>)`,

        3: `${chance10} <span class='status'>10%</span> de chance de aumentar a <span class='statusHab'>Defesa</span> de todos os heróis aliados em <span class='status'>60%</span> e gerar <span class='statusHab'>Barreiras</span> equivalentes a <span class='status'>30%</span> dos <span class='statusHab'>PV Máximos</span> por <span class='status'>6s</span> quando um herói aliado sofre um golpe. 
        Se uma <span class='statusHab'>Barreira</span> já estiver ativa, a duração do efeito é estendida em <span class='status'>6s</span>. (Recarga: <span class='status'>10s</span>)`,
      },
    },
  ],
};