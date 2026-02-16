import { test, expect } from '@playwright/test';

test('should display Search Again button in party selection page', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.locator('#CaseNumber').click();
  await page.locator('#CaseNumber').fill('25jv253');
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await expect(page.getByLabel('Return to search page')).toContainText('Search Again');
});