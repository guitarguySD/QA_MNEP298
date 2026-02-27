import { test, expect } from '@playwright/test';

test('Payment sent to collections Criminal', async ({ page }) => {
  const caseNumber = '43vb258';
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/Case/CaseDetail?caseId=1629859410&payorId=1621404228');
  
  await expect(page.locator('#referred-collection-heading')).toContainText('Unable to Make Payment – Referred to Collection');
  //await expect(page.locator('#make-payment-heading')).toContainText('Make Payment');
});
test('Payment sent to collections Non-criminal', async ({ page }) => {
  const caseNumber = '25FA2515';
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/Case/CaseDetail?caseId=1629859410&payorId=1621404228');
  
  await expect(page.locator('#referred-collection-heading')).toContainText('Unable to Make Payment – Referred to Collection');
  //await expect(page.locator('#make-payment-heading')).toContainText('Make Payment');
});
test('Payment sent to collections Single-case', async ({ page }) => {
  const caseNumber = '43VB259';
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/Case/CaseDetail?caseId=1629859410&payorId=1621404228');
  
  await expect(page.locator('#referred-collection-heading')).toContainText('Unable to Make Payment – Referred to Collection');
  //await expect(page.locator('#make-payment-heading')).toContainText('Make Payment');
});
test('Payment sent to collections Multi-case', async ({ page }) => {
  const caseNumber = '43VB2510';
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/Case/CaseDetail?caseId=1629859410&payorId=1621404228');
  
  await expect(page.locator('#referred-collection-heading')).toContainText('Unable to Make Payment – Referred to Collection');
  //await expect(page.locator('#make-payment-heading')).toContainText('Make Payment');
});

test('Payment sent to collections Multi-case 2', async ({ page }) => {
  const caseNumber = '43VB2511';
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/Case/CaseDetail?caseId=1629859410&payorId=1621404228');
  
  await expect(page.locator('#referred-collection-heading')).toContainText('Unable to Make Payment – Referred to Collection');
  //await expect(page.locator('#make-payment-heading')).toContainText('Make Payment');
});