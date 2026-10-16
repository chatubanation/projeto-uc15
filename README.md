# Portal de Esportes - UC15 (Temporada Esportiva)

Portal mobile-first desenvolvido para acompanhamento em tempo real da temporada esportiva de futebol, oferecendo tabela de classificação, notícias, calendário de jogos e área interativa de favoritos.

- **URL Publicada (Staging/Prod):** https://github.com/chatubanation
- **Versão / Tag de Entrega:** `v1.0.0`

---

## Objetivo e Público-Alvo

O objetivo do produto é fornecer uma experiência acessível, rápida e intuitiva para torcedores e entusiastas de futebol acompanharem os principais eventos do campeonato em qualquer dispositivo, priorizando smartphones (mobile-first).

---

## Tarefas Críticas do Usuário

1. **Consultar Calendário e Tabela de Classificação:** Navegação rápida e leitura clara de jogos, datas e pontuação dos times (com suporte total a teclado e leitores de tela).
2. **Filtrar e Buscar Notícias/Notificações:** Filtragem dinâmica do acervo de notícias por categoria/time com atualização visual imediata de estado.
3. **Gerenciar Times/Notícias Favoritas:** Adicionar e remover itens da lista de favoritos com persistência local condicionada ao consentimento do usuário.

---

## Escopo de Fora (Out of Scope)

* Processamento de pagamentos ou venda de ingressos.
* Transmissão de vídeo via streaming ao vivo.
* Sistema completo de autenticação e rede social de torcedores no protótipo nativo.

---

## Tecnologias Utilizadas

* **Estrutura e Semântica:** HTML5 semântico (Landmarks: `<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`).
* **Estilização:** CSS3 puro com Custom Properties (Tokens), Flexbox, CSS Grid e media queries orientadas por conteúdo.
* **Componentes de Apoio:** Bootstrap 5.3 (customizado via variáveis CSS e utilitários controlados).
* **Lógica e Interatividade:** JavaScript Nativo (ES6+) com delegação de eventos e Pointer Events. Uso pontual de jQuery 4 apenas em componente secundário isolado.
* **CMS:** WordPress com Tema Filho (Child Theme) e `theme.json`.

---

## Estrutura do Projeto

/ (PROJETO UC15)
├─ docs/
│  ├─ CSS.md
│  ├─ DECISOES.md
│  └─ RELATORIO-FINAL.md
├─ prototipo/
│  ├─ assets/
│  │  ├─ CSS/
│  │  │  ├─ contato.css
│  │  │  ├─ header.css
│  │  │  ├─ index.css
│  │  │  ├─ main.css
│  │  │  ├─ noticias.css
│  │  │  └─ tabela.css
│  │  └─ img/
│  ├─ js/
│  │  └─ main.js
│  ├─ artigo.html
│  ├─ contato.html
│  ├─ index.html
│  ├─ noticias.html
│  └─ tabela.html
├─ wordpress/
│  └─ Tema-filho/
│     ├─ functions.php
│     └─ style.css
├─ CMS.md
├─ README.md
└─ TESTES.md