import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/mnpaymentapplication');
  await expect(page.getByRole('contentinfo')).toContainText('MN Court Payment Center Online Payment System');
});