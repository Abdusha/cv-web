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

  test('Image and core content appear properly', async ({ page }) => {
    await page.goto('/');

    // Check profile image
    const profileImage = page.getByAltText('Abdurrahman Shaleh');
    await expect(profileImage).toBeVisible();
    
    // Ensure image is actually loaded by checking its natural dimensions
    await expect.poll(async () => {
      return await profileImage.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0);
    }, {
      message: 'Profile image failed to load properly',
      timeout: 5000,
    }).toBeTruthy();

    // Check core text content
    await expect(page.getByText('Abdurrahman Shaleh').first()).toBeVisible();
    await expect(page.getByText('QA Specialist')).toBeVisible();
    await expect(page.getByText('Expertise & Skills')).toBeVisible();
    await expect(page.getByText('Professional Experience')).toBeVisible();
    await expect(page.getByText('Education')).toBeVisible();
  });

  test('Dark and Light mode toggle works properly', async ({ page }) => {
    await page.goto('/');

    // Next.js uses the 'dark' class on the HTML element for dark mode
    const htmlElement = page.locator('html');

    // Wait for client-side hydration (theme button should become visible)
    const toggleButton = page.getByRole('button', { name: /toggle dark mode/i });
    await expect(toggleButton).toBeVisible();

    // Get the initial dark mode state
    const isInitiallyDark = await htmlElement.evaluate((el) => el.classList.contains('dark'));

    // Toggle to opposite state
    await toggleButton.click();
    if (isInitiallyDark) {
      await expect(htmlElement).not.toHaveClass(/dark/);
    } else {
      await expect(htmlElement).toHaveClass(/dark/);
    }

    // Toggle back to original state
    await toggleButton.click();
    if (isInitiallyDark) {
      await expect(htmlElement).toHaveClass(/dark/);
    } else {
      await expect(htmlElement).not.toHaveClass(/dark/);
    }
  });
});
