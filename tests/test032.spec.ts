/*import { test, expect } from '@playwright/test';

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
*/

import { test, expect } from '@playwright/test';

test('Editable dollar field', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).fill('25jv253');
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await page.getByRole('row', { name: 'Name Not Displayed Name Not Displayed, Amount owed: $55.00 $' }).getByLabel('Name Not Displayed').check();
  await page.getByRole('button', { name: 'Continue with selected party' }).click();
  await page.getByRole('spinbutton', { name: 'Make a Payment of' }).click();
  await page.getByRole('spinbutton', { name: 'Make a Payment of' }).click();
  await page.getByRole('spinbutton', { name: 'Make a Payment of' }).fill('1');
  await page.getByRole('button', { name: 'Pay now for this case' }).click();
  await page.goto('https://staging.heartlandpaymentservices.net/webpayments/MNCourts_Test/token/944ec3e0-6494-4454-9f7e-7fb6d7ed9450');
  await expect(page).toHaveURL(/https:\/\/staging\.heartlandpaymentservices\.net\/webpayments\/MNCourts_Test*/);
});


test('editable dollar field 2', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill('25jv253');
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await page.getByRole('row', { name: 'Name Not Displayed Name Not Displayed, Amount owed: $55.00 $' }).getByLabel('Name Not Displayed').check();
  await page.getByRole('button', { name: 'Continue with selected party' }).click();
  await page.getByRole('spinbutton', { name: 'Make a Payment of' }).click();
  await page.getByRole('spinbutton', { name: 'Make a Payment of' }).click();
  await page.getByRole('spinbutton', { name: 'Make a Payment of' }).fill('1');
  await page.getByRole('button', { name: 'Pay now for this case' }).click();
  await page.goto('https://staging.heartlandpaymentservices.net/webpayments/MNCourts_Test/token/944ec3e0-6494-4454-9f7e-7fb6d7ed9450');
  await expect(page).toHaveURL(/https:\/\/staging\.heartlandpaymentservices\.net\/webpayments\/MNCourts_Test*/);
});