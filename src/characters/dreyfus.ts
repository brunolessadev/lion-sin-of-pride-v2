import type { Character } from '../data/costumes';

const baseName = 'Dreyfus';
const baseId = baseName.toLowerCase();

const chance60 = `Chance de surgir: <span class='status'>60%</span></br>`;
const chance30 = `Chance de surgir: <span class='status'>30%</span></br>`;
const chance10 = `Chance de surgir: <span class='status'>10%</span></br>`;


export const dreyfus: Character = {
  id: baseId,
  name: baseName,
  costumes: [
    {
      id: `${baseId}-1`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777398648/1-dreyfus-skin1_l54kv0.webp',
      costumeName: 'Trilha Alternativa',
      descriptions: {
        1: `${chance60} Atacar um inimigo sofrendo <span class='statusHab'>DpT</span> ou que esteja <span class='statusHab'>Incapacitado</span> recupera o <span class='statusHab'>Medidor de Alternância</span> em <span class='status'>600</span>. (Recarga: <span class='status'>20s</span>)`,

        2: `${chance30} Atacar um inimigo sofrendo <span class='statusHab'>DpT</span> ou que esteja <span class='statusHab'>Incapacitado</span> recupera o <span class='statusHab'>Medidor de Alternância</span> em <span class='status'>800</span>. (Recarga: <span class='status'>20s</span>)`,

        3: `${chance10} Atacar um inimigo sofrendo <span class='statusHab'>DpT</span> ou que esteja <span class='statusHab'>Incapacitado</span> recupera o <span class='statusHab'>Medidor de Alternância</span> em <span class='status'>1000</span>. (Recarga: <span class='status'>20s</span>)`,
      },
    },

    {
      id: `${baseId}-2`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777398649/1-dreyfus-skin2_sjbst7.webp',
      costumeName: 'Extração',
      descriptions: {
        1: `${chance60} Efetivar o <span class='statusHab'>Ataque Especial</span> em um inimigo sofrendo <span class='statusHab'>DpT</span> aumenta a duração do <span class='statusHab'>DpT</span> em <span class='status'>6s</span> e reduz a recarga do <span class='statusHab'>Ataque Especial</span> em <span class='status'>50%</span>. (Recarga: <span class='status'>15s</span>)`,

        2: `${chance30} Efetivar o <span class='statusHab'>Ataque Especial</span> em um inimigo sofrendo <span class='statusHab'>DpT</span> aumenta a duração do <span class='statusHab'>DpT</span> em <span class='status'>8s</span> e reduz a recarga do <span class='statusHab'>Ataque Especial</span> em <span class='status'>75%</span>. (Recarga: <span class='status'>15s</span>)`,

        3: `${chance10} Efetivar o <span class='statusHab'>Ataque Especial</span> em um inimigo sofrendo <span class='statusHab'>DpT</span> aumenta a duração do <span class='statusHab'>DpT</span> em <span class='status'>10s</span> e reduz a recarga do <span class='statusHab'>Ataque Especial</span> em <span class='status'>100%</span>. (Recarga: <span class='status'>15s</span>)`,
      },
    },
    {
      id: `${baseId}-3`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777398650/1-dreyfus-skin3_bvdr6m.webp',
      costumeName: 'Guarda Inabalável',
      descriptions: {
        1: `${chance60} Atacar um inimigo <span class='statusHab'>Petrificado</span> aumenta a duração de <span class='statusHab'>Petrificação</span> em <span class='status'>6s</span> e recupera o <span class='statusHab'>Medidor de Alternância</span> em <span class='status'>700</span>. 
        (Recarga: <span class='status'>20s</span>) 
        Aumenta o dano de <span class='statusHab'>Terra</span> do <span class='statusHab'>Movimento Definitivo</span> em <span class='status'>12%</span>.`,

        2: `${chance30} Atacar um inimigo <span class='statusHab'>Petrificado</span> aumenta a duração de <span class='statusHab'>Petrificação</span> em <span class='status'>8s</span> e recupera o <span class='statusHab'>Medidor de Alternância</span> em <span class='status'>850</span>. 
        (Recarga: <span class='status'>20s</span>) 
        Aumenta o dano de <span class='statusHab'>Terra</span> do <span class='statusHab'>Movimento Definitivo</span> em <span class='status'>16%</span>.`,

        3: `${chance10} Atacar um inimigo <span class='statusHab'>Petrificado</span> aumenta a duração de <span class='statusHab'>Petrificação</span> em <span class='status'>10s</span> e recupera o <span class='statusHab'>Medidor de Alternância</span> em <span class='status'>1000</span>. 
        (Recarga: <span class='status'>20s</span>) 
        Aumenta o dano de <span class='statusHab'>Terra</span> do <span class='statusHab'>Movimento Definitivo</span> em <span class='status'>20%</span>.`,
      },
    },
  ],
};