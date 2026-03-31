import { test, expect } from '@playwright/test';

test('should display Search Again button in case details', async ({ page }) => {
  const caseNumber = '43vb254';

  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.locator('#CaseNumber').click();
  await page.locator('#CaseNumber').fill(caseNumber);
  await page.getByRole('button', { name: 'Find' }).click();
  //await page.getByRole('radio', { name: 'Goodhue County Health and' }).check();
  //await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByLabel('Search Again')).toContainText('Search Again');
});