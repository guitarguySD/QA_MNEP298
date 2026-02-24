import { test, expect } from '@playwright/test';

test('should display insurance proof warning message for no insurance charge', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).fill('25jv253');
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await page.getByRole('row', { name: 'Name Not Displayed Name Not Displayed, Amount owed: $250.00 $' }).getByLabel('Name Not Displayed').check();
  await page.getByRole('button', { name: 'Continue with selected party' }).click();
  await expect(page.getByLabel('Make Payment')).toMatchAriaSnapshot(`
    - listitem:
      - text: If no other offense on this case or citation requires a
      - strong: mandatory court appearance
      - text: ", and you can provide proof of insurance, do not pay this citation at this time."
      - link "Contact the Court Payment Center (opens in new window)":
        - /url: https://mncourts.gov/Pay-a-Fine.aspx
        - text: ""
      - text: for instructions and information for paying other offenses on the citation.
    `);
});