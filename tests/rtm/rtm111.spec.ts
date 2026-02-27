import { test, expect } from '@playwright/test';

test('Unable to make payment Active warrant Adult Criminal', async ({ page }) => {
  const caseNumber = '25CR2513';
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await expect(page.locator('#active-warrant-heading')).toContainText('Unable to Make Payment - Active Warrant');
});

test('Unable to make payment Active warrant Non-criminal', async ({ page }) => {
  const caseNumber = '70CV2550';
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await page.getByRole('radio', { name: 'Warrant, Active' }).check();
  await page.getByRole('button', { name: 'Continue with selected party' }).click();
  await expect(page.locator('#active-warrant-heading')).toContainText('Unable to Make Payment - Active Warrant');
});

test('Unable to make payment Active warrant Single-case', async ({ page }) => {
  const caseNumber = '72VB2510';
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await expect(page.locator('#active-warrant-heading')).toContainText('Unable to Make Payment - Active Warrant');
});

test('Unable to make payment Active warrant Mutli-case', async ({ page }) => {
  const caseNumber = '72VB2511';
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await expect(page.locator('#active-warrant-heading')).toContainText('Unable to Make Payment - Active Warrant');
});

test('Unable to make payment Active warrant Multi-case 2', async ({ page }) => {
  const caseNumber = '72VB2512';
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await expect(page.locator('#active-warrant-heading')).toContainText('Unable to Make Payment - Active Warrant');
});
