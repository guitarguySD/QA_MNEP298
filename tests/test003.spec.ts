import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/mnpaymentapplication');
  const heading = page.getByRole('heading', { name: 'MN Court Payment Center' });

  
  await expect(heading).toContainText('MN Court Payment Center');
  await expect(page.locator('body')).toContainText('Online Payment System');
});