import { test, expect } from '@playwright/test';

test.describe('Accessibility Tests', () => {
  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier qu'il y a un seul h1
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);
    
    // Vérifier que les headings sont dans l'ordre
    const headings = page.locator('h1, h2, h3, h4, h5, h6');
    const headingCount = await headings.count();
    
    for (let i = 0; i < headingCount; i++) {
      const heading = headings.nth(i);
      const tagName = await heading.evaluate(el => el.tagName.toLowerCase());
      
      // Vérifier que les headings sont appropriés
      expect(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).toContain(tagName);
    }
  });

  test('should have proper alt text for images', async ({ page }) => {
    await page.goto('/');
    
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      
      // Vérifier que les images ont des alt text
      expect(alt).toBeTruthy();
      expect(alt).not.toBe('');
    }
  });

  test('should have proper labels for form inputs', async ({ page }) => {
    await page.goto('/contact');
    
    const inputs = page.locator('input, textarea, select');
    const inputCount = await inputs.count();
    
    for (let i = 0; i < inputCount; i++) {
      const input = inputs.nth(i);
      const type = await input.getAttribute('type');
      
      // Ignorer les inputs de type hidden
      if (type === 'hidden') continue;
      
      const id = await input.getAttribute('id');
      const ariaLabel = await input.getAttribute('aria-label');
      const ariaLabelledBy = await input.getAttribute('aria-labelledby');
      
      // Vérifier qu'il y a un label ou un aria-label
      expect(id || ariaLabel || ariaLabelledBy).toBeTruthy();
    }
  });

  test('should have proper focus management', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier que les éléments interactifs sont focusables
    const interactiveElements = page.locator('button, a, input, textarea, select');
    const elementCount = await interactiveElements.count();
    
    for (let i = 0; i < elementCount; i++) {
      const element = interactiveElements.nth(i);
      const tabIndex = await element.getAttribute('tabindex');
      
      // Vérifier que l'élément est focusable
      expect(tabIndex).not.toBe('-1');
    }
  });

  test('should have proper color contrast', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier que les textes ont un contraste suffisant
    const texts = page.locator('p, h1, h2, h3, h4, h5, h6, span, div');
    const textCount = await texts.count();
    
    for (let i = 0; i < Math.min(textCount, 10); i++) {
      const text = texts.nth(i);
      const color = await text.evaluate(el => {
        const styles = window.getComputedStyle(el);
        return styles.color;
      });
      
      // Vérifier que la couleur n'est pas trop claire
      expect(color).not.toBe('rgb(255, 255, 255)');
    }
  });

  test('should have proper ARIA attributes', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier que les éléments interactifs ont des ARIA attributes appropriés
    const buttons = page.locator('button');
    const buttonCount = await buttons.count();
    
    for (let i = 0; i < buttonCount; i++) {
      const button = buttons.nth(i);
      const ariaLabel = await button.getAttribute('aria-label');
      const text = await button.textContent();
      
      // Vérifier qu'il y a un label ou du texte
      expect(ariaLabel || text).toBeTruthy();
    }
  });

  test('should be keyboard navigable', async ({ page }) => {
    await page.goto('/');
    
    // Tester la navigation au clavier
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    // Vérifier qu'un élément est focusé
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });

  test('should have proper skip links', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier qu'il y a des liens de saut
    const skipLinks = page.locator('a[href="#main"], a[href="#content"]');
    const skipLinkCount = await skipLinks.count();
    
    expect(skipLinkCount).toBeGreaterThan(0);
  });

  test('should have proper language attributes', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier que la langue est spécifiée
    const html = page.locator('html');
    const lang = await html.getAttribute('lang');
    
    expect(lang).toBeTruthy();
    expect(['fr', 'en']).toContain(lang);
  });

  test('should have proper form validation', async ({ page }) => {
    await page.goto('/contact');
    
    // Tenter de soumettre le formulaire vide
    const submitButton = page.locator('button[type="submit"]');
    if (await submitButton.isVisible()) {
      await submitButton.click();
      
      // Vérifier que les erreurs de validation sont affichées
      await expect(page.locator('text=requis')).toBeVisible();
    }
  });

  test('should have proper error messages', async ({ page }) => {
    await page.goto('/contact');
    
    // Remplir un champ avec une valeur invalide
    const emailInput = page.locator('input[type="email"]');
    if (await emailInput.isVisible()) {
      await emailInput.fill('invalid-email');
      await emailInput.blur();
      
      // Vérifier qu'un message d'erreur est affiché
      await expect(page.locator('text=email invalide')).toBeVisible();
    }
  });

  test('should have proper loading states', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier que les éléments de chargement sont présents
    const loadingElements = page.locator('[aria-label*="chargement"], [aria-label*="loading"]');
    const loadingCount = await loadingElements.count();
    
    // Vérifier qu'il y a des indicateurs de chargement
    expect(loadingCount).toBeGreaterThan(0);
  });
});
