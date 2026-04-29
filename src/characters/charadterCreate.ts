import type { Character } from '../data/costumes';

const baseName = 'Name';
const baseId = baseName.toLowerCase();

const chance60 = `Chance de surgir: <span class='status'>60%</span></br>`;
const chance30 = `Chance de surgir: <span class='status'>30%</span></br>`;
const chance10 = `Chance de surgir: <span class='status'>10%</span></br>`;

    /* 
    Não esqueça de mudar o nome da export const name para o nome do personagem 
    Não esqueca de tambem adicionar em: data/costumes.ts
    */
export const name: Character = {
  id: baseId,
  name: baseName,
  costumes: [
    {
      id: `${baseId}-1`,
      name: baseName,
      image:
        'imageLink',
      costumeName: 'statusName',
      descriptions: {
        1: `${chance60} description`,

        2: `${chance30} description`,

        3: `${chance10} description`,
      },
    },

    {
      id: `${baseId}-2`,
      name: baseName,
      image:
        'imageLink',
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
        'imageLink',
      costumeName: 'statusName',
      descriptions: {
        1: `${chance60} description`,

        2: `${chance30} description`,

        3: `${chance10} description`,
      },
    },
  ],
};