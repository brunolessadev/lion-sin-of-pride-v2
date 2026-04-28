import type { Character } from '../data/costumes';

export const drake: Character = {
  id: 'drake',
  name: 'Drake',
  costumes: [
    {
      id: 'drake-1',
      name: 'Drake',
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777342971/1-drake-skin1_srfp2b.webp',
      costumeName: 'Trovão Ribombante',
      descriptions: {
        1: `Chance de surgir: <span class='status'>60%</span></br>
        Usar o <span class='statusHab'>Movimento Definitivo</span> aumenta as durações de <span class='statusHab'>Desvantagens</span> em <span class='status'>20%</span> e a <span class='statusHab'>Irrupção de Relâmpago</span> em <span class='status'>12%</span> por <span class='status'>15s</span>.`,

        2: `Chance de surgir: <span class='status'>30%</span></br>
        Usar o <span class='statusHab'>Movimento Definitivo</span> aumenta as durações de <span class='statusHab'>Desvantagens</span> em <span class='status'>25%</span> e a <span class='statusHab'>Irrupção de Relâmpago</span> em <span class='status'>16%</span> por <span class='status'>15s</span>.`,

        3: `Chance de surgir: <span class='status'>10%</span></br>
        Usar o <span class='statusHab'>Movimento Definitivo</span> aumenta as durações de <span class='statusHab'>Desvantagens</span> em <span class='status'>30%</span> e a <span class='statusHab'>Irrupção de Relâmpago</span> em <span class='status'>20%</span> por <span class='status'>15s</span>.`,
      },
    },

    {
      id: 'drake-2',
      name: 'Drake',
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777342972/1-drake-skin2_pwolnz.webp',
      costumeName: 'Corrente de Relâmpago',
      descriptions: {
        1: `Chance de surgir: <span class='status'>60%</span></br>
        Reduz a recarga do <span class='statusHab'>Ataque Especial</span> em <span class='status'>12%</span>. 
        Usar o <span class='statusHab'>Ataque Especial</span> aumenta o <span class='statusHab'>Dano de Relâmpago</span> em <span class='status'>6%</span> por <span class='status'>20s</span> enquanto o herói tiver impulso de <span class='statusHab'>Redução de Recarga</span>. 
        (Máximo: <span class='status'>18%</span>)`,

        2: `Chance de surgir: <span class='status'>30%</span></br>
        Reduz a recarga do <span class='statusHab'>Ataque Especial</span> em <span class='status'>16%</span>. 
        Usar o <span class='statusHab'>Ataque Especial</span> aumenta o <span class='statusHab'>Dano de Relâmpago</span> em <span class='status'>8%</span> por <span class='status'>20s</span> enquanto o herói tiver impulso de <span class='statusHab'>Redução de Recarga</span>. 
        (Máximo: <span class='status'>24%</span>)`,

        3: `Chance de surgir: <span class='status'>10%</span></br>
        Reduz a recarga do <span class='statusHab'>Ataque Especial</span> em <span class='status'>20%</span>. 
        Usar o <span class='statusHab'>Ataque Especial</span> aumenta o <span class='statusHab'>Dano de Relâmpago</span> em <span class='status'>10%</span> por <span class='status'>20s</span> enquanto o herói tiver impulso de <span class='statusHab'>Redução de Recarga</span>. 
        (Máximo: <span class='status'>30%</span>)`,
      },
    },
    {
      id: 'drake-3',
      name: 'Drake',
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777342972/1-drake-skin3_zdjhoi.webp',
      costumeName: 'Sobrecarga de Voltagem',
      descriptions: {
        1: `Chance de surgir: <span class='status'>60%</span></br>
        Cada acerto em um inimigo com <span class='statusHab'>Defesa de Crítico</span> reduzida diminui a <span class='statusHab'>Resistência a Crítico</span> dele em <span class='status'>10%</span> por <span class='status'>15s</span>. (Máximo: <span class='status'>50%</span>)
        Recupera o <span class='statusHab'>Medidor de Alternância</span> em <span class='status'>700</span> quando o efeito atingir o máximo. (Recarga: <span class='status'>20s</span>)`,

        2: `Chance de surgir: <span class='status'>30%</span></br>
        Cada acerto em um inimigo com <span class='statusHab'>Defesa de Crítico</span> reduzida diminui a <span class='statusHab'>Resistência a Crítico</span> dele em <span class='status'>12%</span> por <span class='status'>15s</span>. (Máximo: <span class='status'>60%</span>)
        Recupera o <span class='statusHab'>Medidor de Alternância</span> em <span class='status'>850</span> quando o efeito atingir o máximo. (Recarga: <span class='status'>20s</span>)`,

        3: `Chance de surgir: <span class='status'>10%</span></br>
        Cada acerto em um inimigo com <span class='statusHab'>Defesa de Crítico</span> reduzida diminui a <span class='statusHab'>Resistência a Crítico</span> dele em <span class='status'>14%</span> por <span class='status'>15s</span>. (Máximo: <span class='status'>70%</span>)
        Recupera o <span class='statusHab'>Medidor de Alternância</span> em <span class='status'>1000</span> quando o efeito atingir o máximo. (Recarga: <span class='status'>20s</span>)`,
      },
    },
  ],
};