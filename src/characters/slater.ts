import type { Character } from '../data/costumes';

const baseName = 'Slater';
const baseId = baseName.toLowerCase();

const chance60 = `Chance de surgir: <span class='status'>60%</span></br>`;
const chance30 = `Chance de surgir: <span class='status'>30%</span></br>`;
const chance10 = `Chance de surgir: <span class='status'>10%</span></br>`;


export const slater: Character = {
  id: baseId,
  name: baseName,
  costumes: [
    {
      id: `${baseId}-1`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777398657/imgi_52_icon_Slader_002_nbezbj.webp',
      costumeName: 'statusName',
      descriptions: {
        1: `${chance60} Aumenta durações de <span class='statusHab'>Desvantagens</span> em <span class='status'>25%</span>.`,

        2: `${chance30} Aumenta durações de <span class='statusHab'>Desvantagens</span> em <span class='status'>30%</span>.`,

        3: `${chance10} Aumenta durações de <span class='statusHab'>Desvantagens</span> em <span class='status'>35%</span>.`,
      },
    },

    {
      id: `${baseId}-2`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777398655/imgi_40_icon_Slader_003_dsyh6j.webp',
      costumeName: 'Esmagamento de Crânio',
      descriptions: {
        1: `${chance60} Aumenta o dano causado a inimigos <span class='statusHab'>Atordoados</span> em <span class='status'>25%</span>. 
        Efetivar o <span class='statusHab'>Ataque Especial</span> em um inimigo <span class='statusHab'>Atordoado</span> aumenta a duração do <span class='statusHab'>Atordoamento</span> em <span class='status'>3s</span>. 
        (Recarga: <span class='status'>20s</span>)`,

        2: `${chance30} Aumenta o dano causado a inimigos <span class='statusHab'>Atordoados</span> em <span class='status'>30%</span>. 
        Efetivar o <span class='statusHab'>Ataque Especial</span> em um inimigo <span class='statusHab'>Atordoado</span> aumenta a duração do <span class='statusHab'>Atordoamento</span> em <span class='status'>4s</span>. 
        (Recarga: <span class='status'>20s</span>)`,

        3: `${chance10} Aumenta o dano causado a inimigos <span class='statusHab'>Atordoados</span> em <span class='status'>35%</span>. 
        Efetivar o <span class='statusHab'>Ataque Especial</span> em um inimigo <span class='statusHab'>Atordoado</span> aumenta a duração do <span class='statusHab'>Atordoamento</span> em <span class='status'>5s</span>. 
        (Recarga: <span class='status'>20s</span>)`,
      },
    },
    {
      id: `${baseId}-3`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777398654/imgi_32_icon_Slader_004_tsjdll.webp',
      costumeName: 'Festival do Tomate',
      descriptions: {
        1: `${chance60} Se um ataque em um inimigo sofrendo <span class='statusHab'>DpT</span> resultar em um <span class='statusHab'>Acerto Crítico</span>, o <span class='statusHab'>Intervalo de DpT</span> é reduzido em <span class='status'>16%</span> por <span class='status'>10s</span>. 
        (Recarga: <span class='status'>15s</span>; não acumula)`,

        2: `${chance30} Se um ataque em um inimigo sofrendo <span class='statusHab'>DpT</span> resultar em um <span class='statusHab'>Acerto Crítico</span>, o <span class='statusHab'>Intervalo de DpT</span> é reduzido em <span class='status'>23%</span> por <span class='status'>10s</span>. 
        (Recarga: <span class='status'>15s</span>; não acumula)`,

        3: `${chance10} Se um ataque em um inimigo sofrendo <span class='statusHab'>DpT</span> resultar em um <span class='statusHab'>Acerto Crítico</span>, o <span class='statusHab'>Intervalo de DpT</span> é reduzido em <span class='status'>30%</span> por <span class='status'>10s</span>. 
        (Recarga: <span class='status'>15s</span>; não acumula)`,
      },
    },
    {
      id: `${baseId}-4`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777398655/imgi_46_icon_Slader_005_vmezda.webp',
      costumeName: 'Dom da Oportunidade',
      descriptions: {
        1: `${chance60} Efetivar o <span class='statusHab'>Ataque Especial</span> reduz a recarga da <span class='statusHab'>Perícia Normal</span> em <span class='status'>40%</span> e aumenta a <span class='statusHab'>Eficiência de Irrupção de Todos os Elementos</span> em <span class='status'>24%</span> por <span class='status'>10s</span>. (Recarga: <span class='status'>20s</span>)`,

        2: `${chance30} Efetivar o <span class='statusHab'>Ataque Especial</span> reduz a recarga da <span class='statusHab'>Perícia Normal</span> em <span class='status'>70%</span> e aumenta a <span class='statusHab'>Eficiência de Irrupção de Todos os Elementos</span> em <span class='status'>32%</span> por <span class='status'>10s</span>. (Recarga: <span class='status'>20s</span>)`,


        3: `${chance10} Efetivar o <span class='statusHab'>Ataque Especial</span> reduz a recarga da <span class='statusHab'>Perícia Normal</span> em <span class='status'>100%</span> e aumenta a <span class='statusHab'>Eficiência de Irrupção de Todos os Elementos</span> em <span class='status'>40%</span> por <span class='status'>10s</span>. (Recarga: <span class='status'>20s</span>)`,

      },
    },
  ],
};