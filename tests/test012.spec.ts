import { test, expect } from '@playwright/test';

test('should display Find button for case number search', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await expect(page.getByLabel('Find cases by case number')).toContainText('Find');
});