import { test, expect } from '@playwright/test';

test('Payment Plan Payment messaging', async ({ page }) => {
  const caseNumber = '72vb258';
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find cases by case number' }).click();
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/Case/CaseDetail?paymentPlanId=1610908467&payorId=1621404217');
  await expect(page.getByLabel('Make Payment Plan Payment')).toContainText('This case is covered by a payment plan. One payment plan can cover multiple cases.');
  await expect(page.getByLabel('Make Payment Plan Payment')).toMatchAriaSnapshot(`
    - paragraph:
      - strong: "Case Numbers covered by plan:"
      - text: /\\d+-VB-\\d+-8, \\d+-VB-\\d+-9/
      - strong: "Citation Numbers covered by plan:"
      - text: /\\d+, \\d+/
    `);
  await expect(page.getByLabel('Make Payment Plan Payment')).toContainText('Your next installment amount is $0.00. You can pay this installment amount plus a convenience fee of $2.34.You can pay a different amount up to the remaining balance of $200.00 plus the convenience fee.');
  await expect(page.getByLabel('Make Payment Plan Payment')).toContainText('MasterCard, Visa and Discover are accepted');
  await expect(page.locator('#paymentForm')).toMatchAriaSnapshot(`
    - text: Make a Payment of
    - spinbutton "Make a Payment of"
    - alert
    - text: /\\$\\d+\\.\\d+ Minimum \\$\\d+\\.\\d+ Maximum/
    `);
});
