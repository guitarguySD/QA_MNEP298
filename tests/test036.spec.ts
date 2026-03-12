import { test, expect } from '@playwright/test';
/*
test('Payment form disclosure on leaving Minnesota website 2', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.locator('#CaseNumber').click();
  await page.locator('#CaseNumber').fill('25jv253');
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await page.locator('tr').filter({ hasText: '$250.00' }).getByRole('radio').check();
  await page.getByRole('button', { name: 'Continue with selected party' }).click();
  await expect(page.locator('#paymentForm')).toMatchAriaSnapshot(`
    - text: Make a Payment of
    - spinbutton "Make a Payment of"
    - alert
    - text: /\\$\\d+\\.\\d+ Minimum/
    - paragraph: "Please Note: To make a payment, you are leaving the Minnesota Judicial Branch website."
    - link "Search Again"
    - button "Pay now for this case"
    `);
});
*/

test('Payment form disclosure on leaving Minnesota website', async ({ page }) => {
  const caseNumber = '25jv253';

  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find' }).click();
  await page.getByRole('row', { name: 'Name Not Displayed Name Not Displayed, Amount owed: $250.00 $' }).getByLabel('Name Not Displayed').check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.locator('#paymentForm')).toContainText('Please Note: To make a payment, you are leaving the Minnesota Judicial Branch website.');
  await expect(page.locator('#paymentForm')).toMatchAriaSnapshot(`
    - text: Make a Payment of
    - spinbutton "Make a Payment of"
    - alert
    - text: /\\$\\d+\\.\\d+ Minimum/
    - paragraph:
      - strong: "Please Note:"
      - text: To make a payment, you are leaving the Minnesota Judicial Branch website.
    - link "Search Again":
      - /url: /MNPaymentApplication/
    - button "Pay Now"
    `);
});
