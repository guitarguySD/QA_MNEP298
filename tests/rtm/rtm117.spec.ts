import { test, expect } from '@playwright/test';

test('No balance owed on case', async ({ page }) => {
  const caseNumber = '11-VB-26-1';
  
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find' }).click();
  await expect(page.getByLabel('Unable to Make Payment')).toContainText('This citation is not able to be paid using this system because there is no amount due on this citation.');
  await expect(page.locator('#case-not-found-heading')).toContainText('Unable to Make Payment');
  await page.getByRole('link', { name: 'View other payable citations' }).click();
});