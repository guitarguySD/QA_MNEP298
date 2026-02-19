import { test, expect } from '@playwright/test';

test('should display Case Details heading after selecting a party', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).fill('25jv253');
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await page.getByRole('row', { name: 'Name Not Displayed Name Not Displayed, Amount owed: $250.00 $' }).getByLabel('Name Not Displayed').check();
  await page.getByRole('radio', { name: 'Goodhue County Health and' }).check();
  await page.getByRole('button', { name: 'Continue with selected party' }).click();
  await expect(page.locator('h1')).toContainText('Case Details');
});