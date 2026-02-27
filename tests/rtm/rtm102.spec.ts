import { test, expect } from '@playwright/test';

test('Search by citation number Adult Criminal', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Citation Number' }).check();
  await page.getByRole('textbox', { name: 'Citation Number' }).click();
  await page.getByRole('textbox', { name: 'Citation Number' }).fill('51920250823');
  await page.getByRole('button', { name: 'Find cases by citation number' }).click();
  await expect(page.locator('#main-content')).toContainText('51920250823');
  await expect(page.locator('#main-content')).toContainText('Crim/Traf Non-Mand');
});


test('Search by citation number Juvenile Criminal', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Citation Number' }).check();
  await page.getByRole('textbox', { name: 'Citation Number' }).click();
  await page.getByRole('textbox', { name: 'Citation Number' }).fill('061820251032');
  await page.getByRole('button', { name: 'Find cases by citation number' }).click();
  await expect(page.locator('#main-content')).toContainText('061820251032');
  await expect(page.locator('#main-content')).toContainText('Juvenile Petty Offense');
  await expect(page.locator('#main-content')).toContainText('Child (Juvenile)');
});