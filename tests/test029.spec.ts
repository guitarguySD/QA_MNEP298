import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.locator('#CaseNumber').click();
  await page.locator('#CaseNumber').fill('25jv253');
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await page.getByRole('row', { name: 'Name Not Available Name Not Available, Amount owed: $55.00 $' }).getByLabel('Name Not Available').check();
  await page.getByRole('button', { name: 'Continue with selected party' }).click();
  await page.getByRole('spinbutton', { name: 'Make a Payment of' }).click();
  await page.getByRole('spinbutton', { name: 'Make a Payment of' }).fill('1');
  await page.getByRole('button', { name: 'Pay now for this case' }).click();
  await expect(page.locator('#main-content')).toContainText('$1.00');
  await expect(page.getByRole('button', { name: 'Make payment for all items in' })).toBeVisible();
  await page.getByRole('button', { name: 'Make payment for all items in' }).click();
});