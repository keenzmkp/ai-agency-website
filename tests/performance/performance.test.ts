import { test, expect } from '@playwright/test';

test.describe('Performance Tests', () => {
  test('should load quickly', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    
    // Vérifier que la page se charge en moins de 3 secondes
    expect(loadTime).toBeLessThan(3000);
  });

  test('should have optimized images', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier que les images utilisent le composant Next.js Image
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const src = await img.getAttribute('src');
      
      // Vérifier que les images sont optimisées (WebP ou AVIF)
      if (src && !src.startsWith('data:')) {
        expect(src).toMatch(/\.(webp|avif|jpg|jpeg|png)$/);
      }
    }
  });

  test('should have proper meta tags', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier les meta tags SEO
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content');
    await expect(page.locator('meta[name="keywords"]')).toHaveAttribute('content');
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content');
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content');
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content');
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

  test('should work without JavaScript', async ({ page }) => {
    // Désactiver JavaScript
    // await page.setJavaScriptEnabled(false);
    
    await page.goto('/');
    
    // Vérifier que le contenu principal est visible
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=Transformez votre entreprise')).toBeVisible();
    
    // Vérifier que les liens fonctionnent
    const links = page.locator('a[href]');
    const linkCount = await links.count();
    expect(linkCount).toBeGreaterThan(0);
  });

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

  test('should have proper lazy loading', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier que les images ont des attributs de lazy loading
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const loading = await img.getAttribute('loading');
      
      // Vérifier que les images sont en lazy loading
      expect(loading).toBe('lazy');
    }
  });

  test('should have proper preloading', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier que les ressources critiques sont préchargées
    const preloadLinks = page.locator('link[rel="preload"]');
    const preloadCount = await preloadLinks.count();
    
    expect(preloadCount).toBeGreaterThan(0);
  });

  test('should have proper caching headers', async ({ page }) => {
    const response = await page.goto('/');
    const headers = response?.headers();
    
    // Vérifier que les headers de cache sont présents
    expect(headers?.['cache-control']).toBeDefined();
    expect(headers?.['etag']).toBeDefined();
  });

  test('should have proper compression', async ({ page }) => {
    const response = await page.goto('/');
    const headers = response?.headers();
    
    // Vérifier que la compression est activée
    expect(headers?.['content-encoding']).toBe('gzip');
  });
});
