# Seven Deadly Sins: Origin — Fan Wiki (v2.0)

> Site não-oficial com informações, guias e lore do novo jogo **The Seven Deadly Sins: Origin**.

Este projeto evoluiu de um site estático em HTML + CSS para uma nova arquitetura moderna utilizando **React + TypeScript + Vite**, com foco em escalabilidade, organização e melhor experiência de desenvolvimento.

---

## 🚀 Status do Projeto

**Status geral:** 🟢 Em desenvolvimento ativo (v2.5)

---

## 🔄 Evolução do Projeto

### 🧱 Versão 1.0 → 1.4 (LEGACY - HTML + CSS)

A primeira versão do projeto foi construída utilizando apenas tecnologias base da web:

* HTML5 + CSS3 puro
* Layout responsivo manual
* Sistema multi-page sem JavaScript
* Menu hambúrguer via CSS
* Estrutura estilo wiki simples

### 📌 Principais entregas da v1.0 até v1.4:

* Estrutura inicial do site criada
* Sistema de navegação funcional entre páginas
* Menu responsivo sem JavaScript
* Separação modular de CSS:

  * `style.css`
  * `menu.css`
  * `banner.css`
  * `footer.css`
* Correção de responsividade geral
* Ajustes de layout do banner (100% viewport correto)
* Correção do footer em diferentes resoluções
* Adição de favicon
* Aplicação de background em todas as páginas
* Correções de textos e estrutura de linguagem
* Base completa para expansão estilo wiki

---

## 📦 Código da versão 1.4

👉 **Link do repositório v1.4 (HTML + CSS):**
🔗 *(inserir link aqui)*

---

## ⚡ Nova Arquitetura — v2.0+

A versão atual do projeto foi totalmente reestruturada utilizando:

* ⚛️ React
* 🟦 TypeScript
* ⚡ Vite

---

## 🧩 Commits da v2.x

### 🚀 `lion-sin-of-pride-v2-2.0-start`

* Inicialização do projeto React + Vite + TypeScript
* Estrutura base do novo sistema criada
* Migração inicial do layout da versão 1.x

---

### 🔄 `lion-sin-of-pride-v2-2.1-restart`

* Reorganização da estrutura do projeto
* Ajustes iniciais de arquitetura
* Preparação para divisão de componentes
* Limpeza da base inicial do projeto

---

### 🆕 `lion-sin-of-pride-v2-2.2-addition-of-the-costumes-page`

* Adição da página/seção de **Costumes**
* Estrutura inicial de conteúdo expandido
* Primeira implementação de feature modular na v2.0

---

### 🎨 `lion-sin-of-pride-v2-2.3-ui-and-content-update`

* Atualização de conteúdo na página **Costumes**
* Melhorias nos conceitos de visualização (UX/UI)
* Ajustes na interface para melhor experiência do usuário
* Correção de botão na página **Home**

---

### 🎨 `lion-sin-of-pride-v2-2.4-costumes-page-improvements`

* ✔️ Sistema de descrição organizado

  * Finalização e estruturação completa do conteúdo da página **Costumes**

* ✔️ Correção e refinamento de CSS

  * Resolução de conflitos de `color` duplicado
  * Ajuste de classes específicas para evitar sobrescrita de estilos
  * Correção de estilos que não estavam sendo aplicados corretamente (ex: `.obs-page`)

* ✔️ Botão “Voltar ao topo”

  * Implementação funcional no final da página
  * Centralização correta com `margin: auto`
  * Scroll ajustado para funcionar corretamente em diferentes contextos (`window`, `document`, fallback)

* ✔️ Layout mais consistente

  * Melhor organização visual dos textos
  * Separação clara entre descrição, observações e listas de cards
  * Estrutura mais limpa, legível e padronizada

* ✔️ Sistema de filtro por personagem (principal upgrade)

  * Implementação do sistema de filtragem de conteúdo por personagem
  * Melhor experiência de navegação dentro da página **Costumes**
  * Base preparada para expansão futura de categorias dinâmicas

---

### 🛠️ `lion-sin-of-pride-v2-2.5-costumes-ui-refinement`

* Ajustes nos botões da página **Costumes**

  * Melhor alinhamento visual
  * Refinamento de interação

* Limpeza de código

  * Remoção de comentário desnecessário na página

* Responsividade

  * Correção de comportamento em determinados breakpoints
  * Melhor adaptação visual em telas menores

---

## 📁 Estrutura atual (v2.5)

```bash id="v2structure3"
/src/
│
├── components/
├── pages/
├── assets/
├── styles/
├── App.tsx
├── main.tsx
└── ...
```

---

## 🎯 Direção do Projeto

O projeto agora evolui para um sistema inspirado em:

* 🎮 Interfaces de RPG modernos
* ⚔️ Estética de anime sombria (Nanatsu no Taizai)
* 🧩 UI modular estilo jogo AAA
* ⚡ Experiência dinâmica e escalável

---

## 🚧 Próximos passos

* [ ] Estrutura completa de páginas (Characters, Weapons, etc.)
* [ ] Sistema de navegação SPA
* [ ] Componentização de UI (cards, menus, banners)
* [ ] Integração de sistema de dados
* [ ] Evolução visual para UI estilo jogo completo

---

🔥 Projeto em evolução constante na arquitetura moderna (v2.x)
