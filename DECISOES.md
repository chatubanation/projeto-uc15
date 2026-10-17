## 1. Estrutura CSS, Unidades e Tokens (T02, T04)

* **Design Tokens:** Definidos em `:root` utilizando Custom Properties (`--color-primary`, `--color-accent`, `--spacing-base`, etc.) para padronizar cores, tipografia e espaçamentos.
* **Unidades de Medida:**
  * Uso prioritário de `rem` para fontes, margens e paddings, respeitando a preferência de zoom e tamanho de texto configurados no navegador do usuário.
  * Uso de `ch` e `vw` para controle de largura legível de textos de notícias e títulos.
* **Gestão de Cascata e Especificidade:** Não foi utilizado `!important` global. A especificidade foi mantida baixa utilizando seletores de classe e convenção BEM simples.
* **Estados Interativos:** Todos os elementos focáveis possuem estados visíveis explícitos para `:hover`, `:focus-visible`, `:active`, `:disabled` e `:invalid`.
* **Movimento Acessível:** Implementado suporte a `@media (prefers-reduced-motion: reduce)` para remover ou suavizar transições para usuários com restrições vestibulares.

---

## 2. Decisões de Layout: Flexbox vs CSS Grid (T03, T05)

* **Flexbox (Unidimensional):** Aplicado nos menus de navegação (`<nav>`), formulários e cards onde a quebra natural (`flex-wrap`) é necessária.
* **CSS Grid (Bidimensional):** Aplicado na estrutura principal das páginas (`index.html`, `tabela.html`) e no trilho de notícias para garantir alinhamentos rígidos a partir de 320px sem gerar rolagem horizontal.
* **Responsividade Content-First:** As media queries foram escritas com base na quebra do conteúdo (`min-width`), sem engessar o layout em modelos específicos de aparelhos.

---

## 3. Decisão de Mídia e Imagens

* **Abordagem Vetorial/CSS:** O projeto optou por não utilizar imagens rasterizadas (`.jpg` / `.png`), reduzindo drasticamente o peso total das páginas e melhorando as métricas de LCP e CLS. Ícones e elementos visuais foram construídos via CSS puro e SVG inline.

---

## 4. Customização Controlada do Bootstrap 5.3 (T06)

* **Motivação:** Acelerar a criação de componentes acessíveis (como modais e toasts de notificação).
* **Estratégia de Integração:** O Bootstrap foi carregado via assets locais (garantindo funcionamento offline). As variáveis padrão foram sobrescritas via CSS raiz sem duplicar código nem poluir a especificidade global.

---

## 5. Uso de Bibliotecas: jQuery 4 (T08)

* **Componente Selecionado:** Controle de eventos do carrossel/trilho secundário de notícias na página de artigos.
* **Justificativa:** Demonstrar a integração da biblioteca em um escopo isolado sem interferir nos scripts nativos ES6+.
* **Licença e Tamanho:** MIT License (~30KB minificado).
* **Plano de Remoção / Rollback:** O script pode ser substituído a qualquer momento por `document.querySelector` nativo e `element.scrollBy({ behavior: 'smooth' })` sem afetar o resto da aplicação.