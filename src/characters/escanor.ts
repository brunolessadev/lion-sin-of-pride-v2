import type { Character } from '../data/costumes';

export const escanor: Character = {
  id: 'escanor',
  name: 'Escanor',
  costumes: [
    {
      id: 'escanor-1',
      name: 'Escanor',
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777164222/1-escanor-skin1_ga6xgn.webp',
      costumeName: 'Sol Ardente',
      descriptions: {
        1: `Chance de surgir: <span class='status'>60%</span></br>Cada acerto em um inimigo em 
        <span class='statusHab'>Queimadura</span> 
        aplica 
        <span class='status'>+4</span> 
        acúmulos adicionais de <span class='statusHab'>Redução de Defesa</span> causados por <span class='statusHab'>Queimadura</span>. (Máx.: <span class='status'>100</span>, apenas enquanto a <span class='statusHab'>Queimadura</span> estiver ativa)
        Atacar um inimigo em <span class='statusHab'>Queimadura</span> aumenta o <span class='statusHab'>Dano Sagrado</span> em <span class='status'>24%</span>.`,

        2: `Chance de surgir: <span class='status'>30%</span></br>Cada acerto em um inimigo em 
        <span class='statusHab'>Queimadura</span> 
        aplica 
        <span class='status'>+4</span> 
        acúmulos adicionais de <span class='statusHab'>Redução de Defesa</span> causados por <span class='statusHab'>Queimadura</span>. (Máx.: <span class='status'>100</span>, apenas enquanto a <span class='statusHab'>Queimadura</span> estiver ativa)
        Atacar um inimigo em <span class='statusHab'>Queimadura</span> aumenta o <span class='statusHab'>Dano Sagrado</span> em <span class='status'>32%</span>.`,

        3: `Chance de surgir: <span class='status'>10%</span></br>Cada acerto em um inimigo em 
        <span class='statusHab'>Queimadura</span> aplica <span class='status'>+4</span> acúmulos adicionais de <span class='statusHab'>Redução de Defesa</span> causados por <span class='statusHab'>Queimadura</span>. (Máx.: <span class='status'>100</span>, apenas enquanto a <span class='statusHab'>Queimadura</span> estiver ativa)
        Atacar um inimigo em <span class='statusHab'>Queimadura</span> aumenta o <span class='statusHab'>Dano Sagrado</span> em <span class='status'>40%</span>.`,
      },
    },

    {
      id: 'escanor-2',
      name: 'Escanor',
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777164222/1-escanor-skin2_sz6imr.webp',
      costumeName: 'Sol do Meio-Dia',
      descriptions: {
          1: `Chance de surgir: <span class='status'>60%</span></br>Aumenta a duração de <span class='statusHab'>Chama Solar</span> em <span class='status'>6s</span>. 
          Atacar um inimigo enquanto <span class='statusHab'>Ponto Solar</span> estiver ativo tem <span class='status'>50%</span> 
          de chance de conceder um <span class='statusHab'>Ponto Solar</span> adicional. 
          Usar a Habilidade Suprema aumenta o HP Máx. em <span class='status'>24%</span> por <span class='status'>10s</span>.`,

          2: `Chance de surgir: <span class='status'>30%</span></br>Aumenta a duração de <span class='statusHab'>Chama Solar</span> em <span class='status'>8s</span>. 
          Atacar um inimigo enquanto <span class='statusHab'>Ponto Solar</span> estiver ativo tem <span class='status'>75%</span> 
          de chance de conceder um <span class='statusHab'>Ponto Solar</span> adicional. 
          Usar a Habilidade Suprema aumenta o HP Máx. em <span class='status'>32%</span> por <span class='status'>10s</span>.`,

          3: `Chance de surgir: <span class='status'>10%</span></br>Aumenta a duração de <span class='statusHab'>Chama Solar</span> em <span class='status'>10s</span>. 
          Atacar um inimigo enquanto <span class='statusHab'>Ponto Solar</span> estiver ativo tem <span class='status'>100%</span> 
          de chance de conceder um <span class='statusHab'>Ponto Solar</span> adicional. 
          Usar a Habilidade Suprema aumenta o HP Máx. em <span class='status'>40%</span> por <span class='status'>10s</span>.`,
      },
    },
  ],
};