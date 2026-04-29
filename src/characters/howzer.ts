import type { Character } from '../data/costumes';

const baseName = 'Howzer';
const baseId = baseName.toLowerCase();

const chance60 = `Chance de surgir: <span class='status'>60%</span></br>`;
const chance30 = `Chance de surgir: <span class='status'>30%</span></br>`;
const chance10 = `Chance de surgir: <span class='status'>10%</span></br>`;

export const howzer: Character = {
  id: baseId,
  name: baseName,
  costumes: [
    {
      id: `${baseId}-1`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777411592/imgi_47_icon_Howzer_002_wwyatb.webp',
      costumeName: 'Vendaval Afiado',
      descriptions: {
        1: `${chance60} <span class='statusHab'>Acertos Críticos</span> aumentam o <span class='statusHab'>Dano de Ar</span> em <span class='status'>20%</span> por <span class='status'>10s</span>. (Recarga: <span class='status'>20s</span>)`,

        2: `${chance30} <span class='statusHab'>Acertos Críticos</span> aumentam o <span class='statusHab'>Dano de Ar</span> em <span class='status'>25%</span> por <span class='status'>10s</span>. (Recarga: <span class='status'>20s</span>)`,

        3: `${chance10} <span class='statusHab'>Acertos Críticos</span> aumentam o <span class='statusHab'>Dano de Ar</span> em <span class='status'>30%</span> por <span class='status'>10s</span>. (Recarga: <span class='status'>20s</span>)`,
      },
    },

    {
      id: `${baseId}-2`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777411591/imgi_31_icon_Howzer_003_sho2b0.webp',
      costumeName: 'Corrente de Procelâmina',
      descriptions: {
        1: `${chance60} Cada acerto em um inimigo com <span class='statusHab'>Sangramento</span> aumenta o <span class='statusHab'>Dano de Ar</span> em <span class='status'>2%</span> por <span class='status'>15s</span>. (Máximo: <span class='status'>30%</span>)
        Quando o efeito atinge o máximo, a recarga da <span class='statusHab'>Perícia Normal</span> é reduzida em <span class='status'>60%</span>. (Recarga: <span class='status'>25s</span>)`,

        2: `${chance30} Cada acerto em um inimigo com <span class='statusHab'>Sangramento</span> aumenta o <span class='statusHab'>Dano de Ar</span> em <span class='status'>2.5%</span> por <span class='status'>15s</span>. (Máximo: <span class='status'>37.5%</span>)
        Quando o efeito atinge o máximo, a recarga da <span class='statusHab'>Perícia Normal</span> é reduzida em <span class='status'>80%</span>. (Recarga: <span class='status'>25s</span>)`,

        3: `${chance10} Cada acerto em um inimigo com <span class='statusHab'>Sangramento</span> aumenta o <span class='statusHab'>Dano de Ar</span> em <span class='status'>3%</span> por <span class='status'>15s</span>. (Máximo: <span class='status'>45%</span>)
        Quando o efeito atinge o máximo, a recarga da <span class='statusHab'>Perícia Normal</span> é reduzida em <span class='status'>100%</span>. (Recarga: <span class='status'>25s</span>)`,
      },
    },
    {
      id: `${baseId}-3`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777411592/imgi_40_icon_Howzer_004_cl1pct.webp',
      costumeName: 'Vendaval Rubro Uivante',
      descriptions: {
        1: `${chance60} Efetivar o <span class='statusHab'>Ataque Especial</span> reduz a <span class='statusHab'>Defesa de Crítico</span> em <span class='status'>40%</span> por <span class='status'>15s</span>. 
        <span class='status'>40%</span> de chance de causar dano adicional equivalente a <span class='status'>60%</span> do <span class='statusHab'>Ataque</span> e <span class='statusHab'>Sangramento</span> por <span class='status'>10s</span>.`,

        2: `${chance30} Efetivar o <span class='statusHab'>Ataque Especial</span> reduz a <span class='statusHab'>Defesa de Crítico</span> em <span class='status'>50%</span> por <span class='status'>15s</span>. 
        <span class='status'>50%</span> de chance de causar dano adicional equivalente a <span class='status'>70%</span> do <span class='statusHab'>Ataque</span> e <span class='statusHab'>Sangramento</span> por <span class='status'>10s</span>.`,

        3: `${chance10} Efetivar o <span class='statusHab'>Ataque Especial</span> reduz a <span class='statusHab'>Defesa de Crítico</span> em <span class='status'>60%</span> por <span class='status'>15s</span>. 
        <span class='status'>60%</span> de chance de causar dano adicional equivalente a <span class='status'>80%</span> do <span class='statusHab'>Ataque</span> e <span class='statusHab'>Sangramento</span> por <span class='status'>10s</span>.`,
      },
    },
  ],
};