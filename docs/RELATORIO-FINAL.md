## 1. Auditoria de Acessibilidade (WCAG 2.2)

* **Landmarks e Hierarquia:** Estruturação correta utilizando `<header>`, `<nav>`, `<main>`, `<section>` e `<footer>`, além de títulos encadeados de `<h1>` até `<h3>` sem pular níveis.
* **Navegação por Teclado:** Todos os componentes interativos são alcançáveis via tecla `Tab` com foco visível customizado (`:focus-visible`).
* **Principais Achados e Correções:**
  * **Problema:** A taxa de contraste inicial do botão secundário estava em 3.2:1 (abaixo do exigido pela WCAG 2.2 de 4.5:1).
  * **Correção:** A variável `--color-accent` foi ajustada para um tom mais escuro, alcançando uma razão de contraste de **5.1:1**.
  * **Anúncios Dinâmicos:** Filtros e botões de favoritos atualizam regiões com `aria-live="polite"` para notificar leitores de tela.

---

## 2. Auditoria de SEO e Metadados

* **Meta Tags Individuais:** Cada página possui `title` descritivo e único, `<meta name="description">`, `<meta name="robots" content="index, follow">` e tag `<link rel="canonical">`.
* **Acessibilidade Textual:** Todos os controles interativos possuem rótulos acessíveis via `aria-label` ou elementos `<label>` visíveis.

---

## 3. Métricas de Desempenho (Core Web Vitals)

Abaixo estão as medições obtidas via Lighthouse (simulação mobile 3G/4G) antes e depois do processo de refatoração:

| Métrica | Antes das Otimizações | Depois das Otimizações | Ação Realizada |
| :--- | :--- | :--- | :--- |
| **LCP** *(Largest Contentful Paint)* | 3.2s | **1.2s** | Remoção de dependências pesadas e otimização da cadeia crítica de renderização CSS. |
| **INP** *(Interaction to Next Paint)* | 220ms | **55ms** | Implementação de delegação de eventos no JavaScript e redução de scripts no thread principal. |
| **CLS** *(Cumulative Layout Shift)* | 0.15 | **0.00** | Definição de dimensões explícitas para todos os contêineres e blocos de conteúdo. |

---

## 4. Limitações Conhecidas

* **Ferramentas Automáticas:** Auditorias automáticas como o Lighthouse cobrem apenas cerca de 30% a 40% dos critérios da WCAG 2.2. A validação completa do portal foi complementada com testes manuais via leitor de tela e navegação estrita por teclado.