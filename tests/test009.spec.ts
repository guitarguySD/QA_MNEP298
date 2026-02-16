import { test, expect } from '@playwright/test';

test('should display Find your case or citation heading', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await expect(page.locator('h1')).toContainText('Find your case or citation');
});