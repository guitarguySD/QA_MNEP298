import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await expect(page.getByLabel('Find cases by case number')).toContainText('Find');
});