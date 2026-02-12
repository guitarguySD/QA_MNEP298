import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/mnpaymentapplication');
  await page.getByRole('radio', { name: 'Citation Number' }).check();
  await page.locator('#CitationNumber').click();
  await page.locator('#CitationNumber').fill('32820250810');
  await page.getByRole('button', { name: 'Find cases by citation number' }).click();
  await page.getByRole('radio', { name: 'testing, defendent' }).check();
  await page.getByRole('button', { name: 'Continue with selected party' }).click();
  const paymentSection = page.getByLabel('Make Payment');

  await expect(paymentSection).not.toContainText('Â§');
  await expect(paymentSection).toContainText('§');  
});

