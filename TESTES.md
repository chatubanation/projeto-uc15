## Matriz de Dispositivos e Responsividade (T05)

| Dispositivo / Viewport | Resolução (CSS px) | Orientação | Navegador / Motor | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Mobile Pequeno** | 320px × 568px | Retrato | Chromium / Android | Aprovado |
| **Mobile Padrão** | 375px × 812px | Retrato / Paisagem | WebKit / iOS Safari | Aprovado |
| **Tablet** | 768px × 1024px | Retrato / Paisagem | Firefox | Aprovado |
| **Desktop** | 1280px × 800px+ | Paisagem | Chromium / Edge | Aprovado |

---

## Casos de Teste Manuais (T11)

### CT01: Navegação por Teclado e Foco Visível
* **Pré-condição:** Abrir o portal sem usar o mouse.
* **Passos:** Pressionar `Tab` sequencialmente do topo até o rodapé da página.
* **Resultado Esperado:** O foco visual deve contornar claramente todos os links, botões e campos de formulário sem pular elementos ou prender o foco.
* **Resultado Observado:** Passou em 100% das páginas.

### CT02: Filtragem de Notícias com Leitor de Tela
* **Pré-condição:** Ativar leitor de tela (NVDA/VoiceOver).
* **Passos:** Navegar até o campo de filtro de notícias e selecionar uma categoria (ex: "Jogos").
* **Resultado Esperado:** A lista de notícias é atualizada e a mudança é anunciada via região `aria-live`.
* **Resultado Observado:** Anúncio sonoro executado corretamente.

---

## Automação de Testes (T11)

* **Ferramenta:** Playwright / Cypress.
* **Localizadores:** Estritamente baseados em papéis semânticos e labels (`getByRole`, `getByLabel`).
* **Validação de Mutação:** Testado intencionalmente alterando a classe de um botão essencial — a suíte identificou a falha no componente imediatamente.