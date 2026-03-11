import { test, expect } from '@playwright/test';

test('should not show both Case Details and Not Found error for different case number', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/mnpaymentapplication');
  await page.locator('#CaseNumber').click();
  await page.locator('#CaseNumber').fill('25-JV-25-4');
  await page.getByRole('button', { name: 'Find' }).click();
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/Case/CaseDetail?caseId=1629859391&payorId=1621404209');

  const bugState = page.locator(
    'main:has(h1:has-text("Case Details")):has(h2#case-not-found-heading:has-text("Case Not Found"))'
  );

  await expect(bugState, 'BUG: page shows Case Details with "Case Not Found" heading').toHaveCount(0);
});