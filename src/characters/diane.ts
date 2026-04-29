import type { Character } from '../data/costumes';

export const diane: Character = {
  id: 'diane',
  name: 'Diane',
  costumes: [
    {
      id: 'diane-1',
      name: 'Diane',
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777398603/1-diane-skin1_x5nvgn.webp',
      costumeName: 'Mudança de Fortitude',
      descriptions: {
        1: `Chance de surgir: <span class='status'>60%</span></br>Atacar um inimigo <span class='statusHab'>Incapacitado</span> recupera o <span class='statusHab'>Medidor de Magia</span> em <span class='status'>300</span> e aumenta a <span class='statusHab'>Defesa</span> do herói em <span class='status'>20%</span> por <span class='status'>15s</span>. (Recarga: <span class='status'>20s</span>)`,

        2: `Chance de surgir: <span class='status'>30%</span></br>Atacar um inimigo <span class='statusHab'>Incapacitado</span> recupera o <span class='statusHab'>Medidor de Magia</span> em <span class='status'>400</span> e aumenta a <span class='statusHab'>Defesa</span> do herói em <span class='status'>25%</span> por <span class='status'>15s</span>. (Recarga: <span class='status'>20s</span>)`,

        3: `Chance de surgir: <span class='status'>10%</span></br>Atacar um inimigo <span class='statusHab'>Incapacitado</span> recupera o <span class='statusHab'>Medidor de Magia</span> em <span class='status'>500</span> e aumenta a <span class='statusHab'>Defesa</span> do herói em <span class='status'>30%</span> por <span class='status'>15s</span>. (Recarga: <span class='status'>20s</span>)`,
      },
    },

    {
      id: 'diane-2',
      name: 'Diane',
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777398604/1-diane-skin2_uamsjq.webp',
      costumeName: 'Corrente Sísmica',
      descriptions: {
        1: `Chance de surgir: <span class='status'>60%</span></br>
        Cada acerto do <span class='statusHab'>Ataque Especial</span> em um inimigo afetado por <span class='statusHab'>Quebradora</span> reduz a recarga da
        <span class='statusHab'>Perícia Normal</span> em <span class='status'>14%</span> e aumenta o <span class='statusHab'>Dano de Terra</span> em <span class='status'>6%</span> por <span class='status'>10s</span>. 
        (Máximo de cada: <span class='status'>56%</span>, <span class='status'>24%</span>)`,

        2: `Chance de surgir: <span class='status'>30%</span></br>
        Cada acerto do <span class='statusHab'>Ataque Especial</span> em um inimigo afetado por <span class='statusHab'>Quebradora</span> reduz a recarga da
        <span class='statusHab'>Perícia Normal</span> em <span class='status'>17%</span> e aumenta o <span class='statusHab'>Dano de Terra</span> em <span class='status'>7%</span> por <span class='status'>10s</span>. 
        (Máximo de cada: <span class='status'>68%</span>, <span class='status'>28%</span>)`,

        3: `Chance de surgir: <span class='status'>10%</span></br>
        Cada acerto do <span class='statusHab'>Ataque Especial</span> em um inimigo afetado por <span class='statusHab'>Quebradora</span> reduz a recarga da
        <span class='statusHab'>Perícia Normal</span> em <span class='status'>20%</span> e aumenta o <span class='statusHab'>Dano de Terra</span> em <span class='status'>8%</span> por <span class='status'>10s</span>. 
        (Máximo de cada: <span class='status'>80%</span>, <span class='status'>32%</span>)`,
      },
    },
    {
      id: 'diane-3',
      name: 'Diane',
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777398603/1-diane-skin3_dokx0v.webp',
      costumeName: 'Semente Germinante',
      descriptions: {
        1: `Chance de surgir: <span class='status'>60%</span></br>Usar o <span class='statusHab'>Movimento Definitivo</span> recupera o equivalente a <span class='status'>10%</span> dos <span class='statusHab'>PV Máximos</span> a cada vez que impulso de <span class='statusHab'>Resistência a Rompimento</span> for obtido dentro de <span class='status'>15s</span>.
        O dano de <span class='statusHab'>Perícia Normal</span> aumenta em <span class='status'>25%</span> por <span class='status'>5s</span> quando <span class='statusHab'>Irrupção</span> estiver ativa.`,

        2: `Chance de surgir: <span class='status'>30%</span></br>Usar o <span class='statusHab'>Movimento Definitivo</span> recupera o equivalente a <span class='status'>12.5%</span> dos <span class='statusHab'>PV Máximos</span> a cada vez que impulso de <span class='statusHab'>Resistência a Rompimento</span> for obtido dentro de <span class='status'>15s</span>.
        O dano de <span class='statusHab'>Perícia Normal</span> aumenta em <span class='status'>30%</span> por <span class='status'>5s</span> quando <span class='statusHab'>Irrupção</span> estiver ativa.`,

        3: `Chance de surgir: <span class='status'>10%</span></br>Usar o <span class='statusHab'>Movimento Definitivo</span> recupera o equivalente a <span class='status'>15%</span> dos <span class='statusHab'>PV Máximos</span> a cada vez que impulso de <span class='statusHab'>Resistência a Rompimento</span> for obtido dentro de <span class='status'>15s</span>.
        O dano de <span class='statusHab'>Perícia Normal</span> aumenta em <span class='status'>35%</span> por <span class='status'>5s</span> quando <span class='statusHab'>Irrupção</span> estiver ativa.`,
      },
    },
  ],
};