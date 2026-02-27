import { test, expect } from '@playwright/test';

test('case requires court contact', async ({ page }) => {
  const caseNumber = '70-CV-25-54';
  
  await page.goto('https://qa3customer.sonant.com/mnpaymentapplication');
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find cases by case number' }).click();

  await expect(page.locator('#main-content')).toContainText('$0.00');
  await expect(page.locator('#main-content')).toContainText(caseNumber);
  await expect(page.getByRole('heading', { name: 'Unable to Make Payment' })).toBeVisible();

  //await expect(page.getByLabel('Unable to Make Payment')).toContainText(`This case is not able to be paid using this system because there is no amount due on this case.`);
});