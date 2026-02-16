import { test, expect } from '@playwright/test';

test('should navigate to party selection page after searching by case number', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.locator('#CaseNumber').click();
  await page.locator('#CaseNumber').fill('25jv253');
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await expect(page.locator('h1')).toContainText('Select a Party');
});