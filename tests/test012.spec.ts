import { test, expect } from '@playwright/test';

test('should display Find button for case number search', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  // await expect(page.getByLabel('Find')).toContainText('Find');
  await expect(page.getByRole('button')).toContainText('Find');
});