import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.locator('#CaseNumber').click();
  await page.locator('#CaseNumber').fill('25jv253');
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await page.getByRole('row', { name: 'Name Not Available Name Not Available, Amount owed: $250.00 $' }).getByLabel('Name Not Available').check();
  await page.getByRole('button', { name: 'Continue with selected party' }).click();
  await page.getByRole('button', { name: 'Pay now for this case' }).click();
  let locator = page.getByRole('heading', {name: 'Goodhue County'});
  let textAlign = await locator.evaluate(el => window.getComputedStyle(el).textAlign);
  await expect(textAlign).toBe('left');
});

