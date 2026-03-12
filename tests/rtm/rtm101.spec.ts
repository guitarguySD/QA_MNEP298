import { test, expect } from '@playwright/test';

test('Search by case number. Adult criminal, juvenile criminal, non-criminal', async ({ page }) => {
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/');
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill('70vb2539');
  await page.getByRole('button', { name: 'Find' }).click();
  await page.goto('https://qa3customer.sonant.com/MNPaymentApplication/Case/CaseDetail?caseId=1629859308&payorId=1621404135');
  await expect(page.locator('#main-content')).toContainText('Crim/Traf Non-Mand');
  await page.getByRole('link', { name: 'Search Again' }).click();
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill('25jv254');
  await page.getByRole('button', { name: 'Find' }).click();
  await expect(page.locator('#main-content')).toContainText('Juvenile Petty Offense');
  await page.getByRole('link', { name: 'Search Again' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('radio', { name: 'Case Number' }).check();
  await page.getByRole('textbox', { name: 'Case Number' }).click();
  await page.getByRole('textbox', { name: 'Case Number' }).fill('70cv2540');
  await page.getByRole('button', { name: 'Find' }).click();
  await page.getByRole('radio', { name: 'testing, defendant' }).check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.locator('#main-content')).toContainText('Property Damage');
});