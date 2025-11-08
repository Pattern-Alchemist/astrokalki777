import { test, expect } from '@playwright/test';

test('marketing page loads', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /AstroKalki/ })).toBeVisible();
});
