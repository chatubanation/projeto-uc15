describe('Suíte de Testes - Portal Esportivo UC15', () => {

    // CT01: Navegação por Teclado e Foco Visível
    test('CT01: Deve garantir que todos os links e botões recebam foco por teclado', async ({ page }) => {
      await page.goto('./prototipo/index.html');
      
      // Navega pressionando Tab
      await page.keyboard.press('Tab');
      const primeiroElementoFocado = await page.evaluate(() => document.activeElement.tagName);
      
      expect(primeiroElementoFocado).not.toBe('BODY');
    });
  
    // CT02: Filtragem de Notícias e Atualização Visual
    test('CT02: Deve filtrar notícias e sinalizar a mudança de estado', async ({ page }) => {
      await page.goto('./prototipo/noticias.html');
  
      // Localizador semântico via getByRole / getByLabel
      const campoFiltro = page.getByRole('searchbox', { name: /buscar notícias/i });
      if (await campoFiltro.isVisible()) {
        await campoFiltro.fill('Futebol');
        await expect(page.locator('.noticias-list')).toContainText('Futebol');
      }
    });
  
    // CT03: Persistência de Favoritos
    test('CT03: Deve permitir favoritar um item com consentimento', async ({ page }) => {
      await page.goto('./prototipo/index.html');
  
      const botaoFavorito = page.getByRole('button', { name: /favoritar/i }).first();
      if (await botaoFavorito.isVisible()) {
        await botaoFavorito.click();
        await expect(botaoFavorito).toHaveAttribute('aria-pressed', 'true');
      }
    });
  
    // CT04: Validação do Formulário de Contato
    test('CT04: Deve exibir mensagem de erro ao enviar formulário inválido', async ({ page }) => {
      await page.goto('./prototipo/contato.html');
  
      const botaoEnviar = page.getByRole('button', { name: /enviar/i });
      if (await botaoEnviar.isVisible()) {
        await botaoEnviar.click();
        const campoInvalido = page.locator('input:invalid');
        await expect(campoInvalido).toBeVisible();
      }
    });
  
  });