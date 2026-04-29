import type { Character } from '../data/costumes';

const baseName = 'Tristan';
const baseId = baseName.toLowerCase();

const chance60 = `Chance de surgir: <span class='status'>60%</span></br>`;
const chance30 = `Chance de surgir: <span class='status'>30%</span></br>`;
const chance10 = `Chance de surgir: <span class='status'>10%</span></br>`;


export const tristan: Character = {
  id: baseId,
  name: baseName,
  costumes: [
    {
      id: `${baseId}-1`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777398651/1-tristan-skin2_tqvu7n.webp',
      costumeName: 'Vendaval Flamejante',
      descriptions: {
        1: `${chance60} <span class='status'>30%</span> de chance de aumentar o dano de <span class='statusHab'>Movimento Definitivo</span> em <span class='status'>6%</span> por <span class='status'>10s</span> com cada acerto. (Máximo: <span class='status'>60%</span>)`,

        2: `${chance30} <span class='status'>30%</span> de chance de aumentar o dano de <span class='statusHab'>Movimento Definitivo</span> em <span class='status'>8%</span> por <span class='status'>10s</span> com cada acerto. (Máximo: <span class='status'>80%</span>)`,

        3: `${chance10} <span class='status'>30%</span> de chance de aumentar o dano de <span class='statusHab'>Movimento Definitivo</span> em <span class='status'>10%</span> por <span class='status'>10s</span> com cada acerto. (Máximo: <span class='status'>100%</span>)`,
      },
    },

    {
      id: `${baseId}-2`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777398653/1-tristan-skin3_iwewbr.webp',
      costumeName: 'Marca de Queimadura',
      descriptions: {
        1: `${chance60} Atacar um inimigo com <span class='statusHab'>Resistência de Fogo</span> reduzida diminui a recarga da <span class='statusHab'>Perícia Normal</span> em <span class='status'>50%</span> e aumenta a <span class='statusHab'>Eficiência de Irrupção de Fogo</span> em <span class='status'>20%</span> por <span class='status'>15s</span>. (Recarga: <span class='status'>20s</span>)`,

        2: `${chance30} Atacar um inimigo com <span class='statusHab'>Resistência de Fogo</span> reduzida diminui a recarga da <span class='statusHab'>Perícia Normal</span> em <span class='status'>60%</span> e aumenta a <span class='statusHab'>Eficiência de Irrupção de Fogo</span> em <span class='status'>25%</span> por <span class='status'>15s</span>. (Recarga: <span class='status'>20s</span>)`,

        3: `${chance10} Atacar um inimigo com <span class='statusHab'>Resistência de Fogo</span> reduzida diminui a recarga da <span class='statusHab'>Perícia Normal</span> em <span class='status'>70%</span> e aumenta a <span class='statusHab'>Eficiência de Irrupção de Fogo</span> em <span class='status'>30%</span> por <span class='status'>15s</span>. (Recarga: <span class='status'>20s</span>)`,
      },
    },
    {
      id: `${baseId}-3`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777398653/1-tristan-skin4_vkzc9l.webp',
      costumeName: 'Brasa Crescente',
      descriptions: {
        1: `${chance60} Usar a <span class='statusHab'>Perícia Normal</span> quando o impulso de dano de <span class='statusHab'>Perícia Normal</span> estiver ativo reduz a recarga do <span class='statusHab'>Ataque Especial</span> em <span class='status'>60%</span> e aumenta o dano de <span class='statusHab'>Movimento Definitivo</span> em <span class='status'>100%</span> por <span class='status'>15s</span>. (Recarga: <span class='status'>20s</span>)`,

        2: `${chance30} Usar a <span class='statusHab'>Perícia Normal</span> quando o impulso de dano de <span class='statusHab'>Perícia Normal</span> estiver ativo reduz a recarga do <span class='statusHab'>Ataque Especial</span> em <span class='status'>80%</span> e aumenta o dano de <span class='statusHab'>Movimento Definitivo</span> em <span class='status'>140%</span> por <span class='status'>15s</span>. (Recarga: <span class='status'>20s</span>)`,

        3: `${chance10} Usar a <span class='statusHab'>Perícia Normal</span> quando o impulso de dano de <span class='statusHab'>Perícia Normal</span> estiver ativo reduz a recarga do <span class='statusHab'>Ataque Especial</span> em <span class='status'>100%</span> e aumenta o dano de <span class='statusHab'>Movimento Definitivo</span> em <span class='status'>180%</span> por <span class='status'>15s</span>. (Recarga: <span class='status'>20s</span>)`,
      },
    },
    {
      id: `${baseId}-4`,
      name: baseName,
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777398653/1-tristan-skin5_yn185v.webp',
      costumeName: 'Jovem Promessa',
      descriptions: {
        1: `${chance60} Efetivar o <span class='statusHab'>Movimento Definitivo</span> aumenta o <span class='statusHab'>Medidor de Irrupção</span> do inimigo em <span class='status'>40</span> e, se um aliado ativar <span class='statusHab'>Irrupção de Ar</span>, o dano de <span class='statusHab'>Ataque Normal</span> de todos os heróis aliados é aumentado em <span class='status'>12%</span> por <span class='status'>15s</span>.`,

        2: `${chance30} Efetivar o <span class='statusHab'>Movimento Definitivo</span> aumenta o <span class='statusHab'>Medidor de Irrupção</span> do inimigo em <span class='status'>50</span> e, se um aliado ativar <span class='statusHab'>Irrupção de Ar</span>, o dano de <span class='statusHab'>Ataque Normal</span> de todos os heróis aliados é aumentado em <span class='status'>16%</span> por <span class='status'>15s</span>.`,

        3: `${chance10} Efetivar o <span class='statusHab'>Movimento Definitivo</span> aumenta o <span class='statusHab'>Medidor de Irrupção</span> do inimigo em <span class='status'>60</span> e, se um aliado ativar <span class='statusHab'>Irrupção de Ar</span>, o dano de <span class='statusHab'>Ataque Normal</span> de todos os heróis aliados é aumentado em <span class='status'>20%</span> por <span class='status'>15s</span>.`,
      },
    },
  ],
};