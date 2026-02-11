import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await expect(page.locator('#caseNumberForm')).toContainText('Enter Case Number');
});