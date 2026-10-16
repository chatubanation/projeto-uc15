## 1. Estrutura CSS, Unidades e Tokens (T02, T04)

* **Design Tokens:** Definidos em `:root` utilizando Custom Properties para padronizar cores (`--color-primary`, `--color-accent`), tipografia, espaçamentos e transições.
* **Unidades de Medida:** Uso prioritário de `rem` para fontes e margens (preservando o zoom e preferências de acessibilidade do usuário) e `ch`/`vw` para controle de largura de texto fluido.
* **Gestão de Cascata:** Não utilizou-se `!important` global. A especificidade foi mantida baixa através de seletores de classe e convenção BEM simples.
* **Estados Interativos:** Todos os componentes focáveis possuem estados visíveis explícitos para `:hover`, `:focus-visible`, `:active`, `:disabled` e `:invalid`.

---

## 2. Decisões de Layout: Flexbox vs Grid (T03, T05)

* **Flexbox (Unidimensional):** Aplicado nos menus de navegação, cards de notícias e barras de ferramentas onde a quebra natural (`flex-wrap`) é necessária sem engessar a altura.
* **CSS Grid (Bidimensional):** Aplicado no layout da página principal (`.grid-home`) e na seção de galeria/tabela para garantir alinhamento rígido de colunas a partir de 320px sem gerar rolagem horizontal.
* **Responsividade:** Media queries foram escritas com base na quebra do conteúdo (content-first breakpoints), e não em modelos específicos de celulares.

---

## 3. Customização Controlada do Bootstrap 5.3 (T06)

* **Motivação:** Utilizado para acelerar a criação do sistema de grid de suporte e componentes acessíveis de modal/toast.
* **Estratégia de Integração:** O Bootstrap foi carregado via assets locais (sem dependência de CDN externa no ambiente de produção/teste offline). Variáveis do Bootstrap foram sobrescritas via CSS raiz sem duplicar código nem poluir o escopo global.

---

## 4. Uso do jQuery 4 (T08)

* **Componente Selecionado:** Animação e delegação de eventos do trilho/carrossel secundário na página de artigos.
* **Justificativa:** Demonstrar integração da biblioteca em escopo isolado sem comprometer os scripts nativos.
* **Licença e Impacto:** MIT License. Tamanho minificado aproximadamente 30KB gzipped.
* **Plano de Remoção / Rollback:** O evento pode ser substituído a qualquer momento por `document.querySelector` nativo e `scrollBy({ behavior: 'smooth' })` sem quebrar o restante da aplicação.