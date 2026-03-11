import { test, expect } from '@playwright/test';

test('Alt Text on HPS header logo', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('textbox', { name: 'Enter Case Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).fill('25jv253');
  await page.getByRole('button', { name: 'Find' }).click();
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/Case/PartySelection');
  await page.getByRole('row', { name: 'Name Not Displayed Name Not Displayed, Amount owed: $55.00 $' }).getByLabel('Name Not Displayed').check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('spinbutton', { name: 'Make a Payment of' }).click();
  await page.getByRole('spinbutton', { name: 'Make a Payment of' }).click();
  await page.getByRole('spinbutton', { name: 'Make a Payment of' }).fill('1');
  await page.getByRole('button', { name: 'Pay now for this case' }).click();
  await page.goto('https://staging.heartlandpaymentservices.net/webpayments/MNCourts_Test/token/10938c83-31cb-41b4-a4e8-5a7b73618f86');
  await expect(page.getByRole('img', { name: 'Minnesota Judicial Branch' })).toBeVisible();
});