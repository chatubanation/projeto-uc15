1. Tokens de Design (Custom Properties)

Todos os valores globais do sistema de design estão declarados no escopo `:root` para garantir consistência e facilitar a manutenção:

```css
:root {
  /* Cores Principais */
  --color-primary: #0f2b48;
  --color-secondary: #1b4965;
  --color-accent: #2a9d8f;
  --color-background: #f8f9fa;
  --color-text: #212529;
  --color-muted: #6c757d;S

  /* Tipografia */
  --font-base: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-heading: 'Helvetica Neue', Arial, sans-serif;

  /* Espaçamentos */
  --space-xs: 0.25rem; /* 4px */
  --space-sm: 0.5rem;  /* 8px */
  --space-md: 1rem;    /* 16px */
  --space-lg: 1.5rem;  /* 24px */
  --space-xl: 2.5rem;  /* 40px */

  /* Bordas e Sombras */
  --radius-sm: 4px;
  --radius-md: 8px;
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.15);

  /* Movimento */
  --transition-fast: 150ms ease-in-out;
  --transition-normal: 300ms ease-in-out;
}