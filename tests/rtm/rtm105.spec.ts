import { test, expect } from '@playwright/test';

test('Search Adult Criminal', async ({ page }) => {
  const caseNumber = '70vb2539';

  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find' }).click();
  // await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/Case/CaseDetail?caseId=1629859308&payorId=1621404135');
  await expect(page.locator('#main-content')).toContainText('Party Name:');
  await expect(page.locator('#main-content')).toContainText('Party Connection:');
  await expect(page.locator('#main-content')).toContainText('Total Amount Due:');
});


test('Search Juvenile Criminal', async ({ page }) => {
  const caseNumber = '25JV254';

  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find' }).click();
  //await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/Case/CaseDetail?caseId=1629859308&payorId=1621404135');
  await expect(page.locator('#main-content')).toContainText('Party Name:');
  await expect(page.locator('#main-content')).toContainText('Party Connection:');
  await expect(page.locator('#main-content')).toContainText('Total Amount Due:');
});


test('Search Non-Criminal', async ({ page }) => {
  const caseNumber = '70CV2540';

  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find' }).click();
  //await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/Case/CaseDetail?caseId=1629859308&payorId=1621404135');
  await expect(page.locator('#main-content')).toContainText('Party Name:');
  await expect(page.locator('#main-content')).toContainText('Party Connection:');
  await expect(page.locator('#main-content')).toContainText('Total Amount Due:');
});


test('Search Inactive Connection', async ({ page }) => {
  const caseNumber = '70CV2547';

  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find' }).click();
  //await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/Case/CaseDetail?caseId=1629859308&payorId=1621404135');
  await expect(page.locator('#main-content')).toContainText('Party Name:');
  await expect(page.locator('#main-content')).toContainText('Party Connection:');
  await expect(page.locator('#main-content')).toContainText('Total Amount Due:');
});


test('Search Name Not Available', async ({ page }) => {
  const caseNumber = '70CV2548';

  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find' }).click();
  // await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/Case/CaseDetail?caseId=1629859308&payorId=1621404135');
  await expect(page.locator('#main-content')).toContainText('Party Name:');
  await expect(page.locator('#main-content')).toContainText('Party Connection:');
  await expect(page.locator('#main-content')).toContainText('Total Amount Due:');
});


test('Search Multiple Connections', async ({ page }) => {
  const caseNumber = '70CV2549';

  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find' }).click();
  // await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/Case/CaseDetail?caseId=1629859308&payorId=1621404135');
  await expect(page.locator('#main-content')).toContainText('Party Name:');
  await expect(page.locator('#main-content')).toContainText('Party Connection:');
  await expect(page.locator('#main-content')).toContainText('Total Amount Due:');
});


test('Search Multi-Case', async ({ page }) => {
  const caseNumber = '72VB258';

  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find' }).click();
  // await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/Case/CaseDetail?caseId=1629859308&payorId=1621404135');
  await expect(page.locator('#main-content')).toContainText('Party Name:');
  await expect(page.locator('#main-content')).toContainText('Party Connection:');
  await expect(page.locator('#main-content')).toContainText('Total Amount Due:');
});

test('Search Multi-Case 2', async ({ page }) => {
  const caseNumber = '72VB259';

  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find' }).click();
  // await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/Case/CaseDetail?caseId=1629859308&payorId=1621404135');
  await expect(page.locator('#main-content')).toContainText('Party Name:');
  await expect(page.locator('#main-content')).toContainText('Party Connection:');
  await expect(page.locator('#main-content')).toContainText('Total Amount Due:');
});