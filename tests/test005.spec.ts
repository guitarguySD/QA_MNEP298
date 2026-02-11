import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/mnpaymentapplication');
  await page.getByRole('radio', { name: 'Citation Number' }).check();
  await expect(page.locator('#citationNumberForm')).toContainText('Enter Citation Number');
});