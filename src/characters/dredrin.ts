import type { Character } from '../data/costumes';

const baseName = 'Dredrin';
const baseId = baseName.toLowerCase();

const chance60 = `Chance de surgir: <span class='status'>60%</span></br>`;
const chance30 = `Chance de surgir: <span class='status'>30%</span></br>`;
const chance10 = `Chance de surgir: <span class='status'>10%</span></br>`;

export const dredrin: Character = {
  
  id: baseId,
  name: baseName,
  costumes: [
    {
      id: `${baseId}-1`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777411590/imgi_54_icon_Dreydrin_002_ueofaw.webp',
      costumeName: 'Faz-tudo',
      descriptions: {
        1: `${chance60} Aumenta a <span class='statusHab'>Eficiência de Barreira</span> em <span class='status'>20%</span> e a <span class='statusHab'>Eficiência de Carregamento de Magia</span> em <span class='status'>10%</span>.`,

        2: `${chance30} Aumenta a <span class='statusHab'>Eficiência de Barreira</span> em <span class='status'>25%</span> e a <span class='statusHab'>Eficiência de Carregamento de Magia</span> em <span class='status'>12.5%</span>.`,

        3: `${chance10} Aumenta a <span class='statusHab'>Eficiência de Barreira</span> em <span class='status'>30%</span> e a <span class='statusHab'>Eficiência de Carregamento de Magia</span> em <span class='status'>15%</span>.`,
      },
    },

    {
      id: `${baseId}-2`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777411590/imgi_33_icon_Dreydrin_003_lfqwri.webp',
      costumeName: 'Defesa Definitiva',
      descriptions: {
        1: `${chance60} Usar a <span class='statusHab'>Perícia de Alternância</span> aumenta a <span class='statusHab'>Defesa</span> em <span class='status'>20%</span> e a <span class='statusHab'>Eficiência de Barreira</span> em <span class='status'>40%</span> por <span class='status'>20s</span>.`,

        2: `${chance30} Usar a <span class='statusHab'>Perícia de Alternância</span> aumenta a <span class='statusHab'>Defesa</span> em <span class='status'>25%</span> e a <span class='statusHab'>Eficiência de Barreira</span> em <span class='status'>50%</span> por <span class='status'>20s</span>.`,

        3: `${chance10} Usar a <span class='statusHab'>Perícia de Alternância</span> aumenta a <span class='statusHab'>Defesa</span> em <span class='status'>30%</span> e a <span class='statusHab'>Eficiência de Barreira</span> em <span class='status'>60%</span> por <span class='status'>20s</span>.`,
      },
    },
    {
      id: `${baseId}-3`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777411590/imgi_48_icon_Dreydrin_004_khcgxn.webp',
      costumeName: 'Alavanca Cegante',
      descriptions: {
        1: `${chance60} Atacar um inimigo <span class='statusHab'>Incapacitado</span> reduz a recarga da <span class='statusHab'>Perícia Normal</span> em <span class='status'>70%</span> e recupera o <span class='statusHab'>Medidor de Alternância</span> em <span class='status'>1200</span>. (Recarga: <span class='status'>20s</span>)`,

        2: `${chance30} Atacar um inimigo <span class='statusHab'>Incapacitado</span> reduz a recarga da <span class='statusHab'>Perícia Normal</span> em <span class='status'>85%</span> e recupera o <span class='statusHab'>Medidor de Alternância</span> em <span class='status'>1600</span>. (Recarga: <span class='status'>20s</span>)`,

        3: `${chance10} Atacar um inimigo <span class='statusHab'>Incapacitado</span> reduz a recarga da <span class='statusHab'>Perícia Normal</span> em <span class='status'>100%</span> e recupera o <span class='statusHab'>Medidor de Alternância</span> em <span class='status'>2000</span>. (Recarga: <span class='status'>20s</span>)`,
      },
    },
    {
      id: `${baseId}-4`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777411590/imgi_42_icon_Dreydrin_005_cqrelw.webp',
      costumeName: 'Aliado Confiável',
      descriptions: {
        1: `${chance60} Usar a <span class='statusHab'>Perícia de Alternância</span> quando <span class='statusHab'>Pontos de Magia</span> estão em <span class='status'>3</span> ou menos aumenta seu dano em <span class='status'>20%</span> e também a <span class='statusHab'>Eficiência de Carregamento de Magia</span> em <span class='status'>16%</span> por <span class='status'>20s</span>.`,

        2: `${chance30} Usar a <span class='statusHab'>Perícia de Alternância</span> quando <span class='statusHab'>Pontos de Magia</span> estão em <span class='status'>3</span> ou menos aumenta seu dano em <span class='status'>30%</span> e também a <span class='statusHab'>Eficiência de Carregamento de Magia</span> em <span class='status'>20%</span> por <span class='status'>20s</span>.`,

        3: `${chance10} Usar a <span class='statusHab'>Perícia de Alternância</span> quando <span class='statusHab'>Pontos de Magia</span> estão em <span class='status'>3</span> ou menos aumenta seu dano em <span class='status'>40%</span> e também a <span class='statusHab'>Eficiência de Carregamento de Magia</span> em <span class='status'>24%</span> por <span class='status'>20s</span>.`,
      },
    },
  ],
};