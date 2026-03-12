import { test, expect } from '@playwright/test';

test('case requires court contact', async ({ page }) => {
  const caseNumber = '43-CR-25-8';
  
  await page.goto('https://qa3customer.sonant.com/mnpaymentapplication');
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill(caseNumber);
  await page.getByRole('button', { name: 'Find' }).click();


  await expect(page.locator('#main-content')).toContainText(caseNumber);
  await expect(page.getByRole('heading', { name: 'Unable to Make Payment' })).toBeVisible();

  const contactSection = page.getByLabel('Unable to Make Payment - Court Appearance Required');
  await expect(contactSection).toContainText('You must appear in court as required.');
});