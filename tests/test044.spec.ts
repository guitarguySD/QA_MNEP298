import { test, expect } from '@playwright/test';

test('should display link to view other payable cases', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.locator('#CaseNumber').click();
  await page.locator('#CaseNumber').fill('25jv254');
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await expect(page.getByText('You may have other payable')).toBeVisible();
 
  const link = page.locator(
  'a[href*="ViewOtherCases"]'
);

  await expect(link).toHaveCount(1);
  await expect(link).toHaveText('You may have other payable cases or citations. Click to view');
});