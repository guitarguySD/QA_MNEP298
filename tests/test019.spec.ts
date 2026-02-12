import { test, expect } from '@playwright/test';

test('should search by case number and verify case number and citation number', async ({ page }) => {
  const caseNumber = '43vb254';
  const citationNumber = '052820251307';
  
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.locator('#CaseNumber').click();
  await page.locator('#CaseNumber').fill(caseNumber);
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await expect(page.locator('#main-content')).toContainText(citationNumber);
  
  // Verify the case number matches (ignoring dashes)
  const caseNumberValue = page.locator('.sn-kv-pair:has-text("Case Number:") .sn-kv-pair__value');
  const caseNumberRegex = new RegExp(caseNumber.split('').join('-?'), 'i');
  await expect(caseNumberValue).toHaveText(caseNumberRegex);
});