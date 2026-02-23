import { test, expect } from '@playwright/test';

test('should display Search Results heading after searching by citation number', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Citation Number' }).check();
  await page.getByRole('textbox', { name: 'Enter Citation Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Citation Number' }).fill('5520251245');
  await page.getByRole('button', { name: 'Find cases by citation number' }).click();
  await expect(page.locator('h1')).toContainText('Case Details');
});