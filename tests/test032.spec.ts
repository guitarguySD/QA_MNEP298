import { test, expect } from '@playwright/test';

test('should preserve payment amount when clicking on case details', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.locator('#CaseNumber').click();
  await page.locator('#CaseNumber').fill('25jv253');
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await page.getByRole('row', { name: 'Name Not Available Name Not Available, Amount owed: $55.00 $' }).getByLabel('Name Not Available').check();
  await page.getByRole('button', { name: 'Continue with selected party' }).click();
  await page.getByRole('spinbutton', { name: 'Make a Payment of' }).click();
  await page.getByRole('spinbutton', { name: 'Make a Payment of' }).fill('1');
  await page.locator('div').filter({ hasText: 'Case Details Case Number: 25-' }).nth(2).click();
  await expect(page.getByRole('spinbutton', { name: 'Make a Payment of' })).toHaveValue('1.00');
  await page.getByRole('button', { name: 'Pay now for this case' }).click();
});