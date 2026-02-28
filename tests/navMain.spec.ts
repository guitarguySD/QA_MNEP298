import { test, expect } from '@playwright/test';

test('Main page displays navigation elements and footer text', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/mnpaymentapplication');
  await expect(page.getByRole('link', { name: 'Minnesota Judicial Branch' })).toBeVisible();
  await expect(page.getByText('MN Court Payment CenterOnline')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Find your case or citation' })).toBeVisible();
  await expect(page.locator('#desc-CaseNumber')).toBeVisible();
  await expect(page.getByRole('contentinfo')).toContainText('If you have questions about this payment or need assistance, you may contact the MN Court Payment Center Monday - Friday from 8:00 a.m. to 4:15 p.m. Central Time by calling 651-281-3219 or 1-800-657-3611. Thank you for using the MN Court Payment Center Online Payment System.');
});