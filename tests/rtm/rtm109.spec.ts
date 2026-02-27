import { test, expect } from '@playwright/test';

test('Other payable cases Adult Criminal', async ({ page }) => {
  const caseNumber = '70vb2539';

  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await expect(page.getByRole('paragraph').filter({ hasText: 'You may have other payable' })).toBeVisible();
  await expect(page.getByLabel('View other payable citations')).toContainText('You may have other payable cases or citations. Click to view');
  await page.getByRole('link', { name: 'View other payable citations' }).click();
  await expect(page.getByRole('heading', { name: 'Search Results' })).toBeVisible();
});

test('Other payable cases Juvenile Criminal', async ({ page }) => {
  const caseNumber = '25jv256';

  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await expect(page.getByRole('paragraph').filter({ hasText: 'You may have other payable' })).toBeVisible();
  await expect(page.getByLabel('View other payable citations')).toContainText('You may have other payable cases or citations. Click to view');
  await page.getByRole('link', { name: 'View other payable citations' }).click();
  await expect(page.getByRole('heading', { name: 'Search Results' })).toBeVisible();
});


test('Other payable cases Non-Criminal', async ({ page }) => {
  const caseNumber = '70cv2540';

  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/Case/PartySelection');
  await page.getByRole('radio', { name: 'testing, defendant' }).check();
  await page.getByRole('button', { name: 'Continue with selected party' }).click();
  await expect(page.getByRole('paragraph').filter({ hasText: 'You may have other payable' })).toBeVisible();
  await expect(page.getByLabel('View other payable citations')).toContainText('You may have other payable cases or citations. Click to view');
  await page.getByRole('link', { name: 'View other payable citations' }).click();
  await expect(page.getByRole('heading', { name: 'Search Results' })).toBeVisible();
});


test('Other payable cases Negative test Business', async ({ page }) => {
  const caseNumber = '40vb254';

  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find cases by case number' }).click();

  await expect(page.getByLabel('View other payable citations')).not.toBeVisible();
});


test('Other payable cases Negative test Name not available', async ({ page }) => {
  const caseNumber = '70cv2548';

  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find cases by case number' }).click();

  await expect(page.getByLabel('View other payable citations')).not.toBeVisible();
});


test('Other payable cases Negative test Parking', async ({ page }) => {
  const caseNumber = '40vb255';

  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find cases by case number' }).click();

  await expect(page.getByLabel('View other payable citations')).not.toBeVisible();
});
