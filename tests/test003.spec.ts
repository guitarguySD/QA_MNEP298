import { test, expect } from '@playwright/test';

test('should display MN Court Payment Center heading and Online Payment System text', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await expect(page.getByRole('banner')).toContainText('MN Court Payment CenterOnline Payment System');
  await expect(page.getByRole('banner')).toContainText('MN Court Payment CenterOnline Payment System 0');
});