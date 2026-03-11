import { test, expect } from '@playwright/test';

test('Check for "Name Not Displayed"', async ({ page }) => {
  const caseNumber = '25jv253';
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find' }).click();
  await expect(page.locator('tbody')).toContainText('Name Not Displayed');
});