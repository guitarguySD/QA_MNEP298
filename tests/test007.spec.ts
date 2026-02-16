import { test, expect } from '@playwright/test';

test('should display Enter Driver\'s License Number text when driver\'s license option is selected', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Driver\'s License Number' }).check();
  await expect(page.locator('#driversLicenseForm')).toContainText('Enter Driver\'s License Number');
});