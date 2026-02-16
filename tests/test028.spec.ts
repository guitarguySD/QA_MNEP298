import { test, expect } from '@playwright/test';

test('should display no charges available message for both parties', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.locator('#CaseNumber').click();
  await page.locator('#CaseNumber').fill('25FA2514');
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await page.getByRole('radio', { name: 'Testing, Petitioner' }).check();
  await page.getByRole('button', { name: 'Continue with selected party' }).click();
  await expect(page.locator('#main-content')).toContainText('No charges available');
  await page.getByRole('button', { name: 'Cancel and return to previous' }).click();
  await page.locator('#CaseNumber').click();
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.locator('#CaseNumber').click();
  await page.locator('#CaseNumber').fill('25FA2514');
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await page.getByRole('radio', { name: 'Testing, Respondent' }).check();
  await page.getByRole('button', { name: 'Continue with selected party' }).click();
  await expect(page.locator('#main-content')).toContainText('No charges available');
});