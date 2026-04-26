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
        1: `Cada acerto em um inimigo em <strong>Queimadura</strong> aplica +4 acúmulos adicionais de <strong>Redução de Defesa</strong> causados por <strong>Queimadura</strong>. (Máx.: 100, apenas enquanto a <strong>Queimadura</strong> estiver ativa)
Atacar um inimigo em <strong>Queimadura</strong> aumenta o <strong>Dano Sagrado</strong> em <strong>24%</strong>.`,

        2: `Cada acerto em um inimigo em <strong>Queimadura</strong> aplica +4 acúmulos adicionais de <strong>Redução de Defesa</strong> causados por <strong>Queimadura</strong>. (Máx.: 100, apenas enquanto a <strong>Queimadura</strong> estiver ativa)
Atacar um inimigo em <strong>Queimadura</strong> aumenta o <strong>Dano Sagrado</strong> em <strong>32%</strong>.`,

        3: `Cada acerto em um inimigo em <strong>Queimadura</strong> aplica +4 acúmulos adicionais de Redução de Defesa causados por <strong>Queimadura</strong>. (Máx.: 100, apenas enquanto a <strong>Queimadura</strong> estiver ativa)
Atacar um inimigo em <strong>Queimadura</strong> aumenta o <strong>Dano Sagrado</strong> em <strong>40%</strong>..`,
      },
    },

    {
      id: 'escanor-2',
      name: 'Escanor',
      image:
        'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777164222/1-escanor-skin2_sz6imr.webp',
      costumeName: 'Sol do Meio-Dia',
      descriptions: {
        1: `Aumenta a duração de <strong>Chama Solar</strong> em <strong>6</strong> s. Atacar um inimigo enquanto <strong>Ponto Solar</strong> estiver ativo tem <strong>50%</strong> 
        de chance de conceder um <strong>Ponto Solar</strong> adicional. Usar a Habilidade Suprema aumenta o HP Máx. em <strong>24%</strong> por 10 s.`,

        2: `Aumenta a duração de <strong>Chama Solar</strong> em <strong>8</strong> s. Atacar um inimigo enquanto <strong>Ponto Solar</strong> estiver ativo tem <strong>75%</strong> 
        de chance de conceder um <strong>Ponto Solar</strong> adicional. Usar a Habilidade Suprema aumenta o HP Máx. em <strong>32%</strong> por 10 s.`,

        3: `Aumenta a duração de <strong>Chama Solar</strong> em <strong>10</strong> s. Atacar um inimigo enquanto <strong>Ponto Solar</strong> estiver ativo tem <strong>100%</strong> 
        de chance de conceder um <strong>Ponto Solar</strong> adicional. Usar a Habilidade Suprema aumenta o HP Máx. em <strong>40%</strong> por 10 s.`,
      },
    },
  ],
};