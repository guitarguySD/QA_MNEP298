import { test, expect } from '@playwright/test';

test('Bulk search, case information is summarized', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Driver\'s License Number' }).check();
  await page.getByRole('textbox', { name: 'Driver\'s License Number' }).click();
  await page.getByRole('textbox', { name: 'Driver\'s License Number' }).fill('D519202508234');
  await page.getByRole('textbox', { name: 'Minnesota (MN)' }).click();
  await page.getByRole('option', { name: 'Minnesota (MN)' }).click();
  await page.getByRole('textbox', { name: 'Date of Birth' }).fill('1980-01-01');
  await page.getByRole('button', { name: 'Find' }).click();
  
  // Cases table
  const casesTable = page.locator('table[aria-label="Cases table"] tbody tr[role="row"]');
  await expect(casesTable).toHaveCount(2);

  // Payment Plans table
  const paymentPlansTable = page.locator('table[aria-label="Payment plans table"] tbody tr')
    .filter({ has: page.locator('th[scope="row"]') }); // only real rows
  await expect(paymentPlansTable).toHaveCount(2);

});

