import { test, expect } from '@playwright/test';

test('should display important notice with correct styling and color', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Citation Number' }).check();
  await page.locator('#CitationNumber').click();
  await page.locator('#CitationNumber').fill('32820250810');
  await page.getByRole('button', { name: 'Find cases by citation number' }).click();
  
  let locator = page.locator('p').filter({ hasText: 'If your name is not listed or' });
  await expect(locator).toHaveClass(/sn-note-important/);
  let checkColor = await locator.evaluate(el => window.getComputedStyle(el).color);
  await expect(checkColor).toBe('rgb(151, 108, 24)');
 });
