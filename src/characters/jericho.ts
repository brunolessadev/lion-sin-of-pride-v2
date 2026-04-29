import type { Character } from '../data/costumes';

export const jericho: Character = {
  id: 'jericho',
  name: 'Jericho',
  costumes: [
    {
      id: 'jericho-1',
      name: 'Jericho',
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777398645/1-jericho-skin3_g6h5dd.webp',
      costumeName: 'Enlace do Frio',
      descriptions: {
        1: `Chance de surgir: <span class='status'>60%</span></br>
        <span class='status'>10%</span> de chance de aumentar o <span class='statusHab'>Dano de Frio</span> em <span class='status'>25%</span> por <span class='status'>10s</span> ao efetivar um ataque. 
        (Recarga: <span class='status'>25s</span>)`,

        2: `Chance de surgir: <span class='status'>30%</span></br>
        <span class='status'>10%</span> de chance de aumentar o <span class='statusHab'>Dano de Frio</span> em <span class='status'>30%</span> por <span class='status'>10s</span> ao efetivar um ataque. 
        (Recarga: <span class='status'>25s</span>)`,

        3: `Chance de surgir: <span class='status'>10%</span></br>
        <span class='status'>10%</span> de chance de aumentar o <span class='statusHab'>Dano de Frio</span> em <span class='status'>35%</span> por <span class='status'>10s</span> ao efetivar um ataque. 
        (Recarga: <span class='status'>25s</span>)`,
      },
    },

    {
      id: 'jericho-2',
      name: 'Jericho',
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777398644/1-jericho-skin1_mxuoge.webp',
      costumeName: 'Escultora de Gelo',
      descriptions: {
        1: `Chance de surgir: <span class='status'>60%</span></br>
        Cada <span class='statusHab'>Ataque pelas Costas</span> aumenta o <span class='statusHab'>Medidor de Irrupção</span> em <span class='status'>20</span> e reduz a <span class='statusHab'>Resistência a Irrupção de Frio</span> em <span class='status'>2%</span> por <span class='status'>10s</span>. 
        (Máximo: <span class='status'>20%</span>)`,

        2: `Chance de surgir: <span class='status'>30%</span></br>
        Cada <span class='statusHab'>Ataque pelas Costas</span> aumenta o <span class='statusHab'>Medidor de Irrupção</span> em <span class='status'>25</span> e reduz a <span class='statusHab'>Resistência a Irrupção de Frio</span> em <span class='status'>2.5%</span> por <span class='status'>10s</span>. 
        (Máximo: <span class='status'>20%</span>)`,

        3: `Chance de surgir: <span class='status'>10%</span></br>
        Cada <span class='statusHab'>Ataque pelas Costas</span> aumenta o <span class='statusHab'>Medidor de Irrupção</span> em <span class='status'>30</span> e reduz a <span class='statusHab'>Resistência a Irrupção de Frio</span> em <span class='status'>3%</span> por <span class='status'>10s</span>. 
        (Máximo: <span class='status'>20%</span>)`,
      },
    },
    {
      id: 'jericho-3',
      name: 'Jericho',
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777398644/1-jericho-skin2_dg1e9g.webp',
      costumeName: 'Armadura de Frio',
      descriptions: {
        1: `Chance de surgir: <span class='status'>60%</span></br>
        Cada impulso de <span class='statusHab'>Defesa</span> obtido aumenta a <span class='statusHab'>Eficiência de Barreira</span> em <span class='status'>6%</span> por <span class='status'>20s</span>. 
        (Máximo: <span class='status'>60%</span>)`,

        2: `Chance de surgir: <span class='status'>30%</span></br>
        Cada impulso de <span class='statusHab'>Defesa</span> obtido aumenta a <span class='statusHab'>Eficiência de Barreira</span> em <span class='status'>7%</span> por <span class='status'>20s</span>. 
        (Máximo: <span class='status'>70%</span>)`,


        3: `Chance de surgir: <span class='status'>10%</span></br>
        Cada impulso de <span class='statusHab'>Defesa</span> obtido aumenta a <span class='statusHab'>Eficiência de Barreira</span> em <span class='status'>8%</span> por <span class='status'>20s</span>. 
        (Máximo: <span class='status'>80%</span>)`,

      },
    },
  ],
};