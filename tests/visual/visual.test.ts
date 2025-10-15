import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  test('should match homepage screenshot', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Prendre une capture d'écran de la page d'accueil
    await expect(page).toHaveScreenshot('homepage.png');
  });

  test('should match about page screenshot', async ({ page }) => {
    await page.goto('/about');
    await page.waitForLoadState('networkidle');
    
    // Prendre une capture d'écran de la page à propos
    await expect(page).toHaveScreenshot('about-page.png');
  });

  test('should match services page screenshot', async ({ page }) => {
    await page.goto('/services');
    await page.waitForLoadState('networkidle');
    
    // Prendre une capture d'écran de la page services
    await expect(page).toHaveScreenshot('services-page.png');
  });

  test('should match portfolio page screenshot', async ({ page }) => {
    await page.goto('/portfolio');
    await page.waitForLoadState('networkidle');
    
    // Prendre une capture d'écran de la page portfolio
    await expect(page).toHaveScreenshot('portfolio-page.png');
  });

  test('should match contact page screenshot', async ({ page }) => {
    await page.goto('/contact');
    await page.waitForLoadState('networkidle');
    
    // Prendre une capture d'écran de la page contact
    await expect(page).toHaveScreenshot('contact-page.png');
  });

  test('should match pricing page screenshot', async ({ page }) => {
    await page.goto('/pricing');
    await page.waitForLoadState('networkidle');
    
    // Prendre une capture d'écran de la page tarifs
    await expect(page).toHaveScreenshot('pricing-page.png');
  });

  test('should match mobile layout', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Prendre une capture d'écran mobile
    await expect(page).toHaveScreenshot('homepage-mobile.png');
  });

  test('should match tablet layout', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Prendre une capture d'écran tablet
    await expect(page).toHaveScreenshot('homepage-tablet.png');
  });

  test('should match desktop layout', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Prendre une capture d'écran desktop
    await expect(page).toHaveScreenshot('homepage-desktop.png');
  });

  test('should match mobile menu open', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Ouvrir le menu mobile
    await page.click('button[aria-label="Toggle menu"]');
    await page.waitForTimeout(500);
    
    // Prendre une capture d'écran du menu ouvert
    await expect(page).toHaveScreenshot('mobile-menu-open.png');
  });

  test('should match chatbot open', async ({ page }) => {
    await page.goto('/');
    
    // Ouvrir le chatbot
    await page.click('button[aria-label="Ouvrir le chatbot"]');
    await page.waitForTimeout(500);
    
    // Prendre une capture d'écran du chatbot ouvert
    await expect(page).toHaveScreenshot('chatbot-open.png');
  });

  test('should match form validation errors', async ({ page }) => {
    await page.goto('/contact');
    
    // Soumettre le formulaire vide
    await page.click('button[type="submit"]');
    await page.waitForTimeout(500);
    
    // Prendre une capture d'écran des erreurs de validation
    await expect(page).toHaveScreenshot('form-validation-errors.png');
  });

  test('should match loading states', async ({ page }) => {
    await page.goto('/');
    
    // Attendre que les animations se terminent
    await page.waitForTimeout(1000);
    
    // Prendre une capture d'écran des états de chargement
    await expect(page).toHaveScreenshot('loading-states.png');
  });

  test('should match hover states', async ({ page }) => {
    await page.goto('/');
    
    // Hover sur les boutons
    const buttons = page.locator('button, a').filter({ hasText: /Découvrir|Voir|Démarrer/ });
    if (await buttons.count() > 0) {
      await buttons.first().hover();
    }
    await page.waitForTimeout(500);
    
    // Prendre une capture d'écran des états de survol
    await expect(page).toHaveScreenshot('hover-states.png');
  });

  test('should match focus states', async ({ page }) => {
    await page.goto('/');
    
    // Focus sur les éléments interactifs
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    
    // Prendre une capture d'écran des états de focus
    await expect(page).toHaveScreenshot('focus-states.png');
  });

  test('should match dark mode', async ({ page }) => {
    await page.goto('/');
    
    // Activer le mode sombre
    await page.evaluate(() => {
      document.documentElement.classList.add('dark');
    });
    await page.waitForTimeout(500);
    
    // Prendre une capture d'écran du mode sombre
    await expect(page).toHaveScreenshot('dark-mode.png');
  });

  test('should match high contrast mode', async ({ page }) => {
    await page.goto('/');
    
    // Activer le mode contraste élevé
    await page.evaluate(() => {
      document.documentElement.style.filter = 'contrast(150%)';
    });
    await page.waitForTimeout(500);
    
    // Prendre une capture d'écran du mode contraste élevé
    await expect(page).toHaveScreenshot('high-contrast-mode.png');
  });

  test('should match reduced motion mode', async ({ page }) => {
    await page.goto('/');
    
    // Activer le mode mouvement réduit
    await page.evaluate(() => {
      document.documentElement.style.setProperty('--motion-reduce', '1');
    });
    await page.waitForTimeout(500);
    
    // Prendre une capture d'écran du mode mouvement réduit
    await expect(page).toHaveScreenshot('reduced-motion-mode.png');
  });
});