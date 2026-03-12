import { test, expect } from '@playwright/test';

test('case requires court contact', async ({ page }) => {
  const caseNumber = '66-T3-95-006846';
  
  await page.goto('https://qa3customer.sonant.com/mnpaymentapplication');
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find' }).click();


  await expect(page.locator('#main-content')).toContainText(caseNumber);
  await expect(page.getByRole('heading', { name: 'Unable to Make Payment' })).toBeVisible();

  const contactSection = page.getByLabel('Unable to Make Payment');
  await expect(contactSection).toContainText('This case is not able to be paid using this system.');
  await expect(contactSection).toContainText('Please');
  await expect(contactSection).toContainText('contact district court administration');
  await expect(contactSection).toContainText('regarding this case.');
});