import { test, expect } from '@playwright/test';

test('Help text on search page', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await expect(page.locator('#desc-CaseNumber')).toMatchAriaSnapshot(`
    - paragraph:
      - text: Select one of the following search options. For information on how to find your case or citation number, review the
      - link "Citation and Case Number page (opens in new window)":
        - /url: https://mncourts.gov/pay-a-fine/citation-and-case-number
        - text: ""
    `);
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Citation and Case Number page' }).click();
  const page1 = await page1Promise;
  await expect(page1).toHaveURL('https://mncourts.gov/pay-a-fine/citation-and-case-number');
  await page.getByRole('radio', { name: 'Citation Number' }).check();
  await expect(page.locator('#desc-CitationNumber')).toMatchAriaSnapshot(`
    - paragraph:
      - text: Select one of the following search options. For information on how to find your case or citation number, review the
      - link "Citation and Case Number page (opens in new window)":
        - /url: https://mncourts.gov/pay-a-fine/citation-and-case-number
        - text: ""
    `);
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Citation and Case Number page' }).click();
  const page2 = await page2Promise;
  await expect(page2).toHaveURL('https://mncourts.gov/pay-a-fine/citation-and-case-number');
  await page.getByRole('radio', { name: 'Driver\'s License Number' }).check();
  await expect(page.locator('#desc-DriversLicense')).toMatchAriaSnapshot(`- paragraph: Select one of the following search options. A driver's license search may not include all of your cases or citations. If you have questions or need more information, please contact the MN Court Payment Center (CPC).`);
});