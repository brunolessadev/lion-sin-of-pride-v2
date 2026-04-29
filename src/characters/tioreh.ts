import type { Character } from '../data/costumes';

const baseName = 'Tioreh';
const baseId = baseName.toLowerCase();

const chance60 = `Chance de surgir: <span class='status'>60%</span></br>`;
const chance30 = `Chance de surgir: <span class='status'>30%</span></br>`;
const chance10 = `Chance de surgir: <span class='status'>10%</span></br>`;


export const tioreh: Character = {
  id: baseId,
  name: baseName,
  costumes: [
    {
      id: `${baseId}-1`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777411591/imgi_53_icon_Tioreh_002_m0yuvh.webp',
      costumeName: 'Fada Eflorescente',
      descriptions: {
        1: `${chance60} Aumenta durações de <span class='statusHab'>Vantagens</span> em <span class='status'>15%</span> e as durações de <span class='statusHab'>Desvantagens</span> em <span class='status'>15%</span>.`,

        2: `${chance30} Aumenta durações de <span class='statusHab'>Vantagens</span> em <span class='status'>20%</span> e as durações de <span class='statusHab'>Desvantagens</span> em <span class='status'>20%</span>.`,

        3: `${chance10} Aumenta durações de <span class='statusHab'>Vantagens</span> em <span class='status'>25%</span> e as durações de <span class='statusHab'>Desvantagens</span> em <span class='status'>25%</span>.`,
      },
    },

    {
      id: `${baseId}-2`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777411591/imgi_41_icon_Tioreh_003_m7vuuj.webp',
      costumeName: 'Preaquecimento',
      descriptions: {
        1: `${chance60} Cada acerto em um inimigo com <span class='statusHab'>Combustão</span> reduz a <span class='statusHab'>Resistência a Crítico</span> dele em <span class='status'>1%</span> por <span class='status'>15s</span>. (Máximo: <span class='status'>30%</span>)
        Quando o efeito atingir o máximo, o dano de <span class='statusHab'>Perícia Normal</span> sofrido pelo inimigo aumenta em <span class='status'>10%</span> por <span class='status'>15s</span>. (Recarga: <span class='status'>20s</span>)`,

        2: `${chance30} Cada acerto em um inimigo com <span class='statusHab'>Combustão</span> reduz a <span class='statusHab'>Resistência a Crítico</span> dele em <span class='status'>1.2%</span> por <span class='status'>15s</span>. (Máximo: <span class='status'>36%</span>)
        Quando o efeito atingir o máximo, o dano de <span class='statusHab'>Perícia Normal</span> sofrido pelo inimigo aumenta em <span class='status'>20%</span> por <span class='status'>15s</span>. (Recarga: <span class='status'>20s</span>)`,

        3: `${chance10} Cada acerto em um inimigo com <span class='statusHab'>Combustão</span> reduz a <span class='statusHab'>Resistência a Crítico</span> dele em <span class='status'>1.4%</span> por <span class='status'>15s</span>. (Máximo: <span class='status'>42%</span>)
        Quando o efeito atingir o máximo, o dano de <span class='statusHab'>Perícia Normal</span> sofrido pelo inimigo aumenta em <span class='status'>30%</span> por <span class='status'>15s</span>. (Recarga: <span class='status'>20s</span>)`,
      },
    },
    {
      id: `${baseId}-3`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777411591/imgi_32_icon_Tioreh_004_bggilt.webp',
      costumeName: 'Calor do Apoio',
      descriptions: {
        1: `${chance60} Aumenta a <span class='statusHab'>Eficiência de Cura</span> em <span class='status'>40%</span>. 
        Usar o <span class='statusHab'>Ataque Especial</span> recupera o <span class='statusHab'>Medidor de Alternância</span> em <span class='status'>600</span>. (Recarga: <span class='status'>15s</span>)`,

        2: `${chance30} Aumenta a <span class='statusHab'>Eficiência de Cura</span> em <span class='status'>45%</span>. 
        Usar o <span class='statusHab'>Ataque Especial</span> recupera o <span class='statusHab'>Medidor de Alternância</span> em <span class='status'>800</span>. (Recarga: <span class='status'>15s</span>)`,

        3: `${chance10} Aumenta a <span class='statusHab'>Eficiência de Cura</span> em <span class='status'>50%</span>. 
        Usar o <span class='statusHab'>Ataque Especial</span> recupera o <span class='statusHab'>Medidor de Alternância</span> em <span class='status'>1000</span>. (Recarga: <span class='status'>15s</span>)`,
      },
    },
    {
      id: `${baseId}-4`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777411591/imgi_47_icon_Tioreh_005_jnnm53.webp',
      costumeName: 'Golpe e Guarda',
      descriptions: {
        1: `${chance60} Ganhar impulso de <span class='statusHab'>Dano de Terra</span> aumenta a <span class='statusHab'>Defesa</span> de todos os heróis aliados em <span class='status'>3%</span> por <span class='status'>40s</span>. (Máximo: <span class='status'>15%</span>)`,

        2: `${chance30} Ganhar impulso de <span class='statusHab'>Dano de Terra</span> aumenta a <span class='statusHab'>Defesa</span> de todos os heróis aliados em <span class='status'>4%</span> por <span class='status'>40s</span>. (Máximo: <span class='status'>20%</span>)`,

        3: `${chance10} Ganhar impulso de <span class='statusHab'>Dano de Terra</span> aumenta a <span class='statusHab'>Defesa</span> de todos os heróis aliados em <span class='status'>5%</span> por <span class='status'>40s</span>. (Máximo: <span class='status'>25%</span>)`,
      },
    },
  ],
};