import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load the homepage successfully', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier que la page se charge
    await expect(page).toHaveTitle(/Agence AI/);
    
    // Vérifier les éléments principaux
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=Transformez votre entreprise')).toBeVisible();
  });

  test('should have working navigation', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier les liens de navigation
    await expect(page.locator('a[href="/about"]')).toBeVisible();
    await expect(page.locator('a[href="/services"]')).toBeVisible();
    await expect(page.locator('a[href="/portfolio"]')).toBeVisible();
    await expect(page.locator('a[href="/contact"]')).toBeVisible();
    
    // Tester la navigation
    await page.click('a[href="/about"]');
    await expect(page).toHaveURL('/about');
  });

  test('should have working CTA buttons', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier les boutons CTA
    const ctaButtons = page.locator('button, a').filter({ hasText: /Découvrir|Voir|Démarrer/ });
    await expect(ctaButtons.first()).toBeVisible();
    
    // Tester le clic sur un bouton CTA
    await ctaButtons.first().click();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Vérifier que le menu mobile est présent
    await expect(page.locator('button[aria-label="Toggle menu"]')).toBeVisible();
    
    // Tester l'ouverture du menu mobile
    await page.click('button[aria-label="Toggle menu"]');
    await expect(page.locator('text=À propos')).toBeVisible();
  });

  test('should have working chatbot', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier que le bouton chatbot est présent
    await expect(page.locator('button[aria-label="Ouvrir le chatbot"]')).toBeVisible();
    
    // Tester l'ouverture du chatbot
    await page.click('button[aria-label="Ouvrir le chatbot"]');
    await expect(page.locator('text=Assistant IA')).toBeVisible();
  });
});
