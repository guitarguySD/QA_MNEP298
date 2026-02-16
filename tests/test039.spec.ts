import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.locator('#CaseNumber').click();
  await expect(page.getByRole('link', { name: 'Help (opens in new window)' })).toBeVisible();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Help (opens in new window)' }).click();
  const page1 = await page1Promise;
  await expect(page1).toHaveURL(/.*[Hh]elp.*/);
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Disclaimer (opens in new' }).click();
  const page2 = await page2Promise;
  await expect(page2).toHaveURL(/.*[Dd]isclaimer.*/);
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Privacy Policy (opens in new' }).click();
  const page3 = await page3Promise;
  await expect(page3).toHaveURL(/.*[Pp]rivacy.*/);
  const page4Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Terms of Use (opens in new' }).click();
  const page4 = await page4Promise;
  await expect(page4).toHaveURL(/.*[Tt]erms.*/);
  const page5Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Site Map (opens in new window)' }).click();
  const page5 = await page5Promise;
  await expect(page5).toHaveURL(/.*[Ss]ite[Mm]ap.*/);
});