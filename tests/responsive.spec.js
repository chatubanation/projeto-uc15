const viewports = [
    { nome: 'Mobile Pequeno', width: 320, height: 568 },
    { nome: 'Mobile Padrão', width: 375, height: 812 },
    { nome: 'Tablet', width: 768, height: 1024 },
    { nome: 'Desktop', width: 1280, height: 800 }
  ];
  
  describe('Validação de Layout Responsivo sem Overflow', () => {
  
    viewports.forEach(({ nome, width, height }) => {
      test(`Deve renderizar a home em ${nome} (${width}px) sem rolagem horizontal`, async ({ page }) => {
        await page.setViewportSize({ width, height });
        await page.goto('./prototipo/index.html');
  
        // Verifica se a largura do documento ultrapassa a janela de visualização
        const temOverflowHorizontal = await page.evaluate(() => {
          return document.documentElement.scrollWidth > window.innerWidth;
        });
  
        expect(temOverflowHorizontal).toBe(false);
      });
    });
  
  });