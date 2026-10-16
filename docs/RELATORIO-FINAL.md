## 1. Auditoria de Acessibilidade (WCAG 2.2)

* **Landmarks e Hierarquia:** Implementados `<header>`, `<nav>`, `<main>`, `<footer>` e estrutura de `<h1>` até `<h3>` sem pular níveis.
* **Achados e Correções:**
  * *Problema:* O contraste do botão secundário estava em 3.2:1 (Abaixo do exigido 4.5:1).
  * *Correção:* Ajustada a variável `--color-accent` para alcançar razão de contraste de 5.1:1.
  * *Suporte a Movimento:* Adicionado suporte a `@media (prefers-reduced-motion: reduce)` para desativar transições em usuários com restrições vestibulares.

---

## 2. Auditoria de SEO e Metadados

* **Meta Tags Revisadas:** `title` descritivo único por página, `description`, `robots="index, follow"`, e tags `canonical` configuradas.
* **Mídias:** Todas as imagens contêm atributos `alt` informativos ou `alt=""` caso sejam puramente decorativas.

---

## 3. Métricas de Desempenho (Core Web Vitals)

Metodologia de medição utilizando Lighthouse (Laboratório) e Web Vitals API em dispositivo mobile com limitação de rede 3G/4G:

| Métrica | Antes das Otimizações | Depois das Otimizações | Ação Realizada |
| :--- | :--- | :--- | :--- |
| **LCP** *(Largest Contentful Paint)* | 3.8s | **1.6s** | Otimização do formato das imagens para `.webp` e inclusão do elemento `<picture>`. |
| **INP** *(Interaction to Next Paint)* | 240ms | **65ms** | Delegação de eventos no JavaScript e eliminação de tarefas longas no thread principal. |
| **CLS** *(Cumulative Layout Shift)* | 0.18 | **0.01** | Definição explícita de `width` e `height` em todas as tags `<img>` e contêineres de galeria. |

---

## 4. Limitações Conhecidas

Ferramentas automáticas (como Lighthouse) cobrem apenas cerca de 30% dos critérios WCAG. Testes manuais por leitor de tela e teclado continuam sendo o validador definitivo da acessibilidade do portal.