import { test, expect } from '@playwright/test';

test.describe('CV Website QA Tests', () => {
  test('All visible anchor links have valid hrefs', async ({ page }) => {
    await page.goto('/');

    const links = page.locator('a');
    const count = await links.count();

    for (let i = 0; i < count; i++) {
      const href = await links.nth(i).getAttribute('href');
      expect(href).not.toBeNull();
      expect(href?.length).toBeGreaterThan(0);
      
      // Basic check to ensure href isn't just '#'
      if (href === '#') {
        throw new Error(`Link at index ${i} has an empty anchor tag '#'`);
      }
    }
  });
});
