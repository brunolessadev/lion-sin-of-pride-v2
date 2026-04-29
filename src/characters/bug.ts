import type { Character } from '../data/costumes';

const baseName = 'Bug';
const baseId = baseName.toLowerCase();

const chance60 = `Chance de surgir: <span class='status'>60%</span></br>`;
const chance30 = `Chance de surgir: <span class='status'>30%</span></br>`;
const chance10 = `Chance de surgir: <span class='status'>10%</span></br>`;


export const bug: Character = {
  id: baseId,
  name: baseName,
  costumes: [
    {
      id: `${baseId}-1`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777411591/imgi_46_icon_Bug_002_kcp8yx.webp',
      costumeName: 'Escuridão Velada',
      descriptions: {
        1: `${chance60} <span class='statusHab'>Ataques pelas Costas</span> aumentam o <span class='statusHab'>Dano de Escuridão</span> em <span class='status'>15%</span> e a <span class='statusHab'>Eficiência de DpT</span> em <span class='status'>60%</span> por <span class='status'>10s</span>. (Recarga: <span class='status'>25s</span>)`,

        2: `${chance30} <span class='statusHab'>Ataques pelas Costas</span> aumentam o <span class='statusHab'>Dano de Escuridão</span> em <span class='status'>20%</span> e a <span class='statusHab'>Eficiência de DpT</span> em <span class='status'>80%</span> por <span class='status'>10s</span>. (Recarga: <span class='status'>25s</span>)`,

        3: `${chance10} <span class='statusHab'>Ataques pelas Costas</span> aumentam o <span class='statusHab'>Dano de Escuridão</span> em <span class='status'>25%</span> e a <span class='statusHab'>Eficiência de DpT</span> em <span class='status'>100%</span> por <span class='status'>10s</span>. (Recarga: <span class='status'>25s</span>)`,
      },
    },

    {
      id: `${baseId}-2`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777411590/imgi_40_icon_Bug_003_hmeuhn.webp',
      costumeName: 'Hora da Escuridão',
      descriptions: {
        1: `${chance60} Aumenta o <span class='statusHab'>Dano de Escuridão</span> em <span class='status'>3.5%</span> por <span class='status'>10s</span>. (Máximo: <span class='status'>35%</span>)
        Quando o efeito estiver ativo, atacar um inimigo com uma <span class='statusHab'>Irrupção</span> ativa aumenta a duração da <span class='statusHab'>Irrupção</span> dele em <span class='status'>4s</span>. (Recarga: <span class='status'>12s</span>)`,

        2: `${chance30} Aumenta o <span class='statusHab'>Dano de Escuridão</span> em <span class='status'>4%</span> por <span class='status'>10s</span>. (Máximo: <span class='status'>40%</span>)
        Quando o efeito estiver ativo, atacar um inimigo com uma <span class='statusHab'>Irrupção</span> ativa aumenta a duração da <span class='statusHab'>Irrupção</span> dele em <span class='status'>5s</span>. (Recarga: <span class='status'>12s</span>)`,

        3: `${chance10} Aumenta o <span class='statusHab'>Dano de Escuridão</span> em <span class='status'>4.5%</span> por <span class='status'>10s</span>. (Máximo: <span class='status'>45%</span>)
        Quando o efeito estiver ativo, atacar um inimigo com uma <span class='statusHab'>Irrupção</span> ativa aumenta a duração da <span class='statusHab'>Irrupção</span> dele em <span class='status'>6s</span>. (Recarga: <span class='status'>12s</span>)`,
      },
    },
    {
      id: `${baseId}-3`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777411590/imgi_31_icon_Bug_004_osecko.webp',
      costumeName: 'Emboscadas Sucessivas',
      descriptions: {
        1: `${chance60} <span class='statusHab'>Ataques pelas Costas</span> têm <span class='status'>30%</span> de chance de aumentar o <span class='statusHab'>Dano de Escuridão</span> em <span class='status'>30%</span> e reduzir a recarga da <span class='statusHab'>Perícia Normal</span> em <span class='status'>60%</span> por <span class='status'>8s</span>. (Recarga: <span class='status'>14s</span>)`,

        2: `${chance30} <span class='statusHab'>Ataques pelas Costas</span> têm <span class='status'>34%</span> de chance de aumentar o <span class='statusHab'>Dano de Escuridão</span> em <span class='status'>40%</span> e reduzir a recarga da <span class='statusHab'>Perícia Normal</span> em <span class='status'>80%</span> por <span class='status'>8s</span>. (Recarga: <span class='status'>14s</span>)`,

        3: `${chance10} <span class='statusHab'>Ataques pelas Costas</span> têm <span class='status'>38%</span> de chance de aumentar o <span class='statusHab'>Dano de Escuridão</span> em <span class='status'>50%</span> e reduzir a recarga da <span class='statusHab'>Perícia Normal</span> em <span class='status'>100%</span> por <span class='status'>8s</span>. (Recarga: <span class='status'>14s</span>)`,

      },
    },
  ],
};