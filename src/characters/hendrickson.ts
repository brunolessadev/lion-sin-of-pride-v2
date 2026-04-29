import type { Character } from '../data/costumes';

const baseName = 'Hendrickson';
const baseId = baseName.toLowerCase();

const chance60 = `Chance de surgir: <span class='status'>60%</span></br>`;
const chance30 = `Chance de surgir: <span class='status'>30%</span></br>`;
const chance10 = `Chance de surgir: <span class='status'>10%</span></br>`;

/* Não esqueça de mudar o nome da export const name para o nome do personagem */
export const hendrickson: Character = {
  id: baseId,
  name: baseName,
  costumes: [
    {
      id: `${baseId}-1`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777411593/imgi_33_icon_Hendrickson_003_xkz9hi.webp',
      costumeName: 'Arte de Cura Druídica',
      descriptions: {
        1: `${chance60} Usar a <span class='statusHab'>Habilidade Suprema</span> aumenta em <span class='status'>50%</span> a <span class='statusHab'>Cura Recebida</span> de todos os heróis aliados por <span class='status'>14s</span> se o <span class='statusHab'>HP restante</span> deles for <span class='status'>30%</span> ou menos.`,

        2: `${chance30} Usar a <span class='statusHab'>Habilidade Suprema</span> aumenta em <span class='status'>65%</span> a <span class='statusHab'>Cura Recebida</span> de todos os heróis aliados por <span class='status'>14s</span> se o <span class='statusHab'>HP restante</span> deles for <span class='status'>30%</span> ou menos.`,

        3: `${chance10} Usar a <span class='statusHab'>Habilidade Suprema</span> aumenta em <span class='status'>80%</span> a <span class='statusHab'>Cura Recebida</span> de todos os heróis aliados por <span class='status'>14s</span> se o <span class='statusHab'>HP restante</span> deles for <span class='status'>30%</span> ou menos.`,
      },
    },

    {
      id: `${baseId}-2`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777411593/imgi_42_icon_Hendrickson_004_bv4lw1.webp',
      costumeName: 'Afinação em Cadeia',
      descriptions: {
        1: `${chance60} Usar a <span class='statusHab'>Habilidade Suprema</span> reduz o tempo de recarga do <span class='statusHab'>Ataque Especial</span> em <span class='status'>60%</span> e aumenta o <span class='statusHab'>Dano Físico</span> em <span class='status'>40%</span> por <span class='status'>10s</span>. (Recarga: <span class='status'>25s</span>)`,

        2: `${chance30} Usar a <span class='statusHab'>Habilidade Suprema</span> reduz o tempo de recarga do <span class='statusHab'>Ataque Especial</span> em <span class='status'>80%</span> e aumenta o <span class='statusHab'>Dano Físico</span> em <span class='status'>50%</span> por <span class='status'>10s</span>. (Recarga: <span class='status'>25s</span>)`,

        3: `${chance10} Usar a <span class='statusHab'>Habilidade Suprema</span> reduz o tempo de recarga do <span class='statusHab'>Ataque Especial</span> em <span class='status'>100%</span> e aumenta o <span class='statusHab'>Dano Físico</span> em <span class='status'>60%</span> por <span class='status'>10s</span>. (Recarga: <span class='status'>25s</span>)`,
      },
    },
    {
      id: `${baseId}-3`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777411593/imgi_48_icon_Hendrickson_002_phfgfb.webp',
      costumeName: 'Perícia em Espadachim',
      descriptions: {
        1: `${chance60} Usar a <span class='statusHab'>Habilidade de Troca</span> aumenta a <span class='statusHab'>Taxa Crítica</span> em <span class='status'>8%</span> e a <span class='statusHab'>Duração de Buffs</span> em <span class='status'>20%</span> por <span class='status'>10s</span>.`,

        2: `${chance30} Usar a <span class='statusHab'>Habilidade de Troca</span> aumenta a <span class='statusHab'>Taxa Crítica</span> em <span class='status'>10%</span> e a <span class='statusHab'>Duração de Buffs</span> em <span class='status'>25%</span> por <span class='status'>10s</span>.`,

        3: `${chance10} Usar a <span class='statusHab'>Habilidade de Troca</span> aumenta a <span class='statusHab'>Taxa Crítica</span> em <span class='status'>12%</span> e a <span class='statusHab'>Duração de Buffs</span> em <span class='status'>30%</span> por <span class='status'>10s</span>.`,
      },
    },
  ],
};