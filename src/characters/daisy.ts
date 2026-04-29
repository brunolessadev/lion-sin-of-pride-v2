import type { Character } from '../data/costumes';

export const daisy: Character = {
  id: 'daisy',
  name: 'Daisy',
  costumes: [
    {
      id: 'daisy-1',
      name: 'Daisy',
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777168878/1-daisyskin1_lx9xeh.webp',
      costumeName: 'Sobretensão Interior',
      descriptions: {
        1: `Chance de surgir: <span class='status'>60%</span></br>
        Ganha <span class='status'>3</span> acúmulo(s) de <span class='statusHab'>Carga de Energia</span> ao ativar <span class='statusHab'>[Daisy e Domby]</span>. (Recarga: <span class='status'>20s</span>)
        Ganha <span class='status'>1</span> acúmulo(s) de <span class='statusHab'>Carga de Energia</span> a cada <span class='status'>4s</span> enquanto <span class='statusHab'>[Daisy e Domby]</span> estiver ativo.`,

        2: `Chance de surgir: <span class='status'>30%</span></br>
        Ganha <span class='status'>4</span> acúmulo(s) de <span class='statusHab'>Carga de Energia</span> ao ativar <span class='statusHab'>[Daisy e Domby]</span>. (Recarga: <span class='status'>20s</span>)
        Ganha <span class='status'>1</span> acúmulo(s) de <span class='statusHab'>Carga de Energia</span> a cada <span class='status'>3s</span> enquanto <span class='statusHab'>[Daisy e Domby]</span> estiver ativo.`,

        3: `Chance de surgir: <span class='status'>10%</span></br>
        Ganha <span class='status'>5</span> acúmulo(s) de <span class='statusHab'>Carga de Energia</span> ao ativar <span class='statusHab'>[Daisy e Domby]</span>. (Recarga: <span class='status'>20s</span>)
        Ganha <span class='status'>1</span> acúmulo(s) de <span class='statusHab'>Carga de Energia</span> a cada <span class='status'>2s</span> enquanto <span class='statusHab'>[Daisy e Domby]</span> estiver ativo.`,
      },
    },

    {
      id: 'daisy-2',
      name: 'Daisy',
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777168878/1-daisyskin2_bpkfhs.webp',
      costumeName: 'Choque Letal',
      descriptions: {
        1: `Chance de surgir: <span class='status'>60%</span></br>        
        Cada vez que um herói aliado recebe um impulso de <span class='statusHab'>Chance de Crítico</span>, <span class='statusHab'>Dano de Relâmpago</span> de todos os heróis aliados aumenta em <span class='status'>2%</span> por <span class='status'>20s</span>. 
        (Máximo: <span class='status'>10%</span>, recarga no máximo: <span class='status'>30s</span>)
        Quando este efeito atinge seu máximo, o <span class='statusHab'>Dano Crítico</span> de todos os heróis aliados aumenta em <span class='status'>20%</span> por <span class='status'>10s</span>.`,

        2: `Chance de surgir: <span class='status'>30%</span></br>        
        Cada vez que um herói aliado recebe um impulso de <span class='statusHab'>Chance de Crítico</span>, <span class='statusHab'>Dano de Relâmpago</span> de todos os heróis aliados aumenta em <span class='status'>3%</span> por <span class='status'>20s</span>. 
        (Máximo: <span class='status'>15%</span>, recarga no máximo: <span class='status'>30s</span>)
        Quando este efeito atinge seu máximo, o <span class='statusHab'>Dano Crítico</span> de todos os heróis aliados aumenta em <span class='status'>25%</span> por <span class='status'>10s</span>.`,

        3: `Chance de surgir: <span class='status'>10%</span></br>        
        Cada vez que um herói aliado recebe um impulso de <span class='statusHab'>Chance de Crítico</span>, <span class='statusHab'>Dano de Relâmpago</span> de todos os heróis aliados aumenta em <span class='status'>4%</span> por <span class='status'>20s</span>. 
        (Máximo: <span class='status'>20%</span>, recarga no máximo: <span class='status'>30s</span>)
        Quando este efeito atinge seu máximo, o <span class='statusHab'>Dano Crítico</span> de todos os heróis aliados aumenta em <span class='status'>30%</span> por <span class='status'>10s</span>.`,
      },
    },
    {
      id: 'daisy-3',
      name: 'Daisy',
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777168878/1-daisyskin3_jx3cei.webp',
      costumeName: 'Semente Germinante',
      descriptions: {
        1: `Chance de surgir: <span class='status'>60%</span></br> 
        Aumenta a <span class='statusHab'>Chance de Crítico</span> de todos os heróis aliados em <span class='status'>6%</span>.
        Um Acerto Crítico de um herói aliado em um inimigo com <span class='statusHab'>Resistência a Crítico</span> reduzida diminui a <span class='statusHab'>Defesa de Crítico</span> do alvo em <span class='status'>8%</span> por <span class='status'>40s</span>. (Máximo: <span class='status'>32%</span>)`,

        2: `Chance de surgir: <span class='status'>30%</span></br> 
        Aumenta a <span class='statusHab'>Chance de Crítico</span> de todos os heróis aliados em <span class='status'>8%</span>.
        Um Acerto Crítico de um herói aliado em um inimigo com <span class='statusHab'>Resistência a Crítico</span> reduzida diminui a <span class='statusHab'>Defesa de Crítico</span> do alvo em <span class='status'>10%</span> por <span class='status'>40s</span>. (Máximo: <span class='status'>40%</span>)`,

        3: `Chance de surgir: <span class='status'>10%</span></br> 
        Aumenta a <span class='statusHab'>Chance de Crítico</span> de todos os heróis aliados em <span class='status'>10%</span>.
        Um Acerto Crítico de um herói aliado em um inimigo com <span class='statusHab'>Resistência a Crítico</span> reduzida diminui a <span class='statusHab'>Defesa de Crítico</span> do alvo em <span class='status'>12%</span> por <span class='status'>40s</span>. (Máximo: <span class='status'>48%</span>)`,
      },
    },
  ],
};