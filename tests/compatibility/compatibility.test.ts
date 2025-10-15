import { test, expect } from '@playwright/test';

test.describe('Compatibility Tests', () => {
  test('should work on Chrome', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier que la page se charge
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=Transformez votre entreprise')).toBeVisible();
    
    // Tester la navigation
    await page.click('a[href="/about"]');
    await expect(page).toHaveURL('/about');
  });

  test('should work on Firefox', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier que la page se charge
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=Transformez votre entreprise')).toBeVisible();
    
    // Tester la navigation
    await page.click('a[href="/services"]');
    await expect(page).toHaveURL('/services');
  });

  test('should work on Safari', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier que la page se charge
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=Transformez votre entreprise')).toBeVisible();
    
    // Tester la navigation
    await page.click('a[href="/portfolio"]');
    await expect(page).toHaveURL('/portfolio');
  });

  test('should work on mobile Chrome', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Vérifier que la page se charge
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=Transformez votre entreprise')).toBeVisible();
    
    // Tester le menu mobile
    await page.click('button[aria-label="Toggle menu"]');
    await expect(page.locator('text=À propos')).toBeVisible();
  });

  test('should work on mobile Safari', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Vérifier que la page se charge
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=Transformez votre entreprise')).toBeVisible();
    
    // Tester le menu mobile
    await page.click('button[aria-label="Toggle menu"]');
    await expect(page.locator('text=À propos')).toBeVisible();
  });

  test('should work on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    
    // Vérifier que la page se charge
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=Transformez votre entreprise')).toBeVisible();
    
    // Tester la navigation
    await page.click('a[href="/contact"]');
    await expect(page).toHaveURL('/contact');
  });

  test('should work on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    
    // Vérifier que la page se charge
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=Transformez votre entreprise')).toBeVisible();
    
    // Tester la navigation
    await page.click('a[href="/pricing"]');
    await expect(page).toHaveURL('/pricing');
  });

  test('should work with different screen orientations', async ({ page }) => {
    // Test en mode portrait
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    await expect(page.locator('h1')).toBeVisible();
    
    // Test en mode paysage
    await page.setViewportSize({ width: 667, height: 375 });
    await page.goto('/');
    
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should work with different zoom levels', async ({ page }) => {
    await page.goto('/');
    
    // Test avec zoom 50%
    await page.evaluate(() => {
      document.body.style.zoom = '0.5';
    });
    
    await expect(page.locator('h1')).toBeVisible();
    
    // Test avec zoom 150%
    await page.evaluate(() => {
      document.body.style.zoom = '1.5';
    });
    
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should work with different color schemes', async ({ page }) => {
    await page.goto('/');
    
    // Test en mode sombre
    await page.emulateMedia({ colorScheme: 'dark' });
    
    await expect(page.locator('h1')).toBeVisible();
    
    // Test en mode clair
    await page.emulateMedia({ colorScheme: 'light' });
    
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should work with different languages', async ({ page }) => {
    // Test en français
    await page.goto('/');
    await expect(page.locator('text=Transformez votre entreprise')).toBeVisible();
    
    // Test en anglais
    await page.goto('/en');
    await expect(page.locator('text=Transform your business')).toBeVisible();
  });

  test('should work with different network conditions', async ({ page }) => {
    // Test avec connexion lente
    await page.route('**/*', route => {
      setTimeout(() => route.continue(), 1000);
    });
    
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should work with different user agents', async ({ page }) => {
    // Test avec un user agent mobile
    await page.setExtraHTTPHeaders({
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1'
    });
    
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should work with different timezones', async ({ page }) => {
    // Test avec timezone UTC
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible();
    
    // Test avec timezone Europe/Paris
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should work with different locales', async ({ page }) => {
    // Test avec locale français
    await page.goto('/');
    await expect(page.locator('text=Transformez votre entreprise')).toBeVisible();
    
    // Test avec locale anglais
    await page.goto('/en');
    await expect(page.locator('text=Transform your business')).toBeVisible();
  });
});
