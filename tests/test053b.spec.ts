import { test, expect } from '@playwright/test';

test('should display link to view other cases after searching by case number', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/mnpaymentapplication');
  await page.locator('#CaseNumber').click();
  await page.locator('#CaseNumber').fill('40-VB-25-3');
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  
const link = page.locator(
  'a[href*="ViewOtherCases"]'
);

  await expect(link).toHaveCount(1);
  await expect(link).toHaveText('View other payable cases or citations');
});
