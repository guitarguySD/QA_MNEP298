import { test, expect } from '@playwright/test';

test('Payor does not owe money', async ({ page }) => {
  const caseNumber = '70-CV-25-55';
  
  await page.goto('https://qa3customer.sonant.com/mnpaymentapplication');
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find cases by case number' }).click();

  await page.getByLabel('Testing, Plaintiff').check();
  await page.getByRole('button', { name: 'Continue with selected party' }).click();

  await expect(page.locator('#main-content')).toContainText('$0.00');
  await expect(page.getByRole('heading', { name: 'Unable to Make Payment' })).toBeVisible();
  await expect(page.locator('#main-content')).toContainText(caseNumber);
  await expect(page.getByLabel('Unable to Make Payment')).toContainText(`This case is not able to be paid using this system because there is no amount due on this case.`);
});


