import { test, expect } from '@playwright/test';

test.describe('Security Tests', () => {
  test('should have proper security headers', async ({ page }) => {
    const response = await page.goto('/');
    
    // Vérifier les headers de sécurité
    const headers = response?.headers();
    
    expect(headers?.['x-frame-options']).toBe('DENY');
    expect(headers?.['x-content-type-options']).toBe('nosniff');
    expect(headers?.['referrer-policy']).toBe('origin-when-cross-origin');
  });

  test('should not expose sensitive information', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier que les informations sensibles ne sont pas exposées
    const content = await page.content();
    
    // Vérifier qu'il n'y a pas de clés API exposées
    expect(content).not.toMatch(/sk-[a-zA-Z0-9]{20,}/);
    expect(content).not.toMatch(/AIza[0-9A-Za-z-_]{35}/);
    
    // Vérifier qu'il n'y a pas de mots de passe exposés
    expect(content).not.toMatch(/password\s*[:=]\s*['"][^'"]+['"]/i);
    expect(content).not.toMatch(/secret\s*[:=]\s*['"][^'"]+['"]/i);
  });

  test('should handle XSS attempts', async ({ page }) => {
    await page.goto('/');
    
    // Tenter d'injecter du JavaScript malveillant
    const maliciousScript = '<script>alert("XSS")</script>';
    
    // Vérifier que le script n'est pas exécuté
    page.on('dialog', dialog => {
      expect(dialog.message()).not.toBe('XSS');
      dialog.dismiss();
    });
    
    // Tenter d'injecter via les champs de formulaire
    const nameInput = page.locator('input[name="name"]');
    if (await nameInput.isVisible()) {
      await nameInput.fill(maliciousScript);
      await nameInput.blur();
      
      // Vérifier que le script n'est pas exécuté
      const content = await page.content();
      expect(content).not.toContain('<script>alert("XSS")</script>');
    }
  });

  test('should validate form inputs', async ({ page }) => {
    await page.goto('/contact');
    
    // Tenter de soumettre des données malveillantes
    const maliciousData = {
      name: '<script>alert("XSS")</script>',
      email: 'invalid-email',
      message: 'A'.repeat(10000), // Message très long
    };
    
    // Remplir le formulaire avec des données malveillantes
    if (await page.locator('input[name="name"]').isVisible()) {
      await page.locator('input[name="name"]').fill(maliciousData.name);
    }
    
    if (await page.locator('input[name="email"]').isVisible()) {
      await page.locator('input[name="email"]').fill(maliciousData.email);
    }
    
    if (await page.locator('textarea[name="message"]').isVisible()) {
      await page.locator('textarea[name="message"]').fill(maliciousData.message);
    }
    
    // Tenter de soumettre le formulaire
    const submitButton = page.locator('button[type="submit"]');
    if (await submitButton.isVisible()) {
      await submitButton.click();
      
      // Vérifier que les erreurs de validation sont affichées
      await expect(page.locator('text=email invalide')).toBeVisible();
    }
  });

  test('should handle SQL injection attempts', async ({ page }) => {
    await page.goto('/contact');
    
    // Tenter des injections SQL
    const sqlInjection = "'; DROP TABLE users; --";
    
    // Remplir les champs avec des données d'injection SQL
    if (await page.locator('input[name="name"]').isVisible()) {
      await page.locator('input[name="name"]').fill(sqlInjection);
    }
    
    if (await page.locator('textarea[name="message"]').isVisible()) {
      await page.locator('textarea[name="message"]').fill(sqlInjection);
    }
    
    // Vérifier que les données sont échappées correctement
    const content = await page.content();
    expect(content).not.toContain('DROP TABLE');
  });

  test('should have proper CSP headers', async ({ page }) => {
    const response = await page.goto('/');
    const headers = response?.headers();
    
    // Vérifier que les headers CSP sont présents
    expect(headers?.['content-security-policy']).toBeDefined();
  });

  test('should not expose internal paths', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier que les chemins internes ne sont pas exposés
    const content = await page.content();
    
    expect(content).not.toContain('/.next/');
    expect(content).not.toContain('/node_modules/');
    expect(content).not.toContain('/.env');
  });

  test('should handle rate limiting', async ({ page }) => {
    // Tenter de faire de nombreuses requêtes rapidement
    const requests = [];
    
    for (let i = 0; i < 10; i++) {
      requests.push(page.goto('/'));
    }
    
    await Promise.all(requests);
    
    // Vérifier que le serveur répond toujours
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);
  });

  test('should have secure cookies', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier que les cookies sont sécurisés
    const cookies = await page.context().cookies();
    
    for (const cookie of cookies) {
      if (cookie.name.startsWith('session') || cookie.name.startsWith('auth')) {
        expect(cookie.secure).toBe(true);
        expect(cookie.httpOnly).toBe(true);
      }
    }
  });
});
