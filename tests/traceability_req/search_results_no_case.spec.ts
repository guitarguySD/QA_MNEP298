import { test, expect } from '@playwright/test';

test('Case not found message displayed correctly', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill('25vb2519');
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await expect(page.locator('#main-content')).toMatchAriaSnapshot(`
    - status:
      - heading "No cases match your search." [level=2]
      - paragraph: The case you are searching for may be unavailable or may not exist.
    `);
});