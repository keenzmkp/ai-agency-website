import { test, expect } from '@playwright/test';

test.describe('Regression Tests', () => {
  test('should maintain consistent layout', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier que les éléments principaux sont présents
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=Transformez votre entreprise')).toBeVisible();
    
    // Vérifier que la navigation est présente
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('a[href="/about"]')).toBeVisible();
    await expect(page.locator('a[href="/services"]')).toBeVisible();
    await expect(page.locator('a[href="/portfolio"]')).toBeVisible();
    await expect(page.locator('a[href="/contact"]')).toBeVisible();
  });

  test('should maintain consistent styling', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier que les classes CSS sont appliquées
    const hero = page.locator('section.hero');
    await expect(hero).toBeVisible();
    
    const buttons = page.locator('button, a').filter({ hasText: /Découvrir|Voir|Démarrer/ });
    await expect(buttons.first()).toBeVisible();
    
    // Vérifier que les couleurs sont appliquées
    const primaryButton = page.locator('button, a').filter({ hasText: /Découvrir/ }).first();
    await expect(primaryButton).toHaveClass(/bg-primary-500/);
  });

  test('should maintain consistent functionality', async ({ page }) => {
    await page.goto('/');
    
    // Tester la navigation
    await page.click('a[href="/about"]');
    await expect(page).toHaveURL('/about');
    
    await page.goBack();
    await expect(page).toHaveURL('/');
    
    // Tester les boutons CTA
    const ctaButtons = page.locator('button, a').filter({ hasText: /Découvrir|Voir|Démarrer/ });
    await expect(ctaButtons.first()).toBeVisible();
    
    // Tester le chatbot
    const chatbotButton = page.locator('button[aria-label="Ouvrir le chatbot"]');
    await expect(chatbotButton).toBeVisible();
    
    await chatbotButton.click();
    await expect(page.locator('text=Assistant IA')).toBeVisible();
  });

  test('should maintain consistent content', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier que le contenu principal est présent
    await expect(page.locator('text=Solutions d\'automation IA')).toBeVisible();
    await expect(page.locator('text=Développement Web')).toBeVisible();
    await expect(page.locator('text=Consulting Digital')).toBeVisible();
    await expect(page.locator('text=Formation')).toBeVisible();
    
    // Vérifier que les statistiques sont présentes
    await expect(page.locator('text=200+')).toBeVisible();
    await expect(page.locator('text=500+')).toBeVisible();
    await expect(page.locator('text=5+')).toBeVisible();
    await expect(page.locator('text=25+')).toBeVisible();
  });

  test('should maintain consistent responsive behavior', async ({ page }) => {
    // Tester sur desktop
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('button[aria-label="Toggle menu"]')).not.toBeVisible();
    
    // Tester sur tablet
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    
    await expect(page.locator('nav')).toBeVisible();
    
    // Tester sur mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    await expect(page.locator('button[aria-label="Toggle menu"]')).toBeVisible();
    
    // Tester l'ouverture du menu mobile
    await page.click('button[aria-label="Toggle menu"]');
    await expect(page.locator('text=À propos')).toBeVisible();
  });

  test('should maintain consistent form behavior', async ({ page }) => {
    await page.goto('/contact');
    
    // Vérifier que le formulaire est présent
    await expect(page.locator('form')).toBeVisible();
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
    
    // Tester la validation
    await page.click('button[type="submit"]');
    await expect(page.locator('text=requis')).toBeVisible();
  });

  test('should maintain consistent error handling', async ({ page }) => {
    await page.goto('/contact');
    
    // Tester la validation des champs
    const emailInput = page.locator('input[name="email"]');
    await emailInput.fill('invalid-email');
    await emailInput.blur();
    
    await expect(page.locator('text=email invalide')).toBeVisible();
  });

  test('should maintain consistent loading states', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier que les éléments de chargement sont présents
    const loadingElements = page.locator('[aria-label*="chargement"], [aria-label*="loading"]');
    const loadingCount = await loadingElements.count();
    
    // Vérifier qu'il y a des indicateurs de chargement
    expect(loadingCount).toBeGreaterThan(0);
  });

  test('should maintain consistent accessibility', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier que les images ont des alt text
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      
      expect(alt).toBeTruthy();
      expect(alt).not.toBe('');
    }
    
    // Vérifier que les boutons ont des labels
    const buttons = page.locator('button');
    const buttonCount = await buttons.count();
    
    for (let i = 0; i < buttonCount; i++) {
      const button = buttons.nth(i);
      const ariaLabel = await button.getAttribute('aria-label');
      const text = await button.textContent();
      
      expect(ariaLabel || text).toBeTruthy();
    }
  });

  test('should maintain consistent SEO', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier les meta tags
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content');
    await expect(page.locator('meta[name="keywords"]')).toHaveAttribute('content');
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content');
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content');
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content');
    
    // Vérifier qu'il y a un seul h1
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);
  });
});
