import { test, expect } from '@playwright/test';

test('should display driver\'s license form after returning from case search', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Driver\'s License Number' }).check();
  await page.locator('#DriversLicenseNumber').click();
  await page.getByTitle('Enter your case number').click();
  await page.locator('#CaseNumber').click();
  await page.locator('#CaseNumber').click();
  await page.locator('#CaseNumber').fill('25jv253');
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/Case/PartySelection');
  await page.getByRole('button', { name: 'Return to search page' }).click();
  await page.getByRole('radio', { name: 'Driver\'s License Number' }).check();
  await expect(page.locator('#driversLicenseForm')).toContainText('Enter Driver\'s License Number');
});