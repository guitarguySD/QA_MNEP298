import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Citation Number' }).check();
  await page.locator('#CitationNumber').click();
  await page.locator('#CitationNumber').fill('5520251245');
  await page.getByRole('button', { name: 'Find cases by citation number' }).click();
  await page.getByRole('link', { name: 'Click to view' }).click();
  await expect(page.locator('h1')).toContainText('Search Results');
});