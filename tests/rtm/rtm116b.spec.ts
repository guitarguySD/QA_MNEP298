import { test, expect } from '@playwright/test';

test('Payor does not owe money', async ({ page }) => {
  const caseNumber = '25-JV-25-6';
  
  await page.goto('https://qa3customer.sonant.com/mnpaymentapplication');
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find' }).click();

  await expect(page.locator('#main-content')).toContainText('$0.00');
  await expect(page.getByRole('heading', { name: 'Unable to Make Payment' })).toBeVisible();
  await expect(page.locator('#main-content')).toContainText(caseNumber);
  await expect(page.getByLabel('Unable to Make Payment')).toContainText(`This case is not able to be paid using this system because there is no amount due on this case.`);
});


