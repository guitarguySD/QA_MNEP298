import { test, expect } from '@playwright/test';

test('should display party selection instructions when multiple parties exist', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Citation Number' }).check();
  await page.locator('#CitationNumber').click();
  await page.locator('#CitationNumber').fill('32820250810');
  await page.getByRole('button', { name: 'Find cases by citation number' }).click();
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/Case/PartySelection');
  await expect(page.locator('#main-content')).toContainText('The case you selected has multiple parties. Please choose the party related to your case. If unsure, refer to your court notice.');
});