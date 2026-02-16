import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.locator('#CaseNumber').click();
  await page.locator('#CaseNumber').fill('25jv253');
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await page.getByRole('row', { name: 'Name Not Available Name Not Available, Amount owed: $250.00 $' }).getByLabel('Name Not Available').check();
  await page.getByRole('button', { name: 'Continue with selected party' }).click();
  await expect(page.locator('#paymentForm')).toMatchAriaSnapshot(`
    - text: Make a Payment of
    - spinbutton "Make a Payment of"
    - alert
    - text: /\\$\\d+\\.\\d+ Minimum/
    - paragraph: "Please Note: To make a payment, you are leaving the Minnesota Judicial Branch website."
    - button "Cancel and return to previous page"
    - button "Pay now for this case"
    `);
});