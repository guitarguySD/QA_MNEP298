import { test, expect } from '@playwright/test';

test('should display Enter Citation Number text in citation number form', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Citation Number' }).check();
  await expect(page.locator('#citationNumberForm')).toContainText('Enter Citation Number');
});