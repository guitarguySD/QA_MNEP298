import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.locator('#CaseNumber').click();
  await page.locator('#CaseNumber').fill('43vb254');
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await expect(page.locator('#main-content')).toContainText('052820251307');
});