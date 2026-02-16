import { test, expect } from '@playwright/test';

test('should display MN Court Payment Center heading and Online Payment System text', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/mnpaymentapplication');
  const heading = page.getByRole('heading', { name: 'MN Court Payment Center' });

  
  await expect(heading).toContainText('MN Court Payment Center');
  await expect(page.locator('body')).toContainText('Online Payment System');
});