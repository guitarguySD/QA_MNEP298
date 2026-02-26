import { test, expect } from '@playwright/test';

test('Search results contains multiple cases, goes to case selection page', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Citation Number' }).check();
  await page.getByRole('textbox', { name: 'Citation Number' }).click();
  await page.getByRole('textbox', { name: 'Citation Number' }).fill('32820250810');
  await page.getByRole('button', { name: 'Find cases by citation number' }).click();
  await expect(page.getByRole('heading')).toContainText('Select a Case');
  await expect(page.locator('#main-content')).toContainText('Your search returned multiple cases. Please select the case you would like to proceed with.');
  await expect(page).toHaveURL(/CaseSelection$/);
});