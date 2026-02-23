import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).fill('25jv253');
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await page.getByRole('link', { name: 'Search Again' }).click();
  await page.getByRole('radio', { name: 'Driver\'s License Number' }).check();
  await expect(page.locator('#driversLicenseForm')).toContainText('Enter Driver\'s License Number');
});