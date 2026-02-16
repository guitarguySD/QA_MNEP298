import { test, expect } from '@playwright/test';

test('should display Case Details heading after selecting a party', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication');
  await page.locator('#CaseNumber').click();
  await page.locator('#CaseNumber').fill('25JV253');
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await page.getByRole('button', { name: 'Continue with selected party' }).click();
  await expect(page.locator('h1')).toContainText('Case Details');
});