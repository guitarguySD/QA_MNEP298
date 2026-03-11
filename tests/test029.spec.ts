/*import { test, expect } from '@playwright/test';

test('should accept payment amount and navigate to payment page', async ({ page }) => {
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
*/
import { test, expect } from '@playwright/test';

test('should accept payment amount and navigate to payment page', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).fill('25jv253');
  await page.getByRole('button', { name: 'Find' }).click();
  await page.getByRole('row', { name: 'Name Not Displayed Name Not Displayed, Amount owed: $250.00 $' }).getByLabel('Name Not Displayed').check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('spinbutton', { name: 'Make a Payment of' }).click();
  await page.getByRole('spinbutton', { name: 'Make a Payment of' }).click();
  await page.getByRole('spinbutton', { name: 'Make a Payment of' }).click();
  await page.getByRole('spinbutton', { name: 'Make a Payment of' }).fill('10');
  await page.getByRole('button', { name: 'Pay now' }).click();
  await page.goto('https://staging.heartlandpaymentservices.net/webpayments/MNCourts_Test/token/90650627-8c3b-435b-a0f3-52bbc2001a79');
  await expect(page).toHaveURL(/https:\/\/staging\.heartlandpaymentservices\.net\/webpayments\/MNCourts_Test*/, { timeout: 20000 });
});


test('should accept payment amount and navigate to payment page 2', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill('25jv253');
  await page.getByRole('button', { name: 'Find' }).click();
  await page.getByRole('row', { name: 'Name Not Displayed Name Not Displayed, Amount owed: $250.00 $' }).getByLabel('Name Not Displayed').check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('spinbutton', { name: 'Make a Payment of' }).click();
  await page.getByRole('spinbutton', { name: 'Make a Payment of' }).click();
  await page.getByRole('spinbutton', { name: 'Make a Payment of' }).click();
  await page.getByRole('spinbutton', { name: 'Make a Payment of' }).fill('10');
  await page.getByRole('button', { name: 'Pay now' }).click();
  await page.goto('https://staging.heartlandpaymentservices.net/webpayments/MNCourts_Test/token/90650627-8c3b-435b-a0f3-52bbc2001a79');
  await expect(page).toHaveURL(/https:\/\/staging\.heartlandpaymentservices\.net\/webpayments\/MNCourts_Test*/, { timeout: 20000 });
});
