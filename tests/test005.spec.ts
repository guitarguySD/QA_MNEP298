import { test, expect } from '@playwright/test';

test('should display Enter Case Number text in case number form', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await expect(page.locator('#caseNumberForm')).toContainText('Enter Case Number');
});