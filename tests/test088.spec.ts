import { test, expect } from '@playwright/test';

test('Criminal Case Information displayed', async ({ page }) => {
  const caseNumber = '70vb2539';
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find' }).click();
  await expect(page.getByText('Case Number:')).toBeVisible();
  await expect(page.getByText('Citation Number:')).toBeVisible();
  await expect(page.getByText('Case Type:')).toBeVisible();
  await expect(page.getByText('Case Location:')).toBeVisible();
  await expect(page.getByText('Case Status:')).toBeVisible();
  await expect(page.getByText('Date Filed:')).toBeVisible();
  await expect(page.getByText('Offenses:')).toBeVisible();
  await expect(page.getByText('05/19/2025 - Game and Fish-')).toBeVisible();
  await expect(page.getByText('Citation Date:')).toBeVisible();
});