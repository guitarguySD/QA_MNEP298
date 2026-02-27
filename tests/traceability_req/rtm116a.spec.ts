import { test, expect } from '@playwright/test';

test('Payor does not owe money', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/mnpaymentapplication');
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill('40-VB-25-3');
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await expect(page.locator('#main-content')).toContainText('$0.00');
  await expect(page.getByRole('heading', { name: 'Unable to Make Payment' })).toBeVisible();
  await expect(page.locator('#main-content')).toContainText('40-VB-25-3');
  await expect(page.getByLabel('Unable to Make Payment')).toContainText('This citation is not able to be paid using this system because there is no amount due on this citation.');
});