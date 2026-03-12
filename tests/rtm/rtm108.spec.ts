import { test, expect } from '@playwright/test';

test('Payment plan unable to be paid', async ({ page }) => {
  const caseNumber = '25vb2518';

  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find' }).click();

  const unableToMakePaymentHeading = page.locator('#contact-court-heading');
  await expect(unableToMakePaymentHeading).toBeVisible();
  await expect(unableToMakePaymentHeading).toContainText('Unable to Make Payment');
});