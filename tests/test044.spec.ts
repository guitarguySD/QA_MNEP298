import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.locator('#CaseNumber').click();
  await page.locator('#CaseNumber').fill('25jv254');
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await expect(page.getByText('You have other payable')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Click to view' })).toBeVisible();
  await page.getByRole('link', { name: 'Click to view' }).click();

  await expect(page).toHaveURL(/.*[Cc]aseSelection.*/);
});